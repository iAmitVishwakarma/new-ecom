import React from 'react'
import { useSelector } from 'react-redux'
import UtilityButtons from '../components/UtilityButtons';
import Product from '../components/home/Product';
import { useNavigate } from 'react-router-dom';

function WishlistSec() {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productDatas);
  const { wishlist } = useSelector((state) => state.wishlist);
    const goBack = () => {
    navigate("/");
  };

if (wishlist == false) {
  return (
  
  <div className=' uppercase text-center flex items-center  gap-10  justify-center p-8  w-4/12 m-20 rounded-2xl backdrop-blur-10 shadow-xl bg-gray-900/5 font-bold mx-auto border-dashed border-2 border-pink-600'>  <button
          onClick={goBack}
          className="bg-gray-900  dark:bg-gray-50 dark:text-black text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          &lt; go back
        </button>
         <h1>no product add in wishlist </h1>
         
         </div>
)

} 
  

 const wishlistProduct = ()=> {if (products && products.length > 0) {
    if (wishlist && wishlist.length > 0) {
      return products
        .filter((product) => wishlist.includes(product.id))
        .map((product, index) => (
              <Product key={index} product={product} />
          
          // <div
          //   key={product.id}
          //   className="product-card inline-block mr-[10px] mb-2 p-2 relative w-52 h-80 bg-white  border border-gray-200 overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-500 ease-in-out"
          // >
          //   <div onClick={() => clickHandler(product)}>
          //     <img
          //       src={product.image}
          //       alt={`Image of ${product.title}`}
          //       className="product-image w-44 h-40 object-contain mx-auto"
          //     />
          //     <br />
          //     <hr />
          //     <h2 className="product-title text-1xl font-semibold">
          //       {product.title.split(" ").slice(0, 6).join(" ")}
          //     </h2>
          //     <p className="product-price text-sm text-red-600 mb-2 flex flex-col">
          //       <b className="text-green-600">Discount Price: ${product.price}</b>
          //       <s>Original Price :${(product.price * 1.5).toFixed(2)}</s>
          //     </p>
          //     <h1 className="product-categroies text-xs uppercase text-gray-400">
          //       {product.category}
          //     </h1>
          //   </div>
          //   <UtilityButtons product={product.id} />
          // </div>
            
        ));
    }

  }}

  return (
    <div className="wishlist-container w-10/12 mx-auto mt-8 mb-1 bg-white dark:bg-gray-800 p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      <div className="product-list flex flex-wrap">
        {wishlistProduct()}
      </div>
    </div>
  );
}
    

export default WishlistSec

