import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton';
import SortButton from './SortButton';

function ItemList({ items, onRemove }) {
  const [sortedItems, setSortedItems] = useState([...items]);
  const [originalItems, setOriginalItems] = useState([...items]);
  const [sortState, setSortState] = useState({ field: null, direction: null });

  useEffect(() => {
    setSortedItems([...items]);
    setOriginalItems([...items]);
    setSortState({ field: null, direction: null });
  }, [items]);

  const sortByField = (field, ascending = true) => {
    const direction = ascending ? 'asc' : 'desc';

    if (sortState.field === field && sortState.direction === direction) {
      setSortedItems([...originalItems]);
      setSortState({ field: null, direction: null });
      return;
    }

    const sorted = [...sortedItems].sort((a, b) =>
      ascending ? a[field] - b[field] : b[field] - a[field]
    );

    setSortedItems(sorted);
    setSortState({ field, direction });
  };

  const total = sortedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const sortBtnStyle = {
    marginLeft: '6px',
    padding: '2px 6px',
    fontSize: '0.8em',
    border: 'none',
    backgroundColor: '#eee',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  return (
    <>
      <table className="item-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>
              Price
              <SortButton
                onClick={() => sortByField('price', true)}
                label="↑"
                style={sortBtnStyle}
                className={
                  sortState.field === 'price' && sortState.direction === 'asc' ? 'selected' : ''
                }
              />
              <SortButton
                onClick={() => sortByField('price', false)}
                label="↓"
                style={sortBtnStyle}
                className={
                  sortState.field === 'price' && sortState.direction === 'desc' ? 'selected' : ''
                }
              />
            </th>
            <th>
              Quantity
              <SortButton
                onClick={() => sortByField('quantity', true)}
                label="↑"
                style={sortBtnStyle}
                className={
                  sortState.field === 'quantity' && sortState.direction === 'asc' ? 'selected' : ''
                }
              />
              <SortButton
                onClick={() => sortByField('quantity', false)}
                label="↓"
                style={sortBtnStyle}
                className={
                  sortState.field === 'quantity' && sortState.direction === 'desc' ? 'selected' : ''
                }
              />
            </th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <ActionButton
                  label="Remove"
                  onClick={() => onRemove(index)}
                  color="#dc3545"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">Grand Total: ₹{total.toFixed(2)}</div>
    </>
  );
}

export default ItemList;
