import { getSearch } from '@/service';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  const data = await getSearch(query);

  return NextResponse.json(data);
}
