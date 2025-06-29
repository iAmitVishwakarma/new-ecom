import React from 'react'
import {NavLink  , Routes , Route, useNavigate, Navigate } from "react-router-dom";
import Home from '../Home';
import Cart from '../Cart';
import Profile from '../Profile';
import ProductPage from '../ProductPage';
import WishlistSec from '../WishlistSec';
import { useSelector } from 'react-redux';

import PaymentCart from '../../components/Cart/Payment/PaymentCart';
import BagCart from '../../components/Cart/BagCart';
import AddressCart from '../../components/Cart/Address/AddressCart';



function Navlinks() {
  const {addToCart} = useSelector(state => state.addCart);
console.log(addToCart.length);

  return (
    <>
    <div className=' flex  items-center  justify-around h-15 mt-2' >
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img  className='w-14 ' src="src/assets/logo.webp" /></NavLink>
    <div className='flex gap-5 ml-32'>
    <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Wishlist</NavLink>
    <NavLink to="/cart"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
  Cart
  <span className='relative top-[-10px] left-[-5px] bg-red-500  px-2 py-1 text-xs rounded-full font-bold text-wheat'>
    {addToCart.length}
  </span>
</NavLink>
<NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink>
</div>
</div>
  <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/wishlist' element={<div className=' m-auto my-3 px-1 p-2 pb-4 h-full w-10/12 border-2 border-gray-100 rounded shadow-[0px_5px_10px_#0000005e]'  >  <WishlistSec /> </div> } />
          <Route path='/products/:name' element={<ProductPage />}  />
          <Route path="/cart/"element={<Cart />}> 
          <Route path='' element= {<BagCart></BagCart>} />
{
  addToCart.length > 0 ?
  <> <Route path="payment" element={<PaymentCart />} />  <Route path="address" element={<AddressCart />} />
</> : <Route path="*" element={<Navigate to="/" />} />

}

      
         
     </Route>

          <Route path="/profile" element={<Profile />} />
        </Routes>
    
</>
  )
}

export default Navlinks

