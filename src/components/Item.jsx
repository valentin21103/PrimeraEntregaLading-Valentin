import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    >
      <img 
        src={item.image} 
        alt={item.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <h3 style={{ margin: '0.5rem 0', color: '#333' }}>{item.name}</h3>
      <p style={{ color: '#666', margin: '0.5rem 0' }}>${item.price}</p>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Stock: {item.stock} unidades
      </p>
      <Link 
        to={`/item/${item.id}`}
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          marginTop: '0.5rem'
        }}
      >
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;