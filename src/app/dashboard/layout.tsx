"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./dashboard.module.css";
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

// Icons (Simple SVGs for now to adhere to Vanilla request, 
// usually we'd use lucide-react but I'll embed to avoid dep issues for now 
// or I can install lucide-react if preferred. I'll use text emojis/simple svgs for speed)

const MENU_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Opportunities", href: "/dashboard/opportunities", icon: "🌍" },
    { name: "Visa & Checklist", href: "/dashboard/visa", icon: "📝" },
    { name: "Documents", href: "/dashboard/documents", icon: "📂" },
    { name: "Budget", href: "/dashboard/budget", icon: "💰" },
    { name: "Calendar", href: "/dashboard/calendar", icon: "📅" },
    { name: "Travel Passport", href: "/dashboard/passport", icon: "🏕️" },
    { name: "Forum", href: "/dashboard/forum", icon: "💬" },
    { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState<{ id: string, message: string, time: string, isRead: boolean }[]>([
        { id: '1', message: 'Welcome to ErasmusHub! 🎉', time: 'Just now', isRead: false }
    ]);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [userName, setUserName] = useState("Student");
    const [userAvatar, setUserAvatar] = useState<string | null>(null);
    const router = useRouter();

    const handleLogout = async () => {
        // Mock logout
        router.push('/login');
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch('/api/profile');
                const profile = await res.json();

                if (profile) {
                    if (profile.full_name) setUserName(profile.full_name);
                    if (profile.avatar_url) setUserAvatar(profile.avatar_url);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    const markAllAsRead = () => {
        setNotifications([]);
        setShowNotifications(false);
    };

    const hasUnread = notifications.length > 0;

    return (
        <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <Link href="/dashboard" className={styles.brand} style={{ textDecoration: 'none', color: 'inherit' }}>
                        ErasmusHub
                    </Link>
                </div>

                <nav className={styles.nav}>
                    {MENU_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar} style={{ backgroundColor: userAvatar ? 'transparent' : 'var(--primary)' }}>
                        {userAvatar ? (
                            <img src={userAvatar} alt="User" />
                        ) : (
                            userName.charAt(0)
                        )}
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{userName}</span>
                        <span className={styles.userPlan}>Free Plan</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={styles.main}>
                <header className={styles.topbar}>
                    <h2 className={styles.pageTitle}>
                        {MENU_ITEMS.find(i => i.href === pathname)?.name || "Dashboard"}
                    </h2>
                    <div className={styles.topbarActions} style={{ position: 'relative' }}>
                        <ThemeToggle />

                        {/* Notify Btn */}
                        <button
                            className={styles.actionBtn}
                            title="Notifications"
                            onClick={() => setShowNotifications(!showNotifications)}
                        >
                            🔔
                            {/* Red Dot if unread */}
                            {hasUnread && (
                                <span style={{
                                    position: 'absolute', top: '5px', right: '5px',
                                    width: '8px', height: '8px', backgroundColor: 'red', borderRadius: '50%'
                                }}></span>
                            )}
                        </button>

                        {/* Dropdown */}
                        {showNotifications && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                marginTop: '0.5rem',
                                width: '320px',
                                backgroundColor: 'var(--background)',
                                border: '1px solid var(--border)',
                                borderRadius: '0.75rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                zIndex: 100,
                                padding: '1rem',
                                animation: 'fadeIn 0.2s ease'
                            }}>
                                <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>Notifications</h4>

                                {notifications.length === 0 ? (
                                    <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)', textAlign: 'center', padding: '1rem 0' }}>It's quiet here... 💤</p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {notifications.map(note => (
                                            <div key={note.id} style={{ fontSize: '0.85rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                                                <p style={{ margin: 0, fontWeight: 500 }}>{note.message}</p>
                                                <span style={{ fontSize: '0.75rem', color: note.id === 'smart-alert' ? '#ef4444' : 'var(--secondary-foreground)', fontWeight: note.id === 'smart-alert' ? 700 : 400 }}>
                                                    {note.time}
                                                </span>
                                            </div>
                                        ))}

                                        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                                            <small
                                                style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
                                                onClick={markAllAsRead}
                                            >
                                                Mark all as read
                                            </small>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* User Menu Toggle (Hamburger) */}
                        <button
                            className={styles.actionBtn}
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        >
                            ☰
                        </button>

                        {/* User Menu Dropdown */}
                        {isUserMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: '0',
                                marginTop: '0.5rem',
                                width: '200px',
                                backgroundColor: 'var(--background)',
                                border: '1px solid var(--border)',
                                borderRadius: '0.75rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                zIndex: 100,
                                padding: '0.5rem',
                                animation: 'fadeIn 0.2s ease'
                            }}>
                                {/* Mobile Sidebar Toggle option - only visible on small screens ideally but useful here too */}
                                <button
                                    onClick={() => { setIsSidebarOpen(!isSidebarOpen); setIsUserMenuOpen(false); }}
                                    className={styles.navItem}
                                    style={{
                                        width: '100%', textAlign: 'left', padding: '0.75rem', margin: 0,
                                        background: 'none', border: 'none', color: 'inherit',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        borderRadius: '0.5rem'
                                    }}
                                >
                                    <span>📺</span> Toggle Sidebar
                                </button>

                                <Link
                                    href="/dashboard/settings"
                                    className={styles.navItem}
                                    style={{ margin: 0, padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    onClick={() => setIsUserMenuOpen(false)}
                                >
                                    <span>⚙️</span> Settings
                                </Link>

                                <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0.5rem 0' }}></div>

                                <button
                                    onClick={handleLogout}
                                    style={{
                                        width: '100%', textAlign: 'left', padding: '0.75rem',
                                        background: 'none', border: 'none', color: '#ef4444',
                                        fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        borderRadius: '0.5rem'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <span>🚪</span> Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
