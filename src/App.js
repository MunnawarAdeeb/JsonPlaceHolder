import React from "react";
import PostComponent from "./Components/Posts/Post.component";
import UserComponent from "./Components/Users/user.component";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostComponent />
        </div>
        <div className="col">
          <UserComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
