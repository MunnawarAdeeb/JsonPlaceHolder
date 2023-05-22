import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./User.card.component"
const UserComponent = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
       
      <h1 style={{ marginLeft: "100px" }}>Users</h1>
      <div style={{ height: '30vh', overflow: 'auto'}}>
      <ul>
        {user
          .filter((_, index) => index < 3)
          .map((user) => (
            <Card key={user.id} user={user} />
          ))}
      </ul>
      </div>
    </>
  );
};

export default UserComponent;
