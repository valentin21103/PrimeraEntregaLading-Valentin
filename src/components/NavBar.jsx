import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../data/products";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const products = await getProducts();
                const uniqueCategories = [...new Set(products.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

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
            fontSize: '1.5rem'
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                    src="/img/iron.jpg"
                    alt="Iron logo"
                    style={{ width: '40px' , padding: 10}}
                />
            </Link>
        </div>
           <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1rem',
        margin: 0,
        padding: 0
      }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Inicio</Link></li>
            <li><Link to="/productos" style={{ textDecoration: 'none', color: '#333' }}>Productos</Link></li>
            {categories.map(category => (
                <li key={category}>
                    <Link 
                        to={`/categoria/${category}`} 
                        style={{ textDecoration: 'none', color: '#333' }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                </li>
            ))}
        </ul>

    <CartWidget />

        </nav>
    );
};

export default NavBar;
