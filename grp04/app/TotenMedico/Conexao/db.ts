import * as https from 'https';

const options: https.RequestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      
    }
  };


const request = https.request(
    "localhost:3000/api/senha",
    options
  

)

