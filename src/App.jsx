// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import Navbar from "./Navbar"
// import SellerDashboard from './SellerDashboard';
// import BuyerDashboard from './BuyerDashboard';

// function App() {
//   const userType = localStorage.getItem('userType'); // Get the userType from local storage

//   return (
//     <Router>
//       <Route
//         exact
//         path="/dashboard"
//         render={() => {
//           if (userType === 'seller') {
//             return <SellerDashboard />;
//           } else if (userType === 'buyer') {
//             return <BuyerDashboard />;
//           } else {
//             return <Redirect to="/auth/login" />;
//           }
//         }}
//       />
//     </Router>
//   );
// }

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import Login from './Login'; // You should have your Login component
// import Register from './Register'; // You should have your Register component
// import SellerDashboard from './SellerDashboard';
// import BuyerDashboard from './BuyerDashboard';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" component={Home} />
//           <Route path="/auth/login" component={Login} />
//           <Route path="/auth/register" component={Register} />
//           <Route path="/seller" component={SellerDashboard} />
//           <Route path="/buyer" component={BuyerDashboard} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Ensure you import your components
import Login from './Login';
import Register from './Register';
import SellerDashboard from './SellerDashboard';
import BuyerDashboard from './BuyerDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

