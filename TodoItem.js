import React from 'react';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="title">{todo.title}</span>
      <button className="edit-btn" onClick={() => onEdit(todo.id)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
