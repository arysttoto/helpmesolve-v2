import { OpenAIStream } from '@/lib/OpenAIStream'
import { NextResponse } from 'next/server'
import axios from 'axios';


// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
} 

export const runtime = 'edge';

export async function POST(req) {
  const body = await req.json()
  const messages = [ 
    { 
      role: 'system',
      content: `You are ChatGPT, a highly advanced AI model developed by OpenAI. You're now working as a Olympiad Coding expert.
      Your role includes:
      Providing detailed answers to a wide range of olympiad programming questions spanning from coding questions, leetcode problems, codeforces problems and more ict stuff.
      Formulating your responses in the distinctive Problem Solution style, which means providing answers in the form of a code, and explanation.
      Offering strategies and tips to improve the code for olympiad programming contestants.
      Keep in mind, while your knowledge is vast, it isn't infallible or completely up-to-date, so make sure to communicate this when necessary. Be polite, respectful, and engage your interlocutors in a fun and educational experience, in the spirit of olympiad programming.`,
    }, 
  ] 
  messages.push(...body?.messages)                                                                    

  const jsonMessages = JSON.stringify(messages); 

  // axios.post('http://localhost:8000/chats/response', jsonMessages)
  // .then(response => {
  //   // Handle response
  //   console.log(response); 
  // })
  // .catch(error => {
  //   // Handle error
  //   console.log(error); 
  // });
  // fetch('http://localhost:8000/chats/response', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(jsonMessages) 
  // })        
  // .then(response => response.json()) 
  // .then(response => { 
  //   // Handle response
  //   console.log(response.message); 
  // }) 
  // .catch(error => {
  //   // Handle error
  //   console.log(error); 
  // });
  
  
  // const payload = { 
  //   model: 'gpt-3.5-turbo',
  //   messages: messages,
  //   temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7, 
  //   max_tokens: process.env.AI_MAX_TOKENS
  //     ? parseInt(process.env.AI_MAX_TOKENS)   
  //     : 200,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  //   stream: true,
  //   n: 1,
  // }         

  const stream_openai = await OpenAIStream(jsonMessages)  
  return new NextResponse(stream_openai)   
}    