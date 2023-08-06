'use client';
import ChatBot from 'react-simple-chatbot';
import React, { useState } from 'react';
import { redirect } from 'next/navigation';

function Redirect({ url }) {
    return redirect(url);  
}  
export default function ChatWidget() {
    // State to manage the chatbot conversation
    const [steps, setSteps] = useState([
        {
            id: 'guide_intro',
            message: 'Hello! HelpMeSolve is a website for coding interview preparation. Check out our pages below!',
            trigger: 'guide_pages',
        },
        {
            id: 'guide_pages',
            options: [
              { value: 0, label: 'Home', trigger: 'home_redirect_message' },
              { value: 1, label: 'About', trigger: 'about_redirect_message' },
              { value: 3, label: 'Solve', trigger: 'solve_redirect_message' },
              { value: 4, label: 'All problems', trigger: 'all_problems_redirect_message' },
              { value: 5, label: 'Contact Us', trigger: 'contact_redirect_message' },
            ],
        },
        {
            id: 'home_redirect_message', // Trigger for Number 1
            message: "Redirecting...", // Redirect to PageOne
            trigger: "home_redirect",
        },
        {
            id: 'home_redirect', // Trigger for Number 1
            component: <Redirect url={ '/' }/>, // Redirect to PageOne
            end: true,
        },
        {
            id: 'about_redirect_message', // Trigger for Number 1
            message: "Redirecting...", // Redirect to PageOne
            trigger: "about_redirect",
        },
        {
            id: 'about_redirect', // Trigger for Number 1
            component: <Redirect  url={ 'about' }/>, // Redirect to PageOne
            end: true,
        },
        {
            id: 'solve_redirect_message', // Trigger for Number 1
            message: "Redirecting...", // Redirect to PageOne
            trigger: "solve_redirect",
        },
        {
            id: 'solve_redirect', // Trigger for Number 1
            component: <Redirect  url={ 'solve' }/>, // Redirect to PageOne
            end: true,
        },
        {
            id: 'all_problems_redirect_message', // Trigger for Number 1
            message: "Redirecting...", // Redirect to PageOne
            trigger: "all_problems_redirect",
        },
        {
            id: 'all_problems_redirect', // Trigger for Number 1
            component: <Redirect  url={ 'problems' }/>, // Redirect to PageOne
            end: true,
        },
        {
            id: 'contact_redirect_message', // Trigger for Number 1
            message: "Redirecting...", // Redirect to PageOne
            trigger: "contact_redirect",
        },
        {
            id: 'contact_redirect', // Trigger for Number 1
            component: <Redirect  url={ 'contact' }/>, // Redirect to PageOne
            end: true,
        },
    ]);

    const config = {
        width: "400px",
        height: "500px",
        floating: true,
      }; 

    function validator(value) { 
        if (!value) {
            return 'Enter something!';
        }
        else {
            return true;
        }
    } 

    return (
        <>
        <ChatBot
          headerTitle="HelpMeSolve Guide"
          steps={steps} 
          userDelay={200}
          {...config} 
        /> 
        </>
    );
}