import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Qwerty = () => {
  const [data, setData] = useState(null);

  useEffect(() =>{
    console.log('Home useEffect is being triggered'); // Add this line

    axios.get('https://iloilo-coffee-house-api.onrender.com/some-route')
    .then(posts => {
        setPosts(posts.data)
      })
    .catch(err => console.error(err.response.data))
  }, [])


  

  return (
    <div>
      {data ? (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Qwerty;
