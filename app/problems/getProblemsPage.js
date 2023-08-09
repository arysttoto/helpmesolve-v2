import axios from 'axios'; 

const getProblemsPage = async (page, access_token) => {
    let problems; 
    await fetch((process.env.NEXT_PUBLIC_URL + "/chats/problems/"+page), { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    }, 
    cache: "no-store" 
  }) 
  .then(response => response.json()) 
  .then(data => { 
    // Save the response data to the session constant  
    problems = data; 
  }) 
  .catch(error => { 
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error); 
  });
  
  return problems; 
};

export default getProblemsPage;  