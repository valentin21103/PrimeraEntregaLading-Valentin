import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const fetchProducts = async () => {
            try {
                let products;
                if (categoryId) {
                    products = await getProductsByCategory(categoryId);
                } else {
                    products = await getProducts();
                }
                setItems(products);
            } catch (error) {
                console.error("Error fetching products:", error);
                setItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) {
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
        <div>
            <h1 style={{
                textAlign: 'center',
                margin: '2rem 0',
                color: '#333'
            }}>
                {greeting}
                {categoryId && (
                    <span style={{ color: '#007bff' }}>
                        {" - " + categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
                    </span>
                )}
            </h1>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;