import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const transactions = db.prepare('SELECT * FROM budget_entries WHERE user_id = ? ORDER BY created_at DESC').all(MOCK_USER_ID);
        return NextResponse.json(transactions);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, title, type, category } = body;

        const id = uuidv4();
        db.prepare(`
            INSERT INTO budget_entries (id, user_id, amount, title, type, category)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(id, MOCK_USER_ID, amount, title, type, category);

        return NextResponse.json({ success: true, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        db.prepare('DELETE FROM budget_entries WHERE id = ? AND user_id = ?').run(id, MOCK_USER_ID);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
