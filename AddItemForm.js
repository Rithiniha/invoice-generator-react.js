import React, { useState } from 'react';
import './App.css';

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Please fill this field.';
    if (!description.trim()) newErrors.description = 'Please fill this field.';
    if (!price.trim()) newErrors.price = 'Please fill this field.';
    if (!quantity.trim()) newErrors.quantity = 'Please fill this field.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAddItem({
        name,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      });

      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
    }
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? 'error-input' : ''}
        />
        {errors.description && <div className="error-message">{errors.description}</div>}
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={errors.price ? 'error-input' : ''}
        />
        {errors.price && <div className="error-message">{errors.price}</div>}
      </div>

      <div className="input-wrapper">
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={errors.quantity ? 'error-input' : ''}
        />
        {errors.quantity && <div className="error-message">{errors.quantity}</div>}
      </div>

      <button type="submit" className="submit-btn">Add Item</button>
    </form>
  );
}

export default AddItemForm;
