import {
    createParser,
  } from 'eventsource-parser'
  
  
  export async function OpenAIStream(payload) {
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
  
    let counter = 0
  
    const requestHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
    }
  
    if (process.env.OPENAI_API_ORG) {
      requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
    }
  
    const res = await fetch(process.env.BACKEND_URL + '/chats/response', { 
      headers: requestHeaders,
      method: 'POST',
      body: JSON.stringify(payload),
    })    
  
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  
    const stream = new ReadableStream({
      async start(controller) {
        // callback 
        function onParse(event) { 
          if (event.type === 'event') { 
            const data = event.data
            console.log(data);     
            // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
            if (data === '[DONE]') {
              console.log('DONE') 
              controller.close() 
              return 
            } 
            try {
              const text = data 
              if (counter < 2 && (text.match(/\n/) || []).length) {
                // this is a prefix character (i.e., "\n\n"), do nothing
                return 
              }
              const queue = encoder.encode(text) 
              controller.enqueue(queue) 
              counter++ 
            } catch (e) {
              // maybe parse error
              controller.error(e)
            }
          }
        }
  
        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks and invoke an event for each SSE event stream
        const parser = createParser(onParse) 
        for await (const chunk of res.body) {
          parser.feed(decoder.decode(chunk))
        } 
      },
    })
  
    return stream
  }
  