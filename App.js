import React, { useEffect, useState } from 'react';
import './App.css';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import TotalAmount from './TotalAmount';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data.json');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched JSON:", data); 
        setItems(data.items);
      })
      .catch(error => console.error('Error loading data.json:', error));
  }, []);

  const handleAddItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
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
