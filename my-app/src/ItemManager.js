import React from "react";
import ItemCard from "./ItemCard";
import "./ItemManager.css";

const items = [
  {
    id: "T-1",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "15/06/2024",
  },
  {
    id: "T-2",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "18/07/2024",
  },
  {
    id: "T-3",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "05/08/2024",
  },
  {
    id: "T-4",
    status: "Done",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "23/07/2024",
  },
  {
    id: "T-5",
    status: "ToDo",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/09/2024",
  },
  {
    id: "T-6",
    status: "Completed",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/10/2024",
  },
  {
    id: "T-7",
    status: "In Progress",
    description: "Create a Design System for Enum Workspace.",
    dueDate: "24/01/2025",
  },
];

const ItemManager = () => {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="items">
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemManager;
