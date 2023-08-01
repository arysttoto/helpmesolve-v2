import { NextResponse } from 'next/server';

export async function POST(req) {
    let post_id; 
    const body = await req.json(); 
    const backend_url = process.env.BACKEND_URL;

    await fetch((backend_url + "/chats/solve"), {  
        method: "POST", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${body.accessToken}`
        }, 
        body: JSON.stringify({ 
          description: body.description,
          code: body.needCode,
        }),   
      })  
      .then(response => response.json()) 
      .then(data => {
        // Save the response data to the session constant
        post_id = data.new_post_id;
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error('Error:', error);
      });

    return NextResponse.json({
      post_id: post_id 
    });
    }