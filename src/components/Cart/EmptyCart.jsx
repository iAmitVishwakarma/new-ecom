import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate();

  return (
    <div className="container flex justify-center items-center flex-col  mx-auto">
  <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png" className="mx-auto h-40 w-36" alt="image" fetchpriority="auto" loading="eager" />
  <div className="message text-center mt-5">
    <h1 className="text-lg text-gray-700 mt-5">Hey, it feels so light!</h1>
    There is nothing in your bag. Let's add some items.
  </div>
  
    <button  
    className="text-center inline-block mt-5 mb-10 px-4 py-2 text-lg text-pink-500 border-2 border-pink-500 rounded-md font-semibold hover:bg-pink-500 hover:text-white"
    onClick={() => navigate('/wishlist')}
    >
      ADD ITEMS FROM WISHLIST
    </button>
 
</div>
    
  )
}

export default EmptyCart
