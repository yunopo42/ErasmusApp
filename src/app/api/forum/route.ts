import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const posts = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
        return NextResponse.json(posts);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, content, category } = body;

        const id = uuidv4();
        db.prepare(`
            INSERT INTO posts (id, user_id, title, content, category, likes_count)
            VALUES (?, ?, ?, ?, ?, 0)
        `).run(id, MOCK_USER_ID, title, content, category);

        return NextResponse.json({ success: true, id });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
