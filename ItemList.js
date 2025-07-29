import React from 'react';

function ItemList({ items }) {
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Price (₹)</th>
          <th>Quantity</th>
          <th>Total (₹)</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="5">No items added yet.</td>
          </tr>
        ) : (
          items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ItemList;
