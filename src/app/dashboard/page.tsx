import Link from "next/link";
import { createClient } from "@/lib/supabase"; // Server Client needed for server component
import { redirect } from "next/navigation";
import OnboardingModal from "@/components/onboarding/OnboardingModal";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export default async function DashboardPage() {
    // Create Server Client
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    );

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    // PARALLEL DATA FETCHING
    const [
        { data: profile },
        { data: transactions },
        { data: checklistItems },
        { data: trendingPosts },
        { data: incompleteTasks }
    ] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', user.id).single(),
        supabase.from('budget_entries').select('amount, type').eq('user_id', user.id),
        supabase.from('checklist_items').select('is_completed').eq('user_id', user.id),
        supabase.from('posts').select('id, title, content, category').order('likes_count', { ascending: false }).limit(1), // Most liked post
        supabase.from('checklist_items').select('id, title').eq('user_id', user.id).eq('is_completed', false).limit(3)
    ]);

    // Budget Calculations
    let remainingBudget = 0;
    let totalIncome = 0;

    if (transactions) {
        const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.amount), 0);
        const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.amount), 0);
        remainingBudget = income - expense;
        totalIncome = income;
    }

    // Visa Progress Calculation
    let completionRate = 0;
    if (checklistItems && checklistItems.length > 0) {
        const completed = checklistItems.filter(i => i.is_completed).length;
        completionRate = Math.round((completed / checklistItems.length) * 100);
    }

    // Trending Post Logic
    const trendingPost = trendingPosts && trendingPosts.length > 0 ? trendingPosts[0] : null;

    // Check if onboarding is needed
    const showOnboarding = !profile?.target_country;

    return (
        <div>
            {/* Show Onboarding Modal if needed */}
            {showOnboarding && <OnboardingModal user={user} />}

            {/* Welcome Section */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Good afternoon, {profile?.full_name?.split(' ')[0] || 'Student'}! 👋
                </h1>
                <p style={{ color: 'var(--secondary-foreground)' }}>
                    {profile?.target_country
                        ? `Here is what's happening with your Erasmus journey to ${profile.target_country}.`
                        : "Let's set up your journey profile."}
                </p>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {/* Visa Progress */}
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: 600 }}>Visa Checklist</span>
                        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{completionRate}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${completionRate}%`, height: '100%', backgroundColor: 'var(--primary)', transition: 'width 0.5s ease' }}></div>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', marginTop: '0.75rem' }}>
                        {completionRate === 100 ? "All requirements met! 🎉" : "Keep going, you're getting there!"}
                    </p>
                </div>

                {/* Budget */}
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: 600 }}>Remaining Budget</span>
                        <span style={{ color: remainingBudget >= 0 ? '#10b981' : '#ef4444' }}>
                            {remainingBudget >= 0 ? 'Safe' : 'Overdraft'}
                        </span>
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 700, margin: '0.5rem 0' }}>€ {remainingBudget.toFixed(2)}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--secondary-foreground)' }}>
                        of € {totalIncome.toFixed(2)} total income
                    </p>
                </div>

                {/* Next Trip */}
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ fontWeight: 600 }}>Destination</span>
                        <span>✈️</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{profile?.target_country || 'Not Set'}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', marginTop: '0.25rem' }}>
                        {profile?.university}
                    </p>
                </div>
            </div>

            {/* Main Sections */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repea(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="responsive-grid">

                {/* Left Col: Next Actions */}
                <div style={{ flex: 2 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Next Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Dynamic Incomplete Tasks */}
                        {incompleteTasks && incompleteTasks.length > 0 ? (
                            incompleteTasks.map(task => (
                                <div key={task.id} style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--background)',
                                    borderRadius: '0.75rem',
                                    border: '1px solid var(--border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--secondary-foreground)', opacity: 0.5 }}></div>
                                    <span style={{ fontWeight: 500 }}>{task.title}</span>
                                    <Link href="/dashboard/visa" style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--primary)' }}>
                                        Complete →
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div style={{
                                padding: '2rem',
                                textAlign: 'center',
                                backgroundColor: 'var(--background)',
                                borderRadius: '0.75rem',
                                border: '1px dashed var(--border)'
                            }}>
                                <p style={{ color: 'var(--secondary-foreground)' }}>All caught up! No pending tasks.</p>
                                <Link href="/dashboard/visa" style={{ color: 'var(--primary)', fontWeight: 500, marginTop: '0.5rem', display: 'inline-block' }}>
                                    + View Checklist
                                </Link>
                            </div>
                        )}

                        {incompleteTasks && incompleteTasks.length > 0 && (
                            <Link href="/dashboard/visa" style={{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', textAlign: 'center', display: 'block' }}>
                                View all tasks
                            </Link>
                        )}
                    </div>
                </div>

                {/* Right Col: Community Trending */}
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Community Trending</h3>
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'var(--background)',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--border)'
                    }}>
                        {trendingPost ? (
                            <>
                                <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>🔥 {trendingPost.title}</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {trendingPost.content}
                                </p>
                                <Link href={`/dashboard/forum/${trendingPost.id}`} style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>Read discussion →</Link>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '1rem' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>Quiet day on the forum.</p>
                                <Link href="/dashboard/forum" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>Start a topic →</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
