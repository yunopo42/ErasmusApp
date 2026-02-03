"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import styles from "./passport.module.css";
import stylesModal from "@/components/onboarding/onboarding.module.css"; // Reuse modal styles

type VisitedPlace = {
    id: string;
    country: string;
    city: string;
    visit_date: string;
    photo_url: string;
    notes: string;
};

export default function PassportPage() {
    const supabase = createClient();
    const [places, setPlaces] = useState<VisitedPlace[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProModalOpen, setIsProModalOpen] = useState(false);

    // Form State
    const [newPlace, setNewPlace] = useState({
        country: '',
        city: '',
        date: '',
        notes: '',
        photo: null as File | null
    });
    const [uploading, setUploading] = useState(false);

    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase
            .from('visited_places')
            .select('*')
            .eq('user_id', user.id)
            .order('visit_date', { ascending: false });

        if (data) setPlaces(data as any);
        setLoading(false);
    };

    const calculateStats = () => {
        const uniqueCountries = new Set(places.map(p => p.country)).size;
        return {
            countries: uniqueCountries,
            cities: places.length
        };
    };

    const handleEdit = (place: VisitedPlace) => {
        setNewPlace({
            country: place.country,
            city: place.city,
            date: place.visit_date || '',
            notes: place.notes || '',
            photo: null
        });
        setEditingId(place.id);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this stamp?")) return;

        const { error } = await supabase.from('visited_places').delete().eq('id', id);
        if (error) alert("Error deleting: " + error.message);
        else fetchPlaces();
    };

    const handleCreateOrUpdate = async () => {
        if (!newPlace.city || !newPlace.country) return;

        setUploading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        let photoUrl = editingId ? places.find(p => p.id === editingId)?.photo_url : null;

        // 1. Upload Photo if selected (overwrites existing if any)
        if (newPlace.photo) {
            try {
                const fileExt = newPlace.photo.name.split('.').pop();
                const fileName = `travel-${Math.random()}.${fileExt}`;
                const filePath = `${user.id}/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('travel')
                    .upload(filePath, newPlace.photo);

                if (uploadError) throw uploadError;

                const { data } = supabase.storage
                    .from('travel')
                    .getPublicUrl(filePath);

                photoUrl = data.publicUrl;
            } catch (error: any) {
                alert('Error uploading photo: ' + error.message);
                setUploading(false);
                return;
            }
        }

        // 2. Insert or Update into DB
        const payload = {
            user_id: user.id,
            country: newPlace.country,
            city: newPlace.city,
            visit_date: newPlace.date || null,
            notes: newPlace.notes,
            photo_url: photoUrl
        };

        let error;
        if (editingId) {
            // UPDATE
            const { error: updateError } = await supabase
                .from('visited_places')
                .update(payload)
                .eq('id', editingId);
            error = updateError;
        } else {
            // CREATE
            const { error: insertError } = await supabase
                .from('visited_places')
                .insert(payload);
            error = insertError;
        }

        if (error) {
            alert("Error saving place: " + error.message);
        } else {
            setIsModalOpen(false);
            setNewPlace({ country: '', city: '', date: '', notes: '', photo: null });
            setEditingId(null);
            fetchPlaces();
        }
        setUploading(false);
    };

    const openNewModal = () => {
        setNewPlace({ country: '', city: '', date: '', notes: '', photo: null });
        setEditingId(null);
        setIsModalOpen(true);
    };

    return (
        <div className={styles.container}>

            {/* Header with Passport Visual */}
            <div className={styles.header}>
                <div className={styles.titleSection}>
                    <h1>🌍 Travel Passport</h1>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{calculateStats().countries}</span>
                            <span className={styles.statLabel}>Countries</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{calculateStats().cities}</span>
                            <span className={styles.statLabel}>Cities</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className={styles.shareBtn} onClick={() => setIsProModalOpen(true)}>
                        📤 Share
                    </button>
                    <button className={styles.addBtn} onClick={openNewModal}>
                        + Add Stamp
                    </button>
                </div>
            </div>

            {/* Grid of Visited Places */}
            {loading ? (
                <p>Loading your passport...</p>
            ) : places.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--border)', borderRadius: '1rem', color: 'var(--secondary-foreground)' }}>
                    <h3>No stamps yet 🛂</h3>
                    <p>Start exploring and add your first destination!</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {places.map(place => (
                        <div key={place.id} className={styles.card}>
                            {/* Action Buttons */}
                            <div className={styles.actions}>
                                <button className={styles.actionBtn} onClick={() => handleEdit(place)} title="Edit">✏️</button>
                                <button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={() => handleDelete(place.id)} title="Delete">🗑️</button>
                            </div>

                            {place.photo_url ? (
                                <img src={place.photo_url} alt={place.city} className={styles.cardImage} />
                            ) : (
                                <div className={styles.cardImage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', backgroundColor: '#e2e8f0' }}>
                                    ✈️
                                </div>
                            )}
                            <span className={styles.stampBadge}>✅</span>

                            <div className={styles.cardContent}>
                                <div className={styles.cardLocation}>
                                    <span>{place.city}, {place.country}</span>
                                </div>
                                <div className={styles.cardDate}>
                                    {place.visit_date ? new Date(place.visit_date).toLocaleDateString() : 'Date unknown'}
                                </div>
                                {place.notes && <p className={styles.cardNotes}>{place.notes}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* PRO MODAL */}
            {isProModalOpen && (
                <div className={styles.proModalOverlay} onClick={() => setIsProModalOpen(false)}>
                    <div className={styles.proModal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeProModal} onClick={() => setIsProModalOpen(false)}>&times;</button>

                        <div className={styles.proBadge}>Pro Feature</div>
                        <h2 className={styles.proTitle}>Share Your Journey 🌍</h2>
                        <p className={styles.proDesc}>
                            Sharing your travel passport with friends and family is available on the <b>Pro Plan</b>.
                            Show off your stamps and stats in a beautiful public page!
                        </p>

                        <button className={styles.proBtn} onClick={() => alert("Redirecting to upgrade page...")}>
                            Upgrade to Pro ✨
                        </button>
                    </div>
                </div>
            )}

            {/* Add Place Modal */}
            {isModalOpen && (
                <div className={stylesModal.overlay}>
                    <div className={stylesModal.modal}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                            <h2 style={{ fontSize: '1.25rem' }}>Add New Stamp 🛂</h2>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Country</label>
                                    <input
                                        className={styles.input}
                                        placeholder="e.g. Italy"
                                        value={newPlace.country}
                                        onChange={e => setNewPlace({ ...newPlace, country: e.target.value })}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>City</label>
                                    <input
                                        className={styles.input}
                                        placeholder="e.g. Rome"
                                        value={newPlace.city}
                                        onChange={e => setNewPlace({ ...newPlace, city: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Date of Visit</label>
                                <input
                                    type="date"
                                    className={styles.input}
                                    value={newPlace.date}
                                    onChange={e => setNewPlace({ ...newPlace, date: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Photo (Optional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className={styles.fileInput}
                                    onChange={e => setNewPlace({ ...newPlace, photo: e.target.files ? e.target.files[0] : null })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>My Notes</label>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="Best pizza ever! Met cool people at the hostel..."
                                    value={newPlace.notes}
                                    onChange={e => setNewPlace({ ...newPlace, notes: e.target.value })}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button
                                    className={stylesModal.backBtn}
                                    onClick={() => setIsModalOpen(false)}
                                    disabled={uploading}
                                    style={{ flex: 1, border: '1px solid var(--border)' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={stylesModal.nextBtn}
                                    onClick={handleCreateOrUpdate}
                                    disabled={uploading}
                                    style={{ flex: 1 }}
                                >
                                    {uploading ? 'Stamping...' : 'Stamp Passport!'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
