import { NextResponse } from 'next/server';
import db, { MOCK_USER_ID } from '@/lib/db';

export async function GET() {
    try {
        const profile = db.prepare('SELECT * FROM profiles WHERE id = ?').get(MOCK_USER_ID);
        return NextResponse.json(profile);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { full_name, university, target_country, target_term, monthly_grant } = body;

        db.prepare(`
            UPDATE profiles 
            SET full_name = ?, university = ?, target_country = ?, target_term = ?, monthly_grant = ?, onboarding_completed = 1
            WHERE id = ?
        `).run(full_name, university, target_country, target_term, monthly_grant, MOCK_USER_ID);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
