import Database from 'better-sqlite3';
import path from 'path';

// Database file path
const DB_PATH = path.join(process.cwd(), 'erasmus.db');

// Initialize database
const db = new Database(DB_PATH);

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
        id TEXT PRIMARY KEY,
        full_name TEXT,
        university TEXT,
        target_country TEXT,
        target_term TEXT,
        monthly_grant REAL,
        currency TEXT DEFAULT 'EUR',
        onboarding_completed INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS budget_entries (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        amount REAL,
        title TEXT,
        type TEXT CHECK(type IN ('income', 'expense')),
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );

    CREATE TABLE IF NOT EXISTS checklist_items (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        title TEXT,
        category TEXT,
        is_completed INTEGER DEFAULT 0,
        deadline DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );

    CREATE TABLE IF NOT EXISTS visited_places (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        country TEXT,
        city TEXT,
        visit_date TEXT,
        photo_url TEXT,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );

    CREATE TABLE IF NOT EXISTS opportunities (
        id TEXT PRIMARY KEY,
        title TEXT,
        organization TEXT,
        type TEXT CHECK(type IN ('internship', 'project', 'other')),
        location TEXT,
        salary TEXT,
        deadline DATETIME,
        application_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS documents (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        title TEXT,
        file_url TEXT,
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );

    CREATE TABLE IF NOT EXISTS calendar_events (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        title TEXT,
        start_date TEXT,
        end_date TEXT,
        type TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );

    CREATE TABLE IF NOT EXISTS posts (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        title TEXT,
        content TEXT,
        category TEXT,
        likes_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES profiles(id)
    );
`);

// Mock User ID for development
export const MOCK_USER_ID = 'dev-user-123';

// Seed initial data if profiles is empty
const profileCount = db.prepare('SELECT COUNT(*) as count FROM profiles').get() as { count: number };
if (profileCount.count === 0) {
    db.prepare(`
        INSERT INTO profiles (id, full_name, university, target_country, target_term, monthly_grant)
        VALUES (?, ?, ?, ?, ?, ?)
    `).run(MOCK_USER_ID, 'Erasmus Student', 'Global University', 'Poland', '2026 Fall', 600);

    // Initial budget entries
    const budgetEntries = [
        { id: 'b1', user_id: MOCK_USER_ID, amount: 1800, title: 'Erasmus Grant (First Installment)', type: 'income', category: 'Grant' },
        { id: 'b2', user_id: MOCK_USER_ID, amount: 450, title: 'Flight Tickets', type: 'expense', category: 'Travel' }
    ];

    const insertBudget = db.prepare(`
        INSERT INTO budget_entries (id, user_id, amount, title, type, category)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const entry of budgetEntries) {
        insertBudget.run(entry.id, entry.user_id, entry.amount, entry.title, entry.type, entry.category);
    }

    // Initial checklist items
    const checklistItems = [
        { id: 'c1', user_id: MOCK_USER_ID, title: 'Visa Application', category: 'Visa', is_completed: 0 },
        { id: 'c2', user_id: MOCK_USER_ID, title: 'Learning Agreement Signed', category: 'University', is_completed: 1 },
        { id: 'c3', user_id: MOCK_USER_ID, title: 'Accommodation Booked', category: 'Travel', is_completed: 0 }
    ];

    const insertChecklist = db.prepare(`
        INSERT INTO checklist_items (id, user_id, title, category, is_completed)
        VALUES (?, ?, ?, ?, ?)
    `);

    // Initial visited places
    const visitedPlaces = [
        { id: 'p1', user_id: MOCK_USER_ID, country: 'Italy', city: 'Rome', visit_date: '2025-05-10', notes: 'Best pizza ever!' },
        { id: 'p2', user_id: MOCK_USER_ID, country: 'Germany', city: 'Berlin', visit_date: '2025-06-15', notes: 'Very cool city.' }
    ];

    const insertPlace = db.prepare(`
        INSERT INTO visited_places (id, user_id, country, city, visit_date, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const place of visitedPlaces) {
        insertPlace.run(place.id, place.user_id, place.country, place.city, place.visit_date, place.notes);
    }

    // Initial Opportunities
    const opportunities = [
        { id: 'o1', title: 'UX Design Internship', organization: 'Techflow Poland', type: 'internship', location: 'Warsaw, Poland', salary: '€ 800', deadline: '2025-08-30', application_url: 'https://example.com/apply1' },
        { id: 'o2', title: 'Sustainable Living Project', organization: 'Green IT', type: 'project', location: 'Milan, Italy', salary: 'Paid Expenses', deadline: '2025-09-15', application_url: 'https://example.com/apply2' },
        { id: 'o3', title: 'Marketing Assistant', organization: 'Berlin Startup Hub', type: 'internship', location: 'Berlin, Germany', salary: '€ 1200', deadline: '2025-10-01', application_url: 'https://example.com/apply3' }
    ];

    const insertOpp = db.prepare(`
        INSERT INTO opportunities (id, title, organization, type, location, salary, deadline, application_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const opp of opportunities) {
        insertOpp.run(opp.id, opp.title, opp.organization, opp.type, opp.location, opp.salary, opp.deadline, opp.application_url);
    }

    // Initial Posts
    const posts = [
        { id: 'f1', user_id: MOCK_USER_ID, title: 'Tips for Polish Visa?', content: 'Anyone has tips for the D-type visa for Poland? The appointment system is quite busy.', category: 'Visa', likes_count: 12 },
        { id: 'f2', user_id: MOCK_USER_ID, title: 'Best areas to live in Milan', content: 'I am going to Milan next semester. Which districts are student-friendly?', category: 'Accommodation', likes_count: 8 }
    ];

    const insertPost = db.prepare(`
        INSERT INTO posts (id, user_id, title, content, category, likes_count)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const post of posts) {
        insertPost.run(post.id, post.user_id, post.title, post.content, post.category, post.likes_count);
    }

    // Initial Documents
    const documents = [
        { id: 'd1', user_id: MOCK_USER_ID, title: 'Learning Agreement', category: 'University', file_url: '#' },
        { id: 'd2', user_id: MOCK_USER_ID, title: 'Passport Scan', category: 'Personal', file_url: '#' }
    ];

    const insertDoc = db.prepare(`
        INSERT INTO documents (id, user_id, title, category, file_url)
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const doc of documents) {
        insertDoc.run(doc.id, doc.user_id, doc.title, doc.category, doc.file_url);
    }

    // Initial Calendar Events
    const events = [
        { id: 'e1', user_id: MOCK_USER_ID, title: 'Erasmus Orientation', start_date: '2025-09-01', end_date: '2025-09-01', type: 'academic' },
        { id: 'e2', user_id: MOCK_USER_ID, title: 'Trip to Rome', start_date: '2025-09-15', end_date: '2025-09-18', type: 'travel' }
    ];

    const insertEvent = db.prepare(`
        INSERT INTO calendar_events (id, user_id, title, start_date, end_date, type)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const event of events) {
        insertEvent.run(event.id, event.user_id, event.title, event.start_date, event.end_date, event.type);
    }
}

export default db;
