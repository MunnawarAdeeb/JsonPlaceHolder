import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../Context/user.context";
import axios from "axios";
import Card from "./User.card.component";

const UserComponent = () => {
  const [user, setUser] = useState([]);
  const { setUserName } = useContext(UserNameContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(response.data);
        setUserName(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: "100px" }}>Users</h1>
      <div style={{ height: "30vh", overflow: "auto" }}>
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
