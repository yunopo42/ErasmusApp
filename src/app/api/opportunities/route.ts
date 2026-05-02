import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const opportunities = db.prepare('SELECT * FROM opportunities ORDER BY created_at DESC').all();
        return NextResponse.json(opportunities);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
