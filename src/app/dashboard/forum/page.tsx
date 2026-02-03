"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import Link from "next/link";
import styles from "./forum.module.css";
import stylesModal from "@/components/onboarding/onboarding.module.css";
import { timeAgo } from "@/lib/utils";

type Author = {
    full_name: string;
    avatar_url: string | null;
};

type Post = {
    id: string;
    title: string;
    content: string;
    category: string;
    likes_count: number;
    created_at: string;
    user_id: string;
    profiles?: Author;
    comments: { count: number }[];
    post_likes?: { user_id: string }[];
    is_liked?: boolean;
    attachment_url?: string | null; // New field
};

const CATEGORIES = ["All", "General", "Accommodation", "Visa", "Nightlife", "Travel"];

export default function ForumPage() {
    const supabase = createClient();
    const [posts, setPosts] = useState<Post[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [likedPosts, setLikedPosts] = useState<string[]>([]); // Track liked posts (backwards compatibility)

    // New Post Modal & Upload State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', category: 'General' });
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        fetchPosts();
    }, [activeCategory]);

    const handleFileUpload = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('forum_uploads') // Using the new bucket
            .upload(filePath, file);

        if (uploadError) {
            throw uploadError;
        }

        const { data } = supabase.storage.from('forum_uploads').getPublicUrl(filePath);
        return data.publicUrl;
    };

    const fetchPosts = async () => {
        setLoading(true);

        const { data: { user } } = await supabase.auth.getUser();

        // 1. Fetch Posts with Likes Count and "Am I Liked?" check
        let query = supabase
            .from('posts')
            .select(`
                *,
                comments (count),
                post_likes (user_id)
            `)
            .order('created_at', { ascending: false });

        if (activeCategory !== "All") {
            query = query.eq('category', activeCategory);
        }

        const { data: postsData, error: postsError } = await query;

        if (postsError) {
            console.error("Error fetching posts:", postsError);
            setLoading(false);
            return;
        }

        if (!postsData || postsData.length === 0) {
            setPosts([]);
            setLoading(false);
            return;
        }

        // 2. Fetch Profiles manualy
        const userIds = Array.from(new Set(postsData.map(p => p.user_id)));

        const { data: profilesData } = await supabase
            .from('profiles')
            .select('id, full_name, avatar_url')
            .in('id', userIds);

        // 3. Merge Data & Calculate Likes
        const mergedPosts = postsData.map(post => {
            const author = profilesData?.find(p => p.id === post.user_id);
            const likes = post.post_likes || []; // Array of likes
            const isLikedByMe = user ? likes.some((l: any) => l.user_id === user.id) : false;

            return {
                ...post,
                likes_count: likes.length, // Calculate real count
                is_liked: isLikedByMe,     // Real DB check
                profiles: author ? { full_name: author.full_name, avatar_url: author.avatar_url } : null
            };
        });

        setPosts(mergedPosts as any);
        setLoading(false);
    };

    const handleCreatePost = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        if (!newPost.title || !newPost.content) return;

        try {
            setUploading(true);
            let attachmentUrl = null;

            if (selectedFile) {
                attachmentUrl = await handleFileUpload(selectedFile);
            }

            const { error } = await supabase
                .from('posts')
                .insert({
                    user_id: user.id,
                    title: newPost.title,
                    content: newPost.content,
                    category: newPost.category,
                    attachment_url: attachmentUrl
                });

            if (error) throw error;

            setIsModalOpen(false);
            setNewPost({ title: '', content: '', category: 'General' });
            setSelectedFile(null);
            fetchPosts();

        } catch (error: any) {
            alert("Error posting: " + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleLike = async (e: React.MouseEvent, postId: string, isLiked: boolean) => {
        e.preventDefault();
        e.stopPropagation();

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Optimistic Update
        setPosts(prev => prev.map(p => {
            if (p.id === postId) {
                return {
                    ...p,
                    likes_count: isLiked ? p.likes_count - 1 : p.likes_count + 1,
                    is_liked: !isLiked // Toggle state (defined in merged types below)
                } as any;
            }
            return p;
        }));

        if (isLiked) {
            // Unlike (Delete)
            const { error } = await supabase
                .from('post_likes')
                .delete()
                .eq('post_id', postId)
                .eq('user_id', user.id);

            if (error) console.error(error);
        } else {
            // Like (Insert)
            const { error } = await supabase
                .from('post_likes')
                .insert({ post_id: postId, user_id: user.id });

            if (error) console.error(error);
        }

        // Background refresh to sync perfectly
        // fetchPosts(); 
    };

    // Filter by Search Term locally
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getAvatarUrl = (path: string | null) => {
        if (!path) return null;
        if (path.startsWith('http')) return path;
        return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
    };

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
                <button className={styles.newPostBtn} onClick={() => setIsModalOpen(true)}>
                    ✍️ Ask a Question
                </button>

                <div className={styles.filterGroup}>
                    {/* Search Box */}
                    <div style={{ padding: '0 0 1rem 0' }}>
                        <input
                            type="text"
                            placeholder="🔍 Search topics..."
                            className={styles.input}
                            style={{ fontSize: '0.9rem', padding: '0.6rem' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.filterTitle}>Topics</div>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat === "All" ? "🔥 Trending" : `# ${cat}`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Feed */}
            <div className={styles.feed}>
                {loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
                        <div className="spinner"></div>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--border)', borderRadius: '1rem' }}>
                        <h3>No discussions found 🦗</h3>
                        <p style={{ color: 'var(--secondary-foreground)' }}>Try a different search or category.</p>
                    </div>
                ) : (
                    filteredPosts.map(post => {
                        const authorName = post.profiles?.full_name || "Unknown Student";
                        const authorAvatar = getAvatarUrl(post.profiles?.avatar_url || null);
                        const authorInitial = authorName.charAt(0);
                        const isLiked = post.is_liked || false; // Use real DB check

                        // Helper to detect file type for icon
                        const hasAttachment = !!post.attachment_url;
                        const isImage = hasAttachment && (post.attachment_url?.match(/\.(jpeg|jpg|gif|png)$/) != null);

                        return (
                            <Link href={`/dashboard/forum/${post.id}`} key={post.id} className={styles.postCard}>
                                <div className={styles.postHeader}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{
                                            width: '24px', height: '24px', borderRadius: '50%',
                                            backgroundColor: authorAvatar ? 'transparent' : 'var(--primary)',
                                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 600, overflow: 'hidden', fontSize: '0.75rem'
                                        }}>
                                            {authorAvatar ? <img src={authorAvatar} alt={authorName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : authorInitial}
                                        </div>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{authorName}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--secondary-foreground)' }}>• {timeAgo(post.created_at)}</span>
                                    </div>
                                    <span className={styles.postCategory}>{post.category}</span>
                                </div>
                                <h3 className={styles.postTitle}>{post.title}</h3>

                                {/* Content & Attachment Indicator */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                    <p className={styles.postPreview}>{post.content}</p>
                                    {hasAttachment && (
                                        <div style={{
                                            backgroundColor: 'var(--accent)', padding: '0.3rem 0.6rem', borderRadius: '0.5rem',
                                            fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
                                            whiteSpace: 'nowrap', border: '1px solid var(--border)'
                                        }}>
                                            {isImage ? '📷 Image' : '📎 Attachment'}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.postMeta}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>💬 {post.comments && post.comments[0] ? post.comments[0].count : 0}</span>
                                        <button
                                            onClick={(e) => handleLike(e, post.id, isLiked)}
                                            style={{
                                                background: 'none', border: 'none', color: isLiked ? '#ef4444' : 'inherit',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                fontWeight: isLiked ? 600 : 400, transform: isLiked ? 'scale(1.1)' : 'scale(1)', transition: 'all 0.2s'
                                            }}
                                            className="like-btn"
                                        >
                                            {isLiked ? '❤️' : '🤍'} {post.likes_count}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>

            {/* CREATE POST MODAL */}
            {isModalOpen && (
                <div className={stylesModal.overlay}>
                    <div className={stylesModal.modal}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                            <h2 style={{ fontSize: '1.25rem' }}>Ask the Community</h2>
                        </div>
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Title</label>
                                <input
                                    className={styles.input}
                                    placeholder="e.g. How to find accommodation in Warsaw?"
                                    value={newPost.title}
                                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Category</label>
                                <select
                                    className={styles.select}
                                    value={newPost.category}
                                    onChange={e => setNewPost({ ...newPost, category: e.target.value })}
                                >
                                    {CATEGORIES.filter(c => c !== "All").map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Details</label>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="Describe your question in detail..."
                                    value={newPost.content}
                                    onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                                />
                            </div>

                            {/* File Upload Input */}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Attachment (Optional)</label>
                                <input
                                    type="file"
                                    onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                                    style={{ fontSize: '0.9rem' }}
                                />
                                {selectedFile && <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginTop: '0.3rem' }}>Selected: {selectedFile.name}</div>}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button
                                    className={stylesModal.backBtn}
                                    onClick={() => setIsModalOpen(false)}
                                    style={{ flex: 1, border: '1px solid var(--border)' }}
                                    disabled={uploading}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={stylesModal.nextBtn}
                                    onClick={handleCreatePost}
                                    style={{ flex: 1, opacity: uploading ? 0.7 : 1 }}
                                    disabled={uploading}
                                >
                                    {uploading ? 'Posting...' : 'Post Question'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
