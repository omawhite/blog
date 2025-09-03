import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: 'RSS endpoint is working' },
    { status: 200 }
  );
} 
