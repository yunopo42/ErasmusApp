"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase";
import styles from "./documents.module.css";

type FileItem = {
    id: string; // name in storage
    name: string;
    size: number;
    created_at: string;
    url: string;
};

export default function DocumentsPage() {
    const supabase = createClient();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [files, setFiles] = useState<FileItem[]>([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // List files in the user's folder
        const { data, error } = await supabase
            .storage
            .from('documents')
            .list(user.id + '/', {
                limit: 100,
                offset: 0,
                sortBy: { column: 'created_at', order: 'desc' },
            });

        if (error) {
            console.error("Error fetching files:", error);
        } else if (data) {
            // Construct file objects
            const fileList = data.map(file => ({
                id: file.name,
                name: file.name,
                size: file.metadata?.size || 0,
                created_at: file.created_at,
                url: "" // Url will be signed on demand or public
            }));
            setFiles(fileList as any);
        }
        setLoading(false);
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        await uploadFile(file);
    };

    const uploadFile = async (file: File) => {
        setUploading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const filePath = `${user.id}/${file.name}`;

        const { error } = await supabase.storage
            .from('documents')
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false // Don't overwrite
            });

        if (error) {
            alert("Error uploading file: " + error.message);
        } else {
            await fetchFiles();
        }
        setUploading(false);
    };

    const downloadFile = async (fileName: string) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase.storage
            .from('documents')
            .createSignedUrl(`${user.id}/${fileName}`, 60); // Valid for 60s

        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank');
        }
    };

    const deleteFile = async (fileName: string) => {
        if (!confirm("Are you sure you want to delete this file?")) return;

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase.storage
            .from('documents')
            .remove([`${user.id}/${fileName}`]);

        if (error) {
            alert("Error deleting: " + error.message);
        } else {
            // Remove from local state
            setFiles(prev => prev.filter(f => f.name !== fileName));
        }
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className={styles.container}>
            <div style={{ marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>My Documents</h1>
                <p style={{ color: 'var(--secondary-foreground)' }}>Safely store your passport, acceptance letters, and more.</p>
            </div>

            {/* Upload Area */}
            <div
                className={styles.uploadArea}
                onClick={() => fileInputRef.current?.click()}
            >
                <span className={styles.uploadIcon}>{uploading ? '⏳' : '☁️'}</span>
                <h3 className={styles.uploadTitle}>{uploading ? 'Uploading...' : 'Click to Upload'}</h3>
                <p className={styles.uploadSubtitle}>PDF, JPG, PNG (Max 5MB)</p>
                <input
                    type="file"
                    ref={fileInputRef}
                    className={styles.hiddenInput}
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png"
                    disabled={uploading}
                />
            </div>

            {/* File List */}
            {loading ? (
                <p>Loading files...</p>
            ) : files.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--secondary-foreground)', padding: '2rem' }}>No documents uploaded yet.</p>
            ) : (
                <div className={styles.fileList}>
                    {files.map(file => (
                        <div key={file.id} className={styles.fileCard}>
                            <div className={styles.fileIcon}>
                                {file.name.endsWith('.pdf') ? '📄' : '🖼️'}
                            </div>
                            <div className={styles.fileInfo}>
                                <div className={styles.fileName} title={file.name}>{file.name}</div>
                                <div className={styles.fileMeta}>{formatSize(file.size)} • {new Date(file.created_at).toLocaleDateString()}</div>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    className={styles.actionBtn}
                                    title="Download"
                                    onClick={() => downloadFile(file.name)}
                                >
                                    ⬇️
                                </button>
                                <button
                                    className={styles.actionBtn}
                                    title="Delete"
                                    onClick={() => deleteFile(file.name)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
