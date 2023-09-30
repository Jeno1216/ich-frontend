import React, { useEffect, useState } from 'react';

const Qwerty = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        console.log("getUser function is called");

        const response = await fetch("https://iloilo-coffee-house-api.onrender.com/auth/login/success", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Fetch completed");


        if (response.status === 200) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error(`Failed to fetch user data! Status code: ${response.status}`);
        }
      } catch (err) {
        console.error("An error occurred while fetching user data:", err);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Qwerty;
