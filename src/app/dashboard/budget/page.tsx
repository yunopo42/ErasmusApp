"use client";

import { useState, useEffect } from "react";
import styles from "./budget.module.css";
import stylesModal from "@/components/onboarding/onboarding.module.css"; // Reusing modal styles

// Update Interface
type Transaction = {
    id: string;
    amount: number;
    title: string; // Changed from description
    type: 'income' | 'expense';
    category: string;
    created_at: string;
};


export default function BudgetPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Stats
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    // Form State
    const [newItem, setNewItem] = useState({
        amount: '',
        description: '',
        type: 'expense',
        category: 'Food'
    });

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/budget');
            const data = await res.json();
            if (Array.isArray(data)) {
                setTransactions(data);
                calculateStats(data);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
        setLoading(false);
    };

    const calculateStats = (data: Transaction[]) => {
        const income = data
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + Number(t.amount), 0);

        const expense = data
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + Number(t.amount), 0);

        setTotalIncome(income);
        setTotalExpense(expense);
    };

    const handleAddTransaction = async () => {
        if (!newItem.amount || !newItem.description) return;

        const amountValue = parseFloat(newItem.amount);

        try {
            const res = await fetch('/api/budget', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: amountValue,
                    title: newItem.description,
                    type: newItem.type,
                    category: newItem.category
                })
            });

            if (!res.ok) {
                const error = await res.json();
                alert("Error adding transaction: " + error.error);
            } else {
                setIsModalOpen(false);
                setNewItem({ amount: '', description: '', type: 'expense', category: 'Food' });
                fetchTransactions();
            }
        } catch (error) {
            alert("Error adding transaction");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this transaction?")) return;

        try {
            await fetch(`/api/budget?id=${id}`, { method: 'DELETE' });
            fetchTransactions();
        } catch (error) {
            alert("Error deleting transaction");
        }
    };

    return (
        <div className={styles.container}>
            {/* Title */}
            <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Budget Tracker 💰</h1>
                <p style={{ color: 'var(--secondary-foreground)' }}>Keep track of your grant and expenses.</p>
            </div>

            {/* Summary Cards */}
            <div className={styles.summaryGrid}>
                {/* Remaining */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Remaining Budget</div>
                    <div className={`${styles.cardAmount} ${totalIncome - totalExpense >= 0 ? styles.trendGood : styles.trendBad}`}>
                        € {(totalIncome - totalExpense).toFixed(2)}
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginTop: '1rem', overflow: 'hidden' }}>
                        <div
                            style={{
                                width: `${Math.min((totalExpense / (totalIncome || 1)) * 100, 100)}%`,
                                height: '100%',
                                backgroundColor: totalIncome - totalExpense >= 0 ? '#10b981' : '#ef4444',
                                transition: 'width 0.5s ease'
                            }}
                        />
                    </div>
                </div>

                {/* Income (Grant) */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Total Income / Grant</div>
                    <div className={styles.cardAmount} style={{ color: 'var(--foreground)' }}>
                        € {totalIncome.toFixed(2)}
                    </div>
                </div>

                {/* Expense */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Total Expenses</div>
                    <div className={styles.cardAmount} style={{ color: '#ef4444' }}>
                        € {totalExpense.toFixed(2)}
                    </div>
                </div>
            </div>

            {/* BREAKDOWN SECTION */}
            <div className={styles.card} style={{ marginBottom: '2rem' }}>
                <h3 className={styles.cardTitle} style={{ marginBottom: '1rem' }}>Spending Breakdown</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {Object.entries(
                        transactions
                            .filter(t => t.type === 'expense')
                            .reduce((acc, t) => {
                                acc[t.category] = (acc[t.category] || 0) + t.amount;
                                return acc;
                            }, {} as Record<string, number>)
                    ).map(([category, amount]) => (
                        <div key={category} style={{ flex: '1 1 150px', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-foreground)' }}>{category}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>€ {amount.toFixed(2)}</div>
                            <div style={{ width: '100%', height: '4px', backgroundColor: '#e5e7eb', marginTop: '0.5rem', borderRadius: '2px' }}>
                                <div style={{ width: `${Math.min((amount / totalExpense) * 100, 100)}%`, height: '100%', backgroundColor: '#3b82f6' }}></div>
                            </div>
                        </div>
                    ))}
                    {totalExpense === 0 && <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.9rem' }}>No expenses recorded yet.</p>}
                </div>
            </div>

            {/* Action Bar */}
            <div className={styles.actionBar}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent Transactions</h2>
                <button className={styles.addBtn} onClick={() => setIsModalOpen(true)}>
                    + Add Transaction
                </button>
            </div>

            {/* Transactions Table */}
            <div className={styles.transactionsSection}>
                {loading ? (
                    <p style={{ padding: '2rem' }}>Loading...</p>
                ) : transactions.length === 0 ? (
                    <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--secondary-foreground)' }}>No transactions yet. Add your grant or first expense!</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th style={{ width: '50px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(t => (
                                <tr key={t.id} className={styles.row}>
                                    <td>{t.title}</td>
                                    <td><span className={styles.badge}>{t.category}</span></td>
                                    <td style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)' }}>
                                        {new Date(t.created_at).toLocaleDateString()}
                                    </td>
                                    <td className={t.type === 'income' ? styles.amountPositive : styles.amountNegative}>
                                        {t.type === 'income' ? '+' : '-'} € {t.amount.toFixed(2)}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(t.id)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5 }}
                                        >
                                            ✕
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* ADD MODAL */}
            {isModalOpen && (
                <div className={stylesModal.overlay} style={{ justifyContent: 'center' }}>
                    <div className={stylesModal.modal} style={{ maxWidth: '500px', maxHeight: 'none' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                            <h2 style={{ fontSize: '1.25rem' }}>Add Transaction</h2>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Type</label>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            style={{
                                                flex: 1,
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: `1px solid ${newItem.type === 'expense' ? '#ef4444' : 'var(--border)'}`,
                                                background: newItem.type === 'expense' ? '#fef2f2' : 'var(--background)',
                                                color: newItem.type === 'expense' ? '#ef4444' : 'var(--foreground)',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setNewItem({ ...newItem, type: 'expense' })}
                                        >
                                            Expense 💸
                                        </button>
                                        <button
                                            style={{
                                                flex: 1,
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                border: `1px solid ${newItem.type === 'income' ? '#10b981' : 'var(--border)'}`,
                                                background: newItem.type === 'income' ? '#ecfdf5' : 'var(--background)',
                                                color: newItem.type === 'income' ? '#10b981' : 'var(--foreground)',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setNewItem({ ...newItem, type: 'income' })}
                                        >
                                            Income / Grant 💰
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Amount (€)</label>
                                    <input
                                        type="number"
                                        className={styles.input}
                                        placeholder="0.00"
                                        value={newItem.amount}
                                        onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Description</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="e.g. Flight ticket, Rent, Grocery"
                                        value={newItem.description}
                                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Category</label>
                                    <select
                                        className={styles.select}
                                        value={newItem.category}
                                        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                    >
                                        {newItem.type === 'income' ? (
                                            <>
                                                <option value="Grant">Grant</option>
                                                <option value="Family">Family Support</option>
                                                <option value="Salary">Salary</option>
                                                <option value="Other">Other</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="Food">Food & Grocery</option>
                                                <option value="Housing">Housing / Rent</option>
                                                <option value="Travel">Travel / Transport</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Shopping">Shopping</option>
                                                <option value="Health">Health</option>
                                                <option value="Education">Education</option>
                                                <option value="Other">Other</option>
                                            </>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button
                                    className={stylesModal.backBtn}
                                    onClick={() => setIsModalOpen(false)}
                                    style={{ flex: 1, border: '1px solid var(--border)' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={stylesModal.nextBtn}
                                    onClick={handleAddTransaction}
                                    style={{ flex: 1 }}
                                >
                                    Save Transaction
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
