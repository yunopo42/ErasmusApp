"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import styles from "./calendar.module.css";
import stylesModal from "@/components/onboarding/onboarding.module.css"; // Reuse modal

type Event = {
    id: string;
    title: string;
    start_date: string;
    end_date?: string; // Optional end date
    type: string;
};

export default function CalendarPage() {
    const supabase = createClient();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Modal State
    const [newEvent, setNewEvent] = useState({ title: '', type: 'academic', endDate: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchEvents();
    }, [currentDate]); // Refetch when month changes

    const fetchEvents = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Get range for current month view (simplified: fetch all for now, filter in memory)
        // Ideally we filter by date range in SQL
        const { data } = await supabase
            .from('calendar_events')
            .select('*')
            .eq('user_id', user.id);

        if (data) setEvents(data as any);
    };

    const handleAddEvent = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || !selectedDate || !newEvent.title) return;

        // Use selected end date, or default to start date if empty
        const finalEndDate = newEvent.endDate || selectedDate;

        // Basic validation
        if (finalEndDate < selectedDate) {
            alert("End date cannot be before start date!");
            return;
        }

        const { error } = await supabase
            .from('calendar_events')
            .insert({
                user_id: user.id,
                title: newEvent.title,
                start_date: selectedDate,
                end_date: finalEndDate,
                type: newEvent.type
            });

        if (error) {
            alert("Error adding event: " + error.message);
        } else {
            setIsModalOpen(false);
            setNewEvent({ title: '', type: 'academic', endDate: '' });
            fetchEvents();
        }
    };

    // -- Calendar Logic --
    // Helper to get days in month
    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Get first day of month (0 = Sun, 1 = Mon...)
    const getFirstDayOfMonth = (year: number, month: number) => {
        // Adjust logic so week starts on Monday (1)
        let day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

    const renderCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const totalDays = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const daysArray = [];

        // Empty cells for previous month
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className={`${styles.dayCell} ${styles.otherMonth}`}></div>);
        }

        // Days of current month
        for (let day = 1; day <= totalDays; day++) {
            // Format date string YYYY-MM-DD
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

            // Check if today
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

            // Find events that span this day
            // Logic: Event starts on or before today AND ends on or after today
            const dayEvents = events.filter(e => {
                const end = e.end_date || e.start_date;
                return e.start_date <= dateStr && end >= dateStr;
            });

            daysArray.push(
                <div
                    key={day}
                    className={`${styles.dayCell} ${isToday ? styles.today : ''}`}
                    onClick={() => {
                        setSelectedDate(dateStr);
                        setNewEvent({ ...newEvent, endDate: dateStr }); // Default end date to current
                        setIsModalOpen(true);
                    }}
                >
                    <div className={styles.dayNumber}>{day}</div>
                    {dayEvents.map(ev => (
                        <div key={ev.id} className={`${styles.eventChip} ${styles[`type_${ev.type}`]}`}>
                            {ev.title}
                        </div>
                    ))}
                </div>
            );
        }

        // Fill remaining cells to keep grid shape (optional, skipping for brevity)
        return daysArray;
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.monthTitle}>
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className={styles.navBtn} onClick={() => changeMonth(-1)}>← Prev</button>
                    <button className={styles.navBtn} onClick={() => changeMonth(1)}>Next →</button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className={styles.calendarGrid}>
                {/* Day Names */}
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                    <div key={d} className={styles.dayName}>{d}</div>
                ))}
                {/* Days */}
                {renderCalendarDays()}
            </div>

            {/* ADD EVENT MODAL */}
            {isModalOpen && (
                <div className={stylesModal.overlay} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className={stylesModal.modal} style={{ maxWidth: '400px' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                            <h2 style={{ fontSize: '1.25rem' }}>Add Event to {selectedDate}</h2>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Event Title</label>
                                <input
                                    className={stylesModal.input}
                                    placeholder="e.g. Exam, Trip to Paris"
                                    value={newEvent.title}
                                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>End Date (Optional)</label>
                                <input
                                    type="date"
                                    className={stylesModal.input}
                                    value={newEvent.endDate}
                                    min={selectedDate || ''}
                                    onChange={e => setNewEvent({ ...newEvent, endDate: e.target.value })}
                                />
                                <p style={{ fontSize: '0.75rem', color: 'var(--secondary-foreground)', marginTop: '0.25rem' }}>
                                    Leave same as start date for single day event.
                                </p>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Type</label>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    {['academic', 'travel', 'social', 'deadline'].map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setNewEvent({ ...newEvent, type: t })}
                                            style={{
                                                flex: 1,
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: `1px solid ${newEvent.type === t ? 'var(--primary)' : 'var(--border)'}`,
                                                background: newEvent.type === t ? 'var(--secondary)' : 'transparent',
                                                cursor: 'pointer',
                                                textTransform: 'capitalize',
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className={stylesModal.backBtn}
                                    style={{ flex: 1, border: '1px solid var(--border)' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddEvent}
                                    className={stylesModal.nextBtn}
                                    style={{ flex: 1 }}
                                >
                                    Save Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
