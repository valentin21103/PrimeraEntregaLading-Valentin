import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${item.name} al carrito`);
    // Aquí se implementará la lógica del carrito en la siguiente entrega
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '2rem',
        width: '100%'
      }}>
        <div style={{ flex: 1 }}>
          <img 
            src={item.image} 
            alt={item.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div style={{ flex: 1 }}>
          <h1 style={{ 
            color: '#333', 
            marginBottom: '1rem',
            fontSize: '2rem'
          }}>
            {item.name}
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#007bff', 
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            ${item.price}
          </p>
          
          <p style={{ 
            color: '#666', 
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            {item.description}
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#888', marginBottom: '0.5rem' }}>
              <strong>Categoría:</strong> {item.category}
            </p>
            <p style={{ color: '#888' }}>
              <strong>Stock disponible:</strong> {item.stock} unidades
            </p>
          </div>
          
          <ItemCount 
            stock={item.stock} 
            onAdd={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail; 