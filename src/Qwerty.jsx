import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Qwerty = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://iloilo-coffee-house-api.onrender.com/auth/login/success');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('An error occurred while fetching the data:', error);
      }
    };

    fetchData();
  }, []);

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
