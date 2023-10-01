import React, { useEffect, useState } from 'react';

const Qwerty = () => {
  const [data, setData] = useState(null);
  const url = 'https://iloilo-coffee-house-api.onrender.com/some-route';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Data fetched from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Qwerty;
