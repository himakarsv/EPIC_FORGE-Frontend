import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = ({ product, setProducts, closeEdit }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleEditProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.put(
        `http://localhost:3000/seller/editProduct/${product._id}`,
        { name, price },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProducts((prev) =>
        prev.map((p) => (p._id === product._id ? response.data : p))
      );
      closeEdit();
    } catch (error) {
      console.error('Error editing product', error);
    }
  };

  return (
    <form onSubmit={handleEditProduct}>
      <h2>Edit Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={closeEdit}>Cancel</button>
    </form>
  );
};

export default EditProduct;
