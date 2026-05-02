"use client";

import { useState, useEffect } from "react";
import styles from "./opportunities.module.css";
import Link from "next/link";

type Opportunity = {
    id: string;
    title: string;
    organization: string;
    type: 'internship' | 'project' | 'other';
    location: string;
    salary?: string;
    deadline?: string;
    application_url: string;
};

export default function OpportunitiesPage() {
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    const [userProfile, setUserProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 1. Fetch User Profile for personalized links
        try {
            const profileRes = await fetch('/api/profile');
            const profile = await profileRes.json();
            setUserProfile(profile);

            // 2. Fetch Featured Opportunities
            const oppsRes = await fetch('/api/opportunities');
            const opps = await oppsRes.json();
            if (Array.isArray(opps)) setOpportunities(opps);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    // Helper to generate search links
    const getErasmusInternLink = () => "https://erasmusintern.org/traineeships";
    const getESCLink = () => "https://youth.europa.eu/solidarity/placement/search_en";
    const getUniversityLink = () => {
        if (!userProfile?.university) return "https://www.google.com/search?q=erasmus+partner+universities";
        return `https://www.google.com/search?q=${encodeURIComponent(userProfile.university + " erasmus partner universities agreement list")}`;
    };

    return (
        <div className={styles.container}>

            {/* 1. SMART SEARCH TOOLS */}
            <section>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>🚀 Smart Search</h2>
                </div>
                <div className={styles.toolsGrid}>
                    <a href={getErasmusInternLink()} target="_blank" className={styles.toolCard}>
                        <span className={styles.toolIcon}>💼</span>
                        <span className={styles.toolTitle}>Find Internships</span>
                        <span className={styles.toolDesc}>Search 10,000+ offers on ErasmusIntern.org</span>
                    </a>

                    <a href={getESCLink()} target="_blank" className={styles.toolCard}>
                        <span className={styles.toolIcon}>🤝</span>
                        <span className={styles.toolTitle}>Volunteering (ESC)</span>
                        <span className={styles.toolDesc}>Join social projects across Europe funded by EU.</span>
                    </a>

                    <a href={getUniversityLink()} target="_blank" className={styles.toolCard}>
                        <span className={styles.toolIcon}>🎓</span>
                        <span className={styles.toolTitle}>My University Agreements</span>
                        <span className={styles.toolDesc}>
                            {userProfile?.university
                                ? `See where students from ${userProfile.university} can go.`
                                : "Find your university's partner list."}
                        </span>
                    </a>
                </div>
            </section>

            {/* 2. FEATURED OPPORTUNITIES */}
            <section>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>✨ Featured Picks</h2>
                    {/* Admin can add button here later */}
                </div>

                {loading ? (
                    <p>Loading opportunities...</p>
                ) : opportunities.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--border)', borderRadius: '1rem', color: 'var(--secondary-foreground)' }}>
                        <h3>No featured opportunities yet.</h3>
                        <p>Check "Smart Search" above to find thousands of listings!</p>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {opportunities.map(opp => (
                            <div key={opp.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.logoPlaceholder}>
                                        {opp.type === 'internship' ? '💼' : opp.type === 'project' ? '🌍' : '🏷️'}
                                    </div>
                                    <span className={`${styles.badge} ${styles[`type_${opp.type}`]}`}>
                                        {opp.type}
                                    </span>
                                </div>

                                <div>
                                    <h3 className={styles.cardTitle}>{opp.title}</h3>
                                    <div className={styles.cardOrg}>{opp.organization}</div>
                                </div>

                                <div className={styles.metaGrid}>
                                    <div className={styles.metaItem}>📍 {opp.location}</div>
                                    {opp.salary && <div className={styles.metaItem}>💰 {opp.salary}</div>}
                                    {opp.deadline && <div className={styles.metaItem}>📅 {new Date(opp.deadline).toLocaleDateString()}</div>}
                                </div>

                                <a href={opp.application_url} target="_blank" className={styles.applyBtn}>
                                    Apply Now ↗
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
