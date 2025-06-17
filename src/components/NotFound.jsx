import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        color: '#dc3545', 
        margin: '0 0 1rem 0' 
      }}>
        404
      </h1>
      <h2 style={{ 
        color: '#333', 
        margin: '0 0 1rem 0' 
      }}>
        Página no encontrada
      </h2>
      <p style={{ 
        color: '#666', 
        margin: '0 0 2rem 0',
        fontSize: '1.1rem'
      }}>
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '1rem'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound; 