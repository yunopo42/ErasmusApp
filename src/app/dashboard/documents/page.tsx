"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./documents.module.css";

type FileItem = {
    id: string;
    title: string;
    category: string;
    file_url: string;
    created_at: string;
};

export default function DocumentsPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [files, setFiles] = useState<FileItem[]>([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/documents');
            const data = await res.json();
            if (Array.isArray(data)) setFiles(data);
        } catch (error) {
            console.error("Error fetching files:", error);
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
        try {
            const res = await fetch('/api/documents', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: file.name,
                    category: 'General',
                    file_url: '#' // Mock URL
                })
            });

            if (res.ok) {
                await fetchFiles();
            }
        } catch (error) {
            alert("Error uploading file");
        }
        setUploading(false);
    };

    const downloadFile = (file: FileItem) => {
        alert("Downloading " + file.title + " (Demo mode)");
    };

    const deleteFile = async (id: string) => {
        if (!confirm("Are you sure you want to delete this file?")) return;
        // Delete API not fully implemented in this step for docs, but let's assume it works or just update local state
        setFiles(prev => prev.filter(f => f.id !== id));
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
                                {file.title.toLowerCase().endsWith('.pdf') ? '📄' : '🖼️'}
                            </div>
                            <div className={styles.fileInfo}>
                                <div className={styles.fileName} title={file.title}>{file.title}</div>
                                <div className={styles.fileMeta}>{file.category} • {new Date(file.created_at).toLocaleDateString()}</div>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    className={styles.actionBtn}
                                    title="Download"
                                    onClick={() => downloadFile(file)}
                                >
                                    ⬇️
                                </button>
                                <button
                                    className={styles.actionBtn}
                                    title="Delete"
                                    onClick={() => deleteFile(file.id)}
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
