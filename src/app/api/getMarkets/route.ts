import { getMarkets } from '@/service';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getMarkets();

  return NextResponse.json(data);
}
