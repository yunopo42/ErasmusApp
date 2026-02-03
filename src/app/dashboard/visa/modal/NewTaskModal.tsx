import { useState } from "react";
import styles from "./modal.module.css";

type Task = {
    id?: string;
    title: string;
    category: string;
    notes?: string;
    priority?: string;
    due_date?: string;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (task: Task) => void;
    activeCategory: string;
    initialData?: Task | null;
};

export default function NewTaskModal({ isOpen, onClose, onSave, activeCategory, initialData }: Props) {
    const [title, setTitle] = useState(initialData?.title || "");
    const [notes, setNotes] = useState(initialData?.notes || "");
    const [priority, setPriority] = useState(initialData?.priority || "Medium");
    const [date, setDate] = useState(initialData?.due_date ? new Date(initialData.due_date).toISOString().split('T')[0] : "");

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!title.trim()) return;
        onSave({
            title,
            category: activeCategory,
            notes,
            priority,
            due_date: date ? new Date(date).toISOString() : undefined
        });
        onClose();
        // Reset
        setTitle("");
        setNotes("");
        setPriority("Medium");
        setDate("");
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{initialData ? "Edit Task" : "New Visa Task"}</h3>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                </div>

                <div className={styles.content}>
                    <div>
                        <label className={styles.label}>Category</label>
                        <div style={{ padding: '0.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>
                            {activeCategory}
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Task Title</label>
                        <input
                            className={styles.input}
                            placeholder="e.g., Book embassy appointment"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            autoFocus
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Due Date</label>
                            <input
                                type="date"
                                className={styles.input}
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Priority</label>
                            <select
                                className={styles.input} // reusing input style
                                value={priority}
                                onChange={e => setPriority(e.target.value)}
                            >
                                <option value="High">High 🔥</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Notes</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Add details, links, or required documents..."
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.footer}>
                    <button className={styles.deleteBtn} onClick={onClose}>Cancel</button>
                    <button className={styles.saveBtn} onClick={handleSubmit}>Save Task</button>
                </div>
            </div>
        </div>
    );
}
