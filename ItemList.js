import React from 'react';
import ActionButton from './ActionButton'; 

function ItemList({ items, onRemoveItem }) {
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Price (₹)</th>
          <th>Quantity</th>
          <th>Total (₹)</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="6">No items added yet.</td>
          </tr>
        ) : (
          items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <ActionButton
                  label="Remove"
                  onClick={() => onRemoveItem(index)}
                  color="#dc3545" 
                  title="Remove this item"
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ItemList;

