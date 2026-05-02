import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const items = db.prepare('SELECT * FROM checklist_items WHERE user_id = ? ORDER BY created_at ASC').all(MOCK_USER_ID);
        return NextResponse.json(items);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, category, notes, due_date, priority } = body;

        const id = uuidv4();
        db.prepare(`
            INSERT INTO checklist_items (id, user_id, title, category, notes, due_date, priority, is_completed)
            VALUES (?, ?, ?, ?, ?, ?, ?, 0)
        `).run(id, MOCK_USER_ID, title, category, notes, due_date, priority);

        const newItem = db.prepare('SELECT * FROM checklist_items WHERE id = ?').get(id);
        return NextResponse.json(newItem);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, is_completed } = body;

        db.prepare('UPDATE checklist_items SET is_completed = ? WHERE id = ? AND user_id = ?')
            .run(is_completed ? 1 : 0, id, MOCK_USER_ID);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
