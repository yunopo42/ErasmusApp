"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import styles from "./checklist.module.css";
import NewTaskModal from "./modal/NewTaskModal";

const CATEGORIES = ["Documents", "Financial", "University", "Health", "Other"];

type Task = {
    id: string;
    title: string;
    is_completed: boolean;
    category: string;
    // New fields
    notes?: string;
    due_date?: string;
    priority?: string;
};

export default function ChecklistPage() {
    const supabase = createClient();
    const [activeCategory, setActiveCategory] = useState("Documents");
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    // Fetch tasks on load
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            const { data, error } = await supabase
                .from('checklist_items')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: true });

            if (data) setTasks(data);
        }
        setLoading(false);
    };

    const handleSaveTask = async (taskData: any) => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // If editing (not implemented in this step fully, but simpler for now)
        // Let's assume create only for now or simple logic

        const newTask = {
            title: taskData.title,
            category: taskData.category,
            notes: taskData.notes,
            due_date: taskData.due_date,
            priority: taskData.priority,
            user_id: user.id
        };

        const { data, error } = await supabase
            .from('checklist_items')
            .insert(newTask)
            .select()
            .single();

        if (error) {
            console.error(error);
            alert("Error saving task");
        } else {
            setTasks([...tasks, data]);
        }
    };

    const toggleTask = async (taskId: string, currentStatus: boolean) => {
        // Optimistic Update
        setTasks(tasks.map(t => t.id === taskId ? { ...t, is_completed: !currentStatus } : t));

        const { error } = await supabase
            .from('checklist_items')
            .update({ is_completed: !currentStatus })
            .eq('id', taskId);

        if (error) {
            console.error(error);
            fetchTasks(); // Revert
        }
    };

    // Filter tasks for active category
    const activeTasks = tasks.filter(t => t.category === activeCategory);

    // Calculate progress
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.is_completed).length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const getPriorityColor = (p?: string) => {
        if (p === 'High') return '#ef4444';
        if (p === 'Medium') return '#f59e0b';
        return '#10b981';
    };

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <div className={styles.categories}>
                <div className={styles.categoryTitle}>Visa Steps</div>
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                        <span className={styles.countBadge}>
                            {tasks.filter(t => t.category === cat && !t.is_completed).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Main Area */}
            <div className={styles.mainArea}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.headerTitle}>{activeCategory} Checklist</h1>
                        <div className={styles.progressContainer} style={{ marginTop: '0.5rem' }}>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)' }}>{progress}% Complete</span>
                        </div>
                    </div>

                    <button
                        className={styles.addBtn}
                        onClick={() => {
                            setEditingTask(null);
                            setIsModalOpen(true);
                        }}
                    >
                        + New Item
                    </button>
                </div>

                <ul className={styles.taskList}>
                    {activeTasks.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--secondary-foreground)' }}>
                            No tasks in this category. <br /> Click "+ New Item" to add one.
                        </div>
                    ) : (
                        activeTasks.map(task => (
                            <li key={task.id} className={styles.taskItem}>
                                <div
                                    className={styles.checkbox}
                                    style={{
                                        backgroundColor: task.is_completed ? 'var(--primary)' : 'transparent',
                                        borderColor: task.is_completed ? 'var(--primary)' : 'currentColor'
                                    }}
                                    onClick={() => toggleTask(task.id, task.is_completed)}
                                ></div>

                                <div style={{ flex: 1, marginLeft: '1rem' }}>
                                    <div
                                        className={task.is_completed ? styles.taskLabelCompleted : styles.taskLabel}
                                        onClick={() => toggleTask(task.id, task.is_completed)}
                                        style={{ fontWeight: 500 }}
                                    >
                                        {task.title}
                                    </div>

                                    {/* Meta Info */}
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', fontSize: '0.8rem', color: 'var(--secondary-foreground)' }}>
                                        {task.due_date && (
                                            <span>📅 {new Date(task.due_date).toLocaleDateString()}</span>
                                        )}
                                        {task.priority && (
                                            <span style={{ color: getPriorityColor(task.priority), fontWeight: 600 }}>
                                                {task.priority} Priority
                                            </span>
                                        )}
                                    </div>
                                    {task.notes && (
                                        <div style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', marginTop: '0.3rem', fontStyle: 'italic' }}>
                                            Note: {task.notes}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <NewTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveTask}
                activeCategory={activeCategory}
                initialData={editingTask}
            />
        </div>
    );
}
