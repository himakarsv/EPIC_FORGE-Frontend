import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesSidebar = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Fetch sales orders for this seller
    const fetchSales = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/seller/sales', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSales(response.data);
    };

    fetchSales();
  }, []);

  return (
    <div className="sales-sidebar">
      <h2>Sales Orders</h2>
      <ul>
        {sales.map((order) => (
          <li key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Product: {order.productName}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total Price: ${order.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesSidebar;
