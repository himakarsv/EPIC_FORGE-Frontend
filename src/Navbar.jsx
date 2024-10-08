const Navbar = () => {
    const userType = localStorage.getItem('userType');
  
    return (
      <nav>
        {userType === 'seller' ? (
          <>
            <a href="/addProduct">Add Product</a>
            <a href="/my-products">My Products</a>
            <a href="/orders">Orders</a>
          </>
        ) : (
          <>
            <a href="/products">Browse Products</a>
            <a href="/viewwishlist">My Wishlist</a>
            <a href="/orders">My Orders</a>
          </>
        )}
      </nav>
    );
  };
  
  export default Navbar;