import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const events = db.prepare('SELECT * FROM calendar_events WHERE user_id = ?').all(MOCK_USER_ID);
        return NextResponse.json(events);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, start_date, end_date, type } = body;

        const id = uuidv4();
        db.prepare(`
            INSERT INTO calendar_events (id, user_id, title, start_date, end_date, type)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(id, MOCK_USER_ID, title, start_date, end_date, type);

        return NextResponse.json({ success: true, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
