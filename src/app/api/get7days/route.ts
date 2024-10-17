import { get7days } from '@/service';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const coinId = searchParams.get('coinId') || '';

  const data = await get7days(coinId);

  return NextResponse.json(data);
}
