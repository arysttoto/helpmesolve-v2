import axios from 'axios'
import { NextResponse } from 'next/server'


export async function GET() {
  const backend_url = process.env.BACKEND_URL; 
 
  return NextResponse.json({
    url: backend_url,
  }) 
} 