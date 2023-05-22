import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Post.card.component";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: "100px" }}>Posts</h1>
      <div style={{ height: "60vh", overflow: "auto" }}>
        {" "}
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
