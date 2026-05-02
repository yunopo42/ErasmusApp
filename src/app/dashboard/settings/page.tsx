"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./settings.module.css";

const COUNTRIES = ['Poland', 'Italy', 'Spain', 'Germany', 'France', 'Portugal', 'Czech Republic', 'Netherlands'];

export default function SettingsPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        full_name: '',
        target_country: '',
        university: '',
        start_date: '',
        end_date: '',
        avatar_url: ''
    });
    const [uploadingAvatar, setUploadingAvatar] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await fetch('/api/profile');
            const data = await res.json();

            if (data) {
                setFormData({
                    full_name: data.full_name || '',
                    target_country: data.target_country || '',
                    university: data.university || '',
                    start_date: data.start_date || '',
                    end_date: data.end_date || '',
                    avatar_url: data.avatar_url || ''
                });
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
        setLoading(false);
    };

    const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        alert("Avatar upload is in demo mode. Changes are not persisted to storage.");
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/profile', {
                method: 'POST', // Actually my profile API handles POST as update/upsert
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert("Profile updated successfully! ✅");
                router.refresh();
            }
        } catch (error) {
            alert("Error updating profile");
        }
        setSaving(false);
    };

    const handleLogout = async () => {
        router.push('/login');
    };

    if (loading) return <p style={{ padding: '2rem' }}>Loading settings...</p>;

    return (
        <div className={styles.container}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Account Settings</h1>

            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>Profile Information</h2>

                {/* Avatar Uploader */}
                <div className={styles.avatarContainer}>
                    {formData.avatar_url ? (
                        <img
                            src={formData.avatar_url}
                            alt="Avatar"
                            className={styles.avatar}
                        />
                    ) : (
                        <div className={styles.avatar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                            👤
                        </div>
                    )}
                    <div className={styles.avatarOverlay}>
                        📷
                    </div>
                    <input
                        type="file"
                        className={styles.fileInput}
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        disabled={uploadingAvatar}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                        className={styles.input}
                        value={formData.full_name}
                        onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                    />
                </div>

                <div className={styles.row}>
                    <div className={styles.formGroup} style={{ flex: 1 }}>
                        <label className={styles.label}>Destination Country</label>
                        <select
                            className={styles.select}
                            value={formData.target_country}
                            onChange={e => setFormData({ ...formData, target_country: e.target.value })}
                        >
                            <option value="">Select Country</option>
                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div className={styles.formGroup} style={{ flex: 1 }}>
                        <label className={styles.label}>Host University</label>
                        <input
                            className={styles.input}
                            value={formData.university}
                            placeholder="e.g. University of Warsaw"
                            onChange={e => setFormData({ ...formData, university: e.target.value })}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.formGroup} style={{ flex: 1 }}>
                        <label className={styles.label}>Start Date</label>
                        <input
                            type="date"
                            className={styles.input}
                            value={formData.start_date}
                            onChange={e => setFormData({ ...formData, start_date: e.target.value })}
                        />
                    </div>
                    <div className={styles.formGroup} style={{ flex: 1 }}>
                        <label className={styles.label}>End Date</label>
                        <input
                            type="date"
                            className={styles.input}
                            value={formData.end_date}
                            onChange={e => setFormData({ ...formData, end_date: e.target.value })}
                        />
                    </div>
                </div>

                <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <button className={styles.logoutBtn} onClick={handleLogout}>
                Sign Out
            </button>
        </div>
    );
}
