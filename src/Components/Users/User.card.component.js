import React from 'react';
import "./User.card.style.css"
const Card = ({user}) => {
    const {id, name, email}=user
  return (
    <div className="card">
      <div className="card-header">ID:{id}</div>
      <div className="card-body">
        <h3 className="card-title">Name:{name}</h3>
        <p className="card-text"><strong>Email</strong>:{email}</p>
      </div>
    </div>
  );
};

export default Card;
