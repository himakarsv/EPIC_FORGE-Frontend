import React from 'react';
import axios from 'axios';

const DeleteProduct = ({ productId, setProducts }) => {
  const handleDeleteProduct = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:3000/seller/deleteProduct/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return <button onClick={handleDeleteProduct}>Delete</button>;
};

export default DeleteProduct;
