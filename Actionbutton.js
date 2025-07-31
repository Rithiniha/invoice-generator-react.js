import React from 'react';
import './App.css'; 

function ActionButton({ label, onClick, color }) {
  return (
    <button
      className="action-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}

export default ActionButton;
