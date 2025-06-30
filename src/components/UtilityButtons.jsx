import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeaddToCart, setaddToCart } from '../store/Action/AddCart';
import { addToWishlist , removeFromWishlist } from '../store/Action/Wishlists';
import { useLocation } from 'react-router-dom';



const UtilityButtons =({ product }) =>{
  
  const dispatch = useDispatch();
const location = useLocation();

  const {wishlist} = useSelector(state => state.wishlist);
  const {addToCart} = useSelector(state => state.addCart);


const  toggleaddToCart = ()=>{
    dispatch(setaddToCart(product));
    if (addToCart.includes(product)) {
        dispatch(removeaddToCart(product));
    }}

  const toggleWishlist = (e) => {
    dispatch(addToWishlist(product));
    if (wishlist.includes(product)) {
        dispatch(removeFromWishlist(product));
    }};

  if(location.pathname.includes('/products')  ){
    return (
      <div className="mt-3 flex gap-2 w-[110%] items-centertransition duration-300 ease-in-out">
          <button
            className=" add-to-cart w-[75%] justify-center py-2 flex items-center  bg-[#E72744] rounded-[5px] text-2xl text-white "
            onClick={toggleaddToCart}><i className="ri-shopping-cart-fill " /> 
          <span className='text-base uppercase ml-2 font-semibold '  >Add to Bag</span> 
          </button>
          {wishlist.includes(product) ?  <button
            className="wishlist w-2/3 justify-center py-2 flex items-center bg-gray-500  text-3xl  border border-slate-800   rounded-[5px]  text-black hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={toggleWishlist }>
            <i className="ri-heart-fill text-red-500"  />
            <span className='text-base uppercase ml-1 font-semibold '>wishlisted</span> 
           </button> 
           : 
           <button
            className="wishlist  w-2/3  justify-center py-2 flex items-center bg-white text-3xl  border border-slate-800   rounded-[5px] text-black hover:text-gray-900 transition duration-300 ease-in-out"
            onClick={toggleWishlist }>
            <i className= " ri-heart-line"/>
            <span className='text-base uppercase ml-1 font-semibold'>wishlist</span> 
      
          </button> }
      
        </div>
        );
      
}else{
 
  return (

    <div className="utilyBtn absolute top-0 right-0 flex flex-col p-2 bg-gray-200 gap-2 rounded-bl-md">
        <button
          className="add-to-cart w-8 h-8 text-3xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
          onClick={toggleaddToCart}
        >
          <i className="ri-shopping-cart-fill" />
        </button>
        <button
          className="wishlist w-8 h-8 text-3xl text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
          onClick={toggleWishlist }
        >
          <i className={wishlist.includes(product) ?  "ri-heart-fill text-red-500"  : "ri-heart-line"} />
    
    
        </button>
      </div>
    
    )
}





};

export default UtilityButtons