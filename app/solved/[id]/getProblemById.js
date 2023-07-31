import axios from 'axios'; 

const getProblemById = async (problem_id, access_token) => {
    let problem; 

    await fetch((process.env.BACKEND_URL + "/chats/problem/" + problem_id), { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    }, 
  }) 
  .then(response => response.json()) 
  .then(data => {
    // Save the response data to the session constant
    problem = data;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error);
  });
  
  return problem; 
};

export default getProblemById; 