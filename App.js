import React, { useState } from 'react';
import './App.css';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import TotalAmount from './TotalAmount';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      <h1>Bill Generator</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ItemList items={items} onRemove={handleRemoveItem} />
      <TotalAmount items={items} />
    </div>
  );
}

export default App;
