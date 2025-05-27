import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <nav style={{
            display: 'flex',
             justifyContent: 'space-between',
             alignItems: 'center',
             padding: '1rem',
            backgroundColor: '#f8f8f8'
            }}>
        <div style={{
            fontWeight: 'bold',
            fontSize: '1.5re'
        }}>
            <img
        src="/img/iron.jpg"   // <-- nota la barra inicial
        alt="Iron logo"
        style={{ width: '40px' , padding: 10}}
      />
        </div>
           <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1rem',
        margin: 0,
        padding: 0
      }}>
            <li><a href="/">Inicio</a> </li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="contacto">Contacto</a></li>
        </ul>

    <CartWidget />

        </nav>
    );
};

export default NavBar;
