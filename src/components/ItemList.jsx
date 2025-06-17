import Item from './Item';

function ItemList({ items }) {
  if (items.length === 0) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        Cargando productos...
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList; 