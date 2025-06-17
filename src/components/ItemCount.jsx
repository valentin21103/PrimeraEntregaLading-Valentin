import { useState } from 'react';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '200px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button 
          onClick={decrement}
          disabled={count <= 1}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1.2rem',
            border: 'none',
            backgroundColor: count <= 1 ? '#ccc' : '#007bff',
            color: 'white',
            borderRadius: '4px',
            cursor: count <= 1 ? 'not-allowed' : 'pointer'
          }}
        >
          -
        </button>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {count}
        </span>
        <button 
          onClick={increment}
          disabled={count >= stock}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1.2rem',
            border: 'none',
            backgroundColor: count >= stock ? '#ccc' : '#007bff',
            color: 'white',
            borderRadius: '4px',
            cursor: count >= stock ? 'not-allowed' : 'pointer'
          }}
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Agregar al carrito
      </button>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        Stock disponible: {stock}
      </p>
    </div>
  );
};

export default ItemCount; 