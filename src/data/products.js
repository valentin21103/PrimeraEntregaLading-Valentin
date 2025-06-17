const products = [
  {
    id: 1,
    name: "Sánguche de Jamón y Queso",
    price: 8.50,
    category: "sanguches",
    description: "Delicioso sánguche de jamón y queso con lechuga y tomate",
    image: "https://via.placeholder.com/300x200?text=Jamón+Queso",
    stock: 15
  },
  {
    id: 2,
    name: "Sánguche de Pollo",
    price: 9.00,
    category: "sanguches",
    description: "Sánguche de pollo a la plancha con vegetales frescos",
    image: "https://via.placeholder.com/300x200?text=Pollo",
    stock: 12
  },
  {
    id: 3,
    name: "Sánguche Vegetariano",
    price: 7.50,
    category: "sanguches",
    description: "Sánguche vegetariano con aguacate, tomate y lechuga",
    image: "https://via.placeholder.com/300x200?text=Vegetariano",
    stock: 8
  },
  {
    id: 4,
    name: "Coca Cola",
    price: 2.50,
    category: "bebidas",
    description: "Refresco Coca Cola 500ml",
    image: "https://via.placeholder.com/300x200?text=Coca+Cola",
    stock: 25
  },
  {
    id: 5,
    name: "Agua Mineral",
    price: 1.50,
    category: "bebidas",
    description: "Agua mineral natural 500ml",
    image: "https://via.placeholder.com/300x200?text=Agua",
    stock: 30
  },
  {
    id: 6,
    name: "Papas Fritas",
    price: 3.00,
    category: "acompañamientos",
    description: "Papas fritas crujientes con sal",
    image: "https://via.placeholder.com/300x200?text=Papas+Fritas",
    stock: 20
  },
  {
    id: 7,
    name: "Ensalada César",
    price: 6.50,
    category: "acompañamientos",
    description: "Ensalada César con aderezo especial",
    image: "https://via.placeholder.com/300x200?text=Ensalada+César",
    stock: 10
  }
];

// Función para simular delay de API
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// Función para obtener un producto por ID
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(p => p.category === category);
      resolve(filteredProducts);
    }, 1000);
  });
};

export default products; 