import axios from 'axios'
import { NextResponse } from 'next/server'

// forces to not cache the response to get a different question every request
export const dynamic = 'force-dynamic';

export async function GET() {
  const res = await axios.get(process.env.BACKEND_URL + '/chats/random') 

  const question_data = res.data 
 
  if (!question_data) { 
    return NextResponse.json({
      message: 'No question was found in the response.'
    }, {
      status: 500
    })
  }

  return NextResponse.json({
    question: question_data.question,
  })
} 