
import React, { useState } from 'react';
import InputField from './InputField';

function AddItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.quantity) return;

    const newItem = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity)
    };

    onAddItem(newItem);

    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <InputField
        label="Item Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputField
        label="Description"
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
      />
      <InputField
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <InputField
        label="Quantity"
        name="quantity"
        type="number"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
