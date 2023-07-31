import axios from 'axios'
import { NextResponse } from 'next/server'


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