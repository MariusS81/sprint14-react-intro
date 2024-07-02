import React from "react";
import "./ItemCard.css";

const ItemCard = ({ id, status, description, dueDate }) => {
  return (
    <div className={`item-card ${status.toLowerCase()}`}>
      <h2>{id}</h2>
      <span className="status">{status}</span>
      <p>{description}</p>
      <p className="due-date">Due Date: {dueDate}</p>
    </div>
  );
};

export default ItemCard;
