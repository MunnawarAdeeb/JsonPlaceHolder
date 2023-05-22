import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Post.card.component";
import { UserNameContext } from "../Context/user.context";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);
  const { userName } = useContext(UserNameContext);
  const names = userName.map((value) => value.name);
  console.log(posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const postsWithData =await response.data.map((post, index) => ({
          ...post,
          name: names[index] || "",
        }));
        setPosts(postsWithData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <>
      <h1 style={{ marginLeft: "100px" }}>Posts</h1>
      <div style={{ height: "60vh", overflow: "auto" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts
            .filter((_, index) => index < 3)
            .map((post) => (
              <Card key={post.id} post={post} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default PostComponent;
