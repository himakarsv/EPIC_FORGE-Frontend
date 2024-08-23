import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ setProducts }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [marketValue, setMarketValue] = useState('');
  const [retailValue, setRetailValue] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:3000/seller/addProduct',
        {
          name,
          color,
          type,
          size,
          price,
          marketValue,
          retailValue
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      setProducts((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form onSubmit={handleAddProduct}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Market Value"
        value={marketValue}
        onChange={(e) => setMarketValue(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Retail Value"
        value={retailValue}
        onChange={(e) => setRetailValue(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
