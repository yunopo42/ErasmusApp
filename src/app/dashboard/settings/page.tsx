"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import styles from "./settings.module.css";

const COUNTRIES = ['Poland', 'Italy', 'Spain', 'Germany', 'France', 'Portugal', 'Czech Republic', 'Netherlands'];

export default function SettingsPage() {
    const supabase = createClient();
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
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

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
        setLoading(false);
    };

    const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploadingAvatar(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const fileName = `avatar-${Math.random()}.${fileExt}`;
            const filePath = `${user.id}/${fileName}`;

            // 1. Upload to Storage
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath);

            // 3. Update Profile
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ avatar_url: publicUrl, updated_at: new Date() })
                .eq('id', user.id);

            if (updateError) throw updateError;

            setFormData(prev => ({ ...prev, avatar_url: publicUrl }));
            alert('Avatar updated!');
            router.refresh();

        } catch (error: any) {
            alert('Error uploading avatar: ' + error.message);
        } finally {
            setUploadingAvatar(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase
            .from('profiles')
            .update({
                full_name: formData.full_name,
                target_country: formData.target_country,
                university: formData.university,
                start_date: formData.start_date || null,
                end_date: formData.end_date || null,
                updated_at: new Date()
            })
            .eq('id', user.id);

        if (error) {
            alert("Error updating profile: " + error.message);
        } else {
            alert("Profile updated successfully! ✅");
            router.refresh();
        }
        setSaving(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
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
