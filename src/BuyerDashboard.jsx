// BuyerDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from './Logout';
// const BuyerDashboard = () => {
    
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch products from the API
//     const fetchProducts = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:3000/buyer/products', {
//             headers: { Authorization: `Bearer ${token}` }
//           });
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

// //   const handleAddToWishlist = (product) => {
// //     // Logic to add the product to wishlist
// //     setWishlist([...wishlist, product]);
// //   };

// const handleAddToWishlist = async (productId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(`http://localhost:3000/buyer/addtoWishlist/${productId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//     //   setWishlist([...wishlist,product]);
//       console.log('Product added to wishlist');
//     } catch (error) {
//       console.error('Error adding to wishlist:', error);
//     }
//   };
  
//   const handleViewWishlist = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:3000/buyer/viewwishlist', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setWishlist(response.data);  // Set the fetched wishlist
//     } catch (error) {
//       console.error('Error fetching wishlist:', error);
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={styles.container}>
//       <Sidebar onViewWishlist={handleViewWishlist} />
//       <div style={styles.content}>
//         <h2>Products</h2>
//         <div style={styles.productGrid}>
//           {products.map((product) => (
//             <ProductCard
//               key={product._id}
//               product={product}
//               onAddToWishlist={handleAddToWishlist}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Sidebar = ({ wishlist }) => {
//   return (
//     <div style={styles.sidebar}>
//       <h3>Sidebar</h3>
//       <Link to="/orders">Your Orders</Link>
//       <div>
//         <h4>Wishlist</h4>
//         <button onClick={onViewWishlist}>View Wishlist</button>
//         {/* <p>{wishlist.length} items</p> */}
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ product,onAddToWishlist }) => {
//   return (
//     <div style={styles.card}>
//         <h4>{product._id}</h4>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button onClick={() => onAddToWishlist(product._id)}>Add to Wishlist</button>
//       <Link to={`/product/buyproduct/${product._id}`}>
//         <button>Buy</button>
//       </Link>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     padding: '20px',
//   },
//   sidebar: {
//     width: '200px',
//     marginRight: '20px',
//   },
//   content: {
//     flex: 1,
//   },
//   productGrid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//   },
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '200px',
//     textAlign: 'center',
//   },
// };



const BuyerDashboard = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders,setOrders]=useState([]);
    
    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/buyer/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        
        fetchProducts();
    }, []);
    
    const handleAddToWishlist = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:3000/buyer/addtoWishlist/${productId}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Product added to wishlist');
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };


    const handleBuyNow = async (productId) => {
        try {
          const token = localStorage.getItem('token');
          await axios.post(
            'http://localhost:3000/buyer/placeOrder',
            { productId, quantity: 1 }, // You can modify the quantity dynamically if needed
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log('Order placed successfully');
        } catch (error) {
          console.error('Error placing order:', error);
        }
      };
      
      const fetchOrders = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:3000/buyer/orders', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setOrders(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
      
      useEffect(() => {
        fetchOrders();
      }, []);
      
    
    const handleViewWishlist = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/buyer/viewwishlist', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setWishlist(response.data);  // Set the fetched wishlist
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    };
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <>
        <Logout></Logout>
        <div style={styles.container}>
        <Sidebar onViewWishlist={handleViewWishlist} />
        <div style={styles.content}>
          <h2>Products</h2>
          <div style={styles.productGrid}>
            {products.map((product) => (
                <ProductCard
                key={product._id}
                product={product}
                onAddToWishlist={handleAddToWishlist}
                onBuying={handleBuyNow}
                />
            ))}
          </div>
  
          <h2>Wishlist</h2>
          <div>
            {wishlist.length === 0 ? (
                <p>No items in your wishlist</p>
            ) : (
                wishlist.map((product) => (
                    <div key={product._id}>
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
            </>
    );
};

const Sidebar = ({ onViewWishlist }) => {
  return (
    <div style={styles.sidebar}>
      <h3>Sidebar</h3>
      <Link to="/orders">Your Orders</Link>
      <div>
        <h4>Wishlist</h4>
        <button onClick={onViewWishlist}>View Wishlist</button>
        {/* <p>{wishlist.length} items</p> */}
      </div>
    </div>
  );
};

const ProductCard = ({ product,onAddToWishlist ,onBuying}) => {
  return (
    <div style={styles.card}>
        {/* <h4>{product._id}</h4> */}
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToWishlist(product._id)}>Add to Wishlist</button>
      {/* <Link to={`/product/buyproduct/${product._id}`}> */}
      <button onClick={() => onBuying(product._id)}>Buy Now</button>
      {/* </Link> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
  },
  sidebar: {
    width: '200px',
    marginRight: '20px',
  },
  content: {
    flex: 1,
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
  },
};

export default BuyerDashboard;