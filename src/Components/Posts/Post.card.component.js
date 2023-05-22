import React from 'react';
import "./Post.card.style.css"
const Card = ({post}) => {
    const {id, title, body }=post
  return (
    <div className="card">
      <div className="card-header">ID:{id}</div>
      <div className="card-body">
        <h3 className="card-title">Title:{title}</h3>
        <p className="card-text"><strong>Head</strong>:{body}</p>
      </div>
    </div>
  );
};

export default Card;
