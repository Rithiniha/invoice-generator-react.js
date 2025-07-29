import React from 'react';

function TotalAmount({ items }) {
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return <h2 className="total">Grand Total: ₹{total.toFixed(2)}</h2>;
}

export default TotalAmount;
