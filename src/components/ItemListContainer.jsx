

const ItemListContainer = ({ saludo }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{saludo}</h2>
      <div style={{
        marginTop: '1rem',
        padding: '2rem',
        backgroundColor: '#fafafa',
        border: '1px dashed #ccc'
      }}>
        Catálogo de productos...
      </div>
    </div>
  );
};

export default ItemListContainer;