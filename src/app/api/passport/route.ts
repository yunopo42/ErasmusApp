import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    try {
        const places = db.prepare('SELECT * FROM visited_places WHERE user_id = ? ORDER BY visit_date DESC').all(MOCK_USER_ID);
        return NextResponse.json(places);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, country, city, visit_date, notes, photo_url } = body;

        if (id) {
            // UPDATE
            db.prepare(`
                UPDATE visited_places 
                SET country = ?, city = ?, visit_date = ?, notes = ?, photo_url = ?
                WHERE id = ? AND user_id = ?
            `).run(country, city, visit_date, notes, photo_url, id, MOCK_USER_ID);
        } else {
            // CREATE
            const newId = uuidv4();
            db.prepare(`
                INSERT INTO visited_places (id, user_id, country, city, visit_date, notes, photo_url)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `).run(newId, MOCK_USER_ID, country, city, visit_date, notes, photo_url);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        db.prepare('DELETE FROM visited_places WHERE id = ? AND user_id = ?').run(id, MOCK_USER_ID);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
