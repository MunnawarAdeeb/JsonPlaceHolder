import React from 'react';
import "./Post.card.style.css"
const Card = ({post}) => {
    const {userId, title, body,name}=post
  return (
    <div className="card">
      <div className="card-header">{name}:{userId}</div>
      <div className="card-body">
        <h3 className="card-title">Title:{title}</h3>
        <p className="card-text"><strong>Head</strong>:{body}</p>
      </div>
    </div>
  );
};

export default Card;
