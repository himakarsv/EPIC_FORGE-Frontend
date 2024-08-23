import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import SalesSidebar from './SalesSidebar';
import Logout from './Logout';
const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [salesOrders,setSalesOrders]=useState([]);
  useEffect(() => {
    // Fetch products for this seller
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://epic-forge-backend.onrender.com/seller/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(response.data);
    };

    fetchProducts();
  }, []);
  const fetchSalesOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://epic-forge-backend.onrender.com/seller/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSalesOrders(response.data);
    } catch (error) {
      console.error('Error fetching sales orders:', error);
    }
  };
  
  useEffect(() => {
    fetchSalesOrders();
  }, []);
  

  return (
    <>
    <Logout></Logout>
    <div className="seller-dashboard">
      <div className="sidebar">
        <SalesSidebar />
      </div>
      <div className="main-content">
        <h1>Seller Dashboard</h1>

        <AddProduct setProducts={setProducts} />

        {products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => setSelectedProduct(product)}>Edit</button>
            <DeleteProduct productId={product._id} setProducts={setProducts} />
          </div>
        ))}

        {selectedProduct && (
          <EditProduct
          product={selectedProduct}
          setProducts={setProducts}
          closeEdit={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
        </>
  );
};

export default SellerDashboard;
