//(
// import React from 'react'
// import {NavLink  , Routes , Route, useNavigate, Navigate } from "react-router-dom";
// import Home from '../Home';
// import Cart from '../Cart';
// import Profile from '../Profile';
// import ProductPage from '../ProductPage';
// import WishlistSec from '../WishlistSec';
// import { useSelector } from 'react-redux';

// import PaymentCart from '../../components/Cart/Payment/PaymentCart';
// import BagCart from '../../components/Cart/BagCart';
// import AddressCart from '../../components/Cart/Address/AddressCart';



// function Navlinks() {
//   const {addToCart} = useSelector(state => state.addCart);
// console.log(addToCart.length);

//   return (
//     <>
//     <div className=' flex  items-center  justify-around h-15 mt-2' >
//     <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img  className='w-14 ' src="src/assets/logo.webp" /></NavLink>
//     <div className='flex gap-5 ml-32'>
//     <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Wishlist</NavLink>
//     <NavLink to="/cart"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
//   Cart
//   <span className='relative top-[-10px] left-[-5px] bg-red-500  px-2 py-1 text-xs rounded-full font-bold text-wheat'>
//     {addToCart.length}
//   </span>
// </NavLink>
// <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink>
// </div>
// </div>
//   <hr />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/wishlist' element={<div className=' m-auto my-3 px-1 p-2 pb-4 h-full w-10/12 border-2 border-gray-100 rounded shadow-[0px_5px_10px_#0000005e]'  >  <WishlistSec /> </div> } />
//           <Route path='/products/:name' element={<ProductPage />}  />
//           <Route path="/cart/"element={<Cart />}> 
//           <Route path='' element= {<BagCart />} />
// {
//   addToCart.length > 0 ?
//   <> <Route path="payment" element={<PaymentCart />} />
//      <Route path="address" element={<AddressCart />} />
// </> : <Route path="*" element={<Navigate to="/" />} />

// }

      
         
//      </Route>

//           <Route path="/profile" element={<Profile />} />
//         </Routes>
    
// </>
//   )
// }

// export default Navlinks
//)

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShoppingBag,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import your page components
import Home from '../screen/Home';
import ProductPage from '../screen/ProductPage';
import WishlistSec from '../screen/WishlistSec';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';
import BagCart from '../components/Cart/BagCart';
import PaymentCart from '../components/Cart/Payment/PaymentCart';
import AddressCart from '../components/Cart/Address/AddressCart';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/Signup';
import ProtectedRoute from './ProtectedRoute';

const Navlinks = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { addToCart } = useSelector((state) => state.addCart);
    const { isAuthenticated } = useSelector((state) => state.auth);
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  return (
    <>
      <header className="header flex justify-between items-center px-10 py-4 shadow-lg sticky top-0 bg-white z-50">
       <div className='w-10/12 mx-auto flex justify-between items-center'> <div className="logo">
          <Link to="/">
            <img
              className="h-10"
              src="https://iamitvishwakarma.github.io/amit-vishwakarma/assets/img/logo.png"
              alt="logo"
            />
          </Link>
        </div>
       
  {isAuthenticated ? (
<>  <div className="search-bar flex items-center bg-gray-100 rounded-md px-4 py-2 w-1/3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>
        <div className="nav-icons flex items-center space-x-8">
          <Link to="/profile" className="decoration-none">
              <div  className="profile-icon relative  flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} />
            <p className="text-sm font-bold">Profile</p></div>
                </Link>
       

          <Link to="/wishlist" className="decoration-none">
            <div className="wishlist-icon relative  flex flex-col items-center">
              <FontAwesomeIcon icon={faHeart} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              <p className="text-sm font-bold">Wishlist</p>
            </div>
          </Link>

          <Link to="/cart" className="decoration-none">
            <div className="bag-icon relative  flex flex-col items-center">
              <FontAwesomeIcon icon={faShoppingBag} />
              {addToCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                   {addToCart.length}
                </span>
              )}
              <p className="text-sm font-bold">Bag</p>
            </div>
          </Link>
          </div>
          </>
  ) :  (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Login
                  </Link>
                )}

        </div>
     
      </header>

      {/* <Routes>
           <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistSec />} />
         <Route path="/cart/"element={<Cart />}> 
          <Route path='' element= {<BagCart />} />
 {
  addToCart.length > 0 ?   <> 
    <Route path="payment" element={<PaymentCart />} /> 
       <Route path="address" element={<AddressCart />} /> </> 
       : <Route path="*" element={<Navigate to="/" />} />
 } </Route>
        <Route path="/profile" element={<Profile />} >
          <Route path="" element={<Profile activeTab={'profile'} />} />
          <Route path="addresses" element={<Profile activeTab={'addresses'} />} />
          <Route path="orders" element={<Profile activeTab={'orders'}/>} />
        </Route>
          
      </Routes> */}

       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
         <Route path='/products/:name' element={<ProductPage />}  />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<WishlistSec />} />
         <Route path="/profile" element={<Profile />} >
          <Route path="" element={<Profile activeTab={'profile'} />} />
          <Route path="addresses" element={<Profile activeTab={'addresses'} />} />
          <Route path="orders" element={<Profile activeTab={'orders'}/>} />
        </Route>
          
          {/* Static Cart Routing */}
          <Route path="/cart" element={<Cart />}>
            <Route index element={<BagCart />} />
            <Route path="address" element={<AddressCart />} />
            <Route path="payment" element={<PaymentCart />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Navlinks;