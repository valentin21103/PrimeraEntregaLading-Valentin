import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        const fetchProduct = async () => {
            try {
                const product = await getProductById(id);
                setItem(product);
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Producto no encontrado");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                fontSize: '1.2rem',
                color: '#666'
            }}>
                Cargando producto...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                fontSize: '1.2rem',
                color: '#dc3545'
            }}>
                <h2>Error</h2>
                <p>{error}</p>
            </div>
        );
    }

    return <ItemDetail item={item} />;
}

export default ItemDetailContainer; 