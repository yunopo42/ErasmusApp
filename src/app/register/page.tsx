"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../auth.module.css";

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Mock signup: Just redirect to dashboard
        setTimeout(() => {
            router.push("/dashboard?welcome=true");
        }, 500);
    };

    return (
        <div className={styles.container}>
            <button className={styles.langSwitch}>
                🌐 TR / EN
            </button>

            <div className={styles.card}>
                <div className={styles.header}>
                    <Link href="/" className={styles.logo}>ErasmusHub</Link>
                    <h1 className={styles.title}>Create account</h1>
                    <p className={styles.subtitle}>Start your Erasmus journey today</p>
                </div>

                {error && (
                    <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.875rem', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={styles.input}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={styles.input}
                            placeholder="Create a strong password"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <div className={styles.divider}>Or sign up with</div>

                <button type="button" className={styles.socialButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className={styles.footer}>
                    Already have an account? <Link href="/login" className={styles.link}>Sign in</Link>
                </div>
            </div>
        </div>
    );
}
