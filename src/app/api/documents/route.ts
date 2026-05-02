import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const docs = db.prepare('SELECT * FROM documents WHERE user_id = ? ORDER BY created_at DESC').all(MOCK_USER_ID);
        return NextResponse.json(docs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, category, file_url } = body;

        const id = uuidv4();
        db.prepare(`
            INSERT INTO documents (id, user_id, title, category, file_url)
            VALUES (?, ?, ?, ?, ?)
        `).run(id, MOCK_USER_ID, title, category, file_url);

        return NextResponse.json({ success: true, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
