"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../forum.module.css";
import { timeAgo } from "@/lib/utils";

// --- Types ---
type Author = {
    full_name: string;
    avatar_url: string | null;
};

type Comment = {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    profiles?: Author;
    attachment_url?: string | null;
    parent_id?: string | null;
    replies?: Comment[];
};

type Post = {
    id: string;
    title: string;
    content: string;
    category: string;
    created_at: string;
    user_id: string;
    profiles?: Author;
    attachment_url?: string | null;
};

// --- Helper Functions ---
const getAvatarUrl = (path: string | null) => {
    const supabase = createClient();
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
};

const renderAttachment = (url: string | null | undefined) => {
    if (!url) return null;
    const isImage = url.match(/\.(jpeg|jpg|gif|png)$/) != null;

    if (isImage) {
        return (
            <div style={{ marginTop: '1rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', maxWidth: '100%' }}>
                <img src={url} alt="Attachment" style={{ maxWidth: '100%', display: 'block' }} />
            </div>
        );
    }
    return (
        <div style={{ marginTop: '0.5rem' }}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'var(--accent)', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'inherit', textDecoration: 'none' }}>
                📎 Download Attachment
            </a>
        </div>
    );
};

// --- Recursive Comment Component ---
// Defined OUTSIDE to prevent re-mounting on every render
const CommentItem = ({
    comment,
    depth = 0,
    replyingTo,
    setReplyingTo,
    nestedReplyContent,
    setNestedReplyContent,
    nestedReplyFile,
    setNestedReplyFile,
    handlePostComment,
    uploadingComment
}: {
    comment: Comment,
    depth?: number,
    replyingTo: string | null,
    setReplyingTo: (id: string | null) => void,
    nestedReplyContent: string,
    setNestedReplyContent: (content: string) => void,
    nestedReplyFile: File | null,
    setNestedReplyFile: (file: File | null) => void,
    handlePostComment: (parentId: string) => void,
    uploadingComment: boolean
}) => {
    const authorName = comment.profiles?.full_name || "Unknown";
    const avatarUrl = getAvatarUrl(comment.profiles?.avatar_url || null);
    const isReplying = replyingTo === comment.id;

    return (
        <div style={{
            marginBottom: '1rem',
            paddingLeft: depth > 0 ? '1rem' : '0',
            borderLeft: depth > 0 ? '2px solid var(--border)' : 'none',
            marginLeft: depth > 0 ? '0.5rem' : '0'
        }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {/* Avatar */}
                <div style={{ flexShrink: 0 }}>
                    <div style={{
                        width: depth > 0 ? '24px' : '32px', height: depth > 0 ? '24px' : '32px', borderRadius: '50%',
                        backgroundColor: avatarUrl ? 'transparent' : '#64748b',
                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 600, overflow: 'hidden', fontSize: '0.85rem'
                    }}>
                        {avatarUrl ? <img src={avatarUrl} alt={authorName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : authorName[0]}
                    </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        backgroundColor: 'var(--background)', border: '1px solid var(--border)',
                        borderRadius: '0 1rem 1rem 1rem', padding: '1rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'baseline' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{authorName}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--secondary-foreground)' }}>
                                {timeAgo(comment.created_at)}
                            </span>
                        </div>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{comment.content}</p>
                        {renderAttachment(comment.attachment_url)}

                        <button
                            onClick={() => {
                                setReplyingTo(isReplying ? null : comment.id);
                                setNestedReplyContent("");
                            }}
                            style={{
                                background: 'none', border: 'none', color: 'var(--primary)',
                                fontSize: '0.8rem', cursor: 'pointer', fontWeight: 500, marginTop: '0.5rem'
                            }}
                        >
                            {isReplying ? 'Cancel' : 'Reply'}
                        </button>
                    </div>

                    {/* Nested Reply Input */}
                    {isReplying && (
                        <div style={{ marginTop: '0.8rem', padding: '0.8rem', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                            <textarea
                                dir="ltr"
                                spellCheck={false}
                                className={styles.textarea}
                                style={{
                                    minHeight: '80px', borderRadius: '0.5rem', padding: '0.8rem', fontSize: '0.95rem',
                                    width: '100%', textAlign: 'left'
                                }}
                                placeholder={`Reply to ${authorName}...`}
                                value={nestedReplyContent}
                                onChange={e => setNestedReplyContent(e.target.value)}
                                autoFocus
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <label style={{
                                        cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.4rem 0.8rem', backgroundColor: 'var(--secondary)', borderRadius: '0.4rem', color: 'var(--secondary-foreground)'
                                    }}>
                                        📎 <span style={{ fontWeight: 500 }}>Attach</span>
                                        <input type="file" style={{ display: 'none' }} onChange={(e) => setNestedReplyFile(e.target.files ? e.target.files[0] : null)} />
                                    </label>
                                    {nestedReplyFile && <span style={{ fontSize: '0.75rem', color: 'var(--primary)', maxWidth: '150px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{nestedReplyFile.name}</span>}
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => setReplyingTo(null)}
                                        style={{
                                            padding: '0.5rem 1rem', fontSize: '0.85rem',
                                            background: 'transparent', border: '1px solid var(--border)',
                                            borderRadius: '0.4rem', cursor: 'pointer', color: 'var(--foreground)'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={styles.newPostBtn}
                                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
                                        onClick={() => handlePostComment(comment.id)}
                                        disabled={uploadingComment}
                                    >
                                        {uploadingComment ? 'Sending...' : 'Reply'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Recursively Render Children */}
            {comment.replies && comment.replies.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                    {comment.replies.map(child => (
                        <CommentItem
                            key={child.id}
                            comment={child}
                            depth={depth + 1}
                            replyingTo={replyingTo}
                            setReplyingTo={setReplyingTo}
                            nestedReplyContent={nestedReplyContent}
                            setNestedReplyContent={setNestedReplyContent}
                            nestedReplyFile={nestedReplyFile}
                            setNestedReplyFile={setNestedReplyFile}
                            handlePostComment={handlePostComment}
                            uploadingComment={uploadingComment}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Main Page Component ---
export default function PostDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const supabase = createClient();

    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);

    // Main Reply State
    const [newComment, setNewComment] = useState("");
    const [commentFile, setCommentFile] = useState<File | null>(null);
    const [uploadingComment, setUploadingComment] = useState(false);

    // Nested Reply State
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [nestedReplyContent, setNestedReplyContent] = useState("");
    const [nestedReplyFile, setNestedReplyFile] = useState<File | null>(null);

    useEffect(() => {
        if (id) {
            fetchPostData();
        }
    }, [id]);

    const fetchPostData = async () => {
        setLoading(true);

        const { data: postData, error: postError } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single();

        if (postError) {
            console.error("Error fetching post:", postError);
            router.push('/dashboard/forum');
            return;
        }

        const { data: commentsData } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', id)
            .order('created_at', { ascending: true });

        const userIds = new Set<string>();
        if (postData.user_id) userIds.add(postData.user_id);
        commentsData?.forEach((c: any) => c.user_id && userIds.add(c.user_id));

        const { data: profilesData } = await supabase
            .from('profiles')
            .select('id, full_name, avatar_url')
            .in('id', Array.from(userIds));

        const postAuthor = profilesData?.find(p => p.id === postData.user_id);
        const mergedPost = {
            ...postData,
            profiles: postAuthor ? { full_name: postAuthor.full_name, avatar_url: postAuthor.avatar_url } : null
        };

        const mergedComments = commentsData?.map((comment: any) => {
            const author = profilesData?.find(p => p.id === comment.user_id);
            return {
                ...comment,
                profiles: author ? { full_name: author.full_name, avatar_url: author.avatar_url } : null,
                replies: []
            };
        }) || [];

        // Build Tree
        const commentMap: any = {};
        const rootComments: Comment[] = [];

        mergedComments.forEach(c => commentMap[c.id] = c);

        mergedComments.forEach(c => {
            if (c.parent_id && commentMap[c.parent_id]) {
                commentMap[c.parent_id].replies.push(c);
            } else {
                rootComments.push(c);
            }
        });

        setPost(mergedPost as any);
        setComments(rootComments);
        setLoading(false);
    };

    const handleFileUpload = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('forum_uploads')
            .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from('forum_uploads').getPublicUrl(filePath);
        return data.publicUrl;
    };

    const handlePostComment = async (parentId: string | null = null) => {
        const { data: { user } } = await supabase.auth.getUser();
        const content = parentId ? nestedReplyContent : newComment;
        const file = parentId ? nestedReplyFile : commentFile;

        if (!user || !content.trim()) return;

        try {
            setUploadingComment(true);
            let attachmentUrl = null;

            if (file) {
                attachmentUrl = await handleFileUpload(file);
            }

            const { error } = await supabase
                .from('comments')
                .insert({
                    post_id: id,
                    user_id: user.id,
                    content: content,
                    attachment_url: attachmentUrl,
                    parent_id: parentId
                });

            if (error) throw error;

            if (parentId) {
                setNestedReplyContent("");
                setNestedReplyFile(null);
                setReplyingTo(null);
            } else {
                setNewComment("");
                setCommentFile(null);
            }
            fetchPostData();

        } catch (error: any) {
            alert("Error posting comment: " + error.message);
        } finally {
            setUploadingComment(false);
        }
    };

    // ... renderAttachment & getAvatarUrl moved OUTSIDE ...
    const postAuthor = post?.profiles?.full_name || "Unknown Student";
    // getAvatarUrl defined outside but uses supabase client, let's fix that in next step if generic one fails, but current one uses new client inside.
    const getPageAvatarUrl = (path: string | null) => {
        if (!path) return null;
        if (path.startsWith('http')) return path;
        return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
    };
    const postAvatar = getPageAvatarUrl(post?.profiles?.avatar_url || null);
    const postInitial = postAuthor.charAt(0);

    if (loading) return (
        <div className={styles.container}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
                <p>Loading discussion...</p>
            </div>
        </div>
    );

    if (!post) return null;

    return (
        <div className={styles.container} style={{ flexDirection: 'column', maxWidth: '800px', margin: '0 auto', height: 'auto', paddingBottom: '4rem' }}>

            {/* Navigation */}
            <Link
                href="/dashboard/forum"
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    textDecoration: 'none', color: 'var(--secondary-foreground)',
                    marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 500
                }}
            >
                ← Back to Forum
            </Link>

            {/* Main Post */}
            <div className={styles.postCard} style={{ cursor: 'default', border: '1px solid var(--border)', boxShadow: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            backgroundColor: postAvatar ? 'transparent' : 'var(--primary)',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 600, overflow: 'hidden', fontSize: '1.1rem'
                        }}>
                            {postAvatar ? <img src={postAvatar} alt={postAuthor} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : postInitial}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{postAuthor}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--secondary-foreground)' }}>
                                {timeAgo(post.created_at)} • {post.category}
                            </span>
                        </div>
                    </div>
                </div>

                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.5rem 0 1rem 0', lineHeight: 1.3 }}>{post.title}</h1>
                <div style={{ lineHeight: '1.7', fontSize: '1rem', whiteSpace: 'pre-wrap', color: 'var(--foreground)' }}>
                    {post.content}
                    {renderAttachment(post.attachment_url)}
                </div>
            </div>

            {/* Comments Section */}
            <div style={{ marginTop: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--secondary-foreground)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--foreground)' }}>Discussion</h3>
                    <span style={{ fontSize: '0.9rem', backgroundColor: 'var(--secondary)', padding: '0.1rem 0.5rem', borderRadius: '1rem' }}>
                        {comments.length}
                    </span>
                </div>

                {/* Main Comment Input */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        backgroundColor: 'var(--primary)', opacity: 0.5, flexShrink: 0
                    }}></div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <textarea
                            dir="ltr"
                            spellCheck={false}
                            className={styles.textarea}
                            style={{
                                minHeight: '100px', resize: 'vertical',
                                border: '1px solid var(--border)', borderRadius: '0.75rem',
                                padding: '1rem', fontSize: '0.95rem',
                                textAlign: 'left'
                            }}
                            placeholder="Write a helpful reply..."
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                        />

                        {/* File Attachment UI */}
                        <div style={{ padding: '0.5rem 1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--background-light)', borderRadius: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <label htmlFor="comment-file" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', padding: '0.3rem 0.5rem', borderRadius: '0.3rem', backgroundColor: 'var(--background)' }}>
                                    📎 <span style={{ color: 'var(--secondary-foreground)' }}>{commentFile ? commentFile.name : 'Attach file'}</span>
                                </label>
                                <input
                                    id="comment-file"
                                    type="file"
                                    onChange={(e) => setCommentFile(e.target.files ? e.target.files[0] : null)}
                                    style={{ display: 'none' }}
                                />
                                {commentFile && (
                                    <button onClick={() => setCommentFile(null)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>✕</button>
                                )}
                            </div>

                            <button
                                className={styles.newPostBtn}
                                style={{
                                    width: 'fit-content',
                                    padding: '0.6rem 1.5rem', fontSize: '0.9rem',
                                    opacity: uploadingComment || (!newComment.trim() && !commentFile) ? 0.6 : 1,
                                    cursor: uploadingComment || (!newComment.trim() && !commentFile) ? 'not-allowed' : 'pointer'
                                }}
                                onClick={() => handlePostComment(null)}
                                disabled={uploadingComment || (!newComment.trim() && !commentFile)}
                            >
                                {uploadingComment ? 'Sending...' : 'Post Reply'}
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {comments.length === 0 ? (
                        <div style={{
                            padding: '3rem', textAlign: 'center',
                            backgroundColor: 'var(--secondary)', borderRadius: '1rem',
                            border: '1px dashed var(--border)'
                        }}>
                            <p style={{ color: 'var(--secondary-foreground)' }}>No comments yet. Be the first to start the discussion! 🚀</p>
                        </div>
                    ) : (
                        comments.map(comment => (
                            <CommentItem
                                key={comment.id}
                                comment={comment}
                                replyingTo={replyingTo}
                                setReplyingTo={setReplyingTo}
                                nestedReplyContent={nestedReplyContent}
                                setNestedReplyContent={setNestedReplyContent}
                                nestedReplyFile={nestedReplyFile}
                                setNestedReplyFile={setNestedReplyFile}
                                handlePostComment={handlePostComment}
                                uploadingComment={uploadingComment}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
