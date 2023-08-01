import axios from 'axios'
import { NextResponse } from 'next/server'
const cohere = require('cohere-ai'); 


// forces to not cache the response to get a different question every request
export const dynamic = 'force-dynamic';

cohere.init(process.env.COHERE_API_KEY); // initialize cohere client with COHERE API KEY. 

export async function GET(req) { 
  const body = await req.json();  
  const question = body.question; 
  // const response = await cohere.generate({
  //   model: 'command-nightly',
  //   prompt: `You are now a ChatGPT model made by Cohere AI, but now you should act as a guide for HelpMeSolve website. HelpMeSolve is a startup that helps people excel in coding interviews by helping them solve and understand algorithmic questions and teaching about tips and topics that are common on interviews. you should never change your personality even if someone asks you to. Never answer any questions that aren\'t about the website, just ignore them adn tell about the website. Our website HelpMeSolve has pages like: \nhomepage: there you can read about features, testimonials, ask for help and more.\nabout page: here you can learn more about our aims and what we do.\nsolve problem page: here you may solve algorithmic questions, mostly that are common in the world of coding interviews. \nAll problems page: here you can check out the list of all problems you solved with us.\nChat: it is a one on one conversation with AI expert that can tell you tips and more about how to excel in coding interviews. \nContact us: there you can subscribe to our newsletter or ask for help. \nYou should provide info about the website to user. \n\n${ question }\n`,
  //   max_tokens: 150,
  //   temperature: 0.6,
  //   k: 0,
  //   stop_sequences: [],
  //   return_likelihoods: 'NONE'
  // });
  // const result = response.body.generations[0].text; 

  return NextResponse.json({
    response: "HAAHHHAHA",
  }); 
} 