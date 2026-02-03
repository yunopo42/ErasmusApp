import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="app-root">
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}>ErasmusHub</div>
                    <nav className={styles.nav}>
                        <Link href="#features" className={styles.navLink}>Features</Link>
                        <Link href="#pricing" className={styles.navLink}>Pricing</Link>
                        <Link href="/login" className={styles.navLink}>Log in</Link>
                        <Link href="/register" className="btn btn-primary">Get Started</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="main-content">
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>
                        Your Ultimate Companion for the <span style={{ color: 'var(--primary)' }}>Erasmus Journey</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        Manage your visa checklist, budget, and travel passport in one place.
                        Join thousands of students making the most of their exchange.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/register" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>Start Your Journey</Link>
                        <Link href="#features" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>Explore Features</Link>
                    </div>
                </section>

                {/* Features Preview */}
                <section id="features" className={styles.featuresSection}>
                    <div className={styles.featuresContainer}>
                        <h2 className={styles.sectionTitle}>Everything you need</h2>
                        <div className={styles.grid}>
                            {/* Feature 1 */}
                            <div className={styles.card}>
                                <div className={styles.iconBox}>
                                    ✈️
                                </div>
                                <h3 className={styles.cardTitle}>Visa & Checklists</h3>
                                <p className={styles.cardText}>Country-specific visa requirements and automated checklists so you never miss a deadline.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className={styles.card}>
                                <div className={styles.iconBox}>
                                    💰
                                </div>
                                <h3 className={styles.cardTitle}>Budget Tracking</h3>
                                <p className={styles.cardText}>Track your grants and expenses. Manage budgets for trips and daily life effortlessly.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className={styles.card}>
                                <div className={styles.iconBox}>
                                    🌍
                                </div>
                                <h3 className={styles.cardTitle}>Travel Passport</h3>
                                <p className={styles.cardText}>A digital passport to record your travels, photos, and memories from every city you visit.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    &copy; {new Date().getFullYear()} ErasmusHub. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
