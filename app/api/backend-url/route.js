import axios from 'axios'
import { NextResponse } from 'next/server'

// forces to not cache the response to get a different question every request
export const dynamic = 'force-dynamic';

export async function GET() {
  const backend_url = process.env.BACKEND_URL; 

  return NextResponse.json({
    url: backend_url,
  })
}
