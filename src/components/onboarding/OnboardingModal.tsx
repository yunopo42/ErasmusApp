"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import styles from "./onboarding.module.css";

const COUNTRIES = [
    { code: 'PL', name: 'Poland', flag: '🇵🇱' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'OTHER', name: 'Other', flag: '🌍' },
];

export default function OnboardingModal({ user }: { user: any }) {
    const router = useRouter();
    const supabase = createClient();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        targetCountry: '',
        university: '',
        startDate: '',
        endDate: ''
    });

    const handleNext = async () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            await saveProfile();
        }
    };

    const saveProfile = async () => {
        setLoading(true);
        try {
            // 1. Update Profile
            const { error } = await supabase
                .from('profiles')
                .update({
                    target_country: formData.targetCountry,
                    university: formData.university,
                    start_date: formData.startDate,
                    end_date: formData.endDate,
                    // We can set default checklist items here later
                })
                .eq('id', user.id);

            if (error) throw error;

            // 2. Refresh page to remove modal
            router.refresh();

        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Error saving profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {/* Step Indicator */}
                <div className={styles.content}>
                    <div className={styles.stepIndicator}>
                        <div className={`${styles.dot} ${step === 1 ? styles.dotActive : ''}`}></div>
                        <div className={`${styles.dot} ${step === 2 ? styles.dotActive : ''}`}></div>
                        <div className={`${styles.dot} ${step === 3 ? styles.dotActive : ''}`}></div>
                    </div>

                    {/* STEP 1: Destination */}
                    {step === 1 && (
                        <>
                            <h2 className={styles.title}>Where are you going? ✈️</h2>
                            <p className={styles.subtitle}>Select your Erasmus destination country.</p>

                            <div className={styles.grid}>
                                {COUNTRIES.map((country) => (
                                    <div
                                        key={country.code}
                                        className={`${styles.optionCard} ${formData.targetCountry === country.name ? styles.optionCardSelected : ''}`}
                                        onClick={() => setFormData({ ...formData, targetCountry: country.name })}
                                    >
                                        <span className={styles.flag}>{country.flag}</span>
                                        <span className={styles.optionTitle}>{country.name}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* STEP 2: University */}
                    {step === 2 && (
                        <>
                            <h2 className={styles.title}>Which University? 🎓</h2>
                            <p className={styles.subtitle}>Tell us where you'll be studying.</p>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>University Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g. University of Warsaw"
                                    value={formData.university}
                                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                                />
                            </div>
                        </>
                    )}

                    {/* STEP 3: Dates */}
                    {step === 3 && (
                        <>
                            <h2 className={styles.title}>When are you going? 📅</h2>
                            <p className={styles.subtitle}>Set your Erasmus timeline.</p>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Start Date</label>
                                <input
                                    type="date"
                                    className={styles.input}
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>End Date (Approx.)</label>
                                <input
                                    type="date"
                                    className={styles.input}
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                />
                            </div>
                        </>
                    )}
                </div>

                {/* Footer Actions */}
                <div className={styles.footer}>
                    <button
                        className={styles.backBtn}
                        onClick={() => setStep(step - 1)}
                        disabled={step === 1}
                        style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                    >
                        Back
                    </button>

                    <button
                        className={styles.nextBtn}
                        onClick={handleNext}
                        disabled={
                            (step === 1 && !formData.targetCountry) ||
                            (step === 2 && !formData.university) ||
                            (step === 3 && (!formData.startDate || !formData.endDate)) ||
                            loading
                        }
                    >
                        {loading ? 'Setting up...' : (step === 3 ? 'Finish Setup' : 'Next Step')}
                    </button>
                </div>
            </div>
        </div>
    );
}
