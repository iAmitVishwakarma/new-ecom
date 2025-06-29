import React from 'react'
import { useSelector } from 'react-redux'
import UtilityButtons from '../components/UtilityButtons';

function WishlistSec() {
  const { products } = useSelector((state) => state.productDatas);
  const { wishlist } = useSelector((state) => state.wishlist);

if (wishlist == false) {
  return <h1 className=' uppercase text-center pt-3 font-bold w-full'> no product add in wishlist </h1>
} 
  

  if (products && products.length > 0) {
    if (wishlist && wishlist.length > 0) {
      return products
        .filter((product) => wishlist.includes(product.id))
        .map((product) => (
          <div
            key={product.id}
            className="product-card inline-block mr-[10px] mb-2 p-2 relative w-52 h-80 bg-white  border border-gray-200 overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-500 ease-in-out"
          >
            <div onClick={() => clickHandler(product)}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image w-44 h-40 object-contain mx-auto"
              />
              <br />
              <hr />
              <h2 className="product-title text-1xl font-semibold">
                {product.title.split(" ").slice(0, 6).join(" ")}
              </h2>
              <p className="product-price text-sm text-red-600 mb-2 flex flex-col">
                <b className="text-green-600">Discount Price: ${product.price}</b>
                <s>Original Price :${(product.price * 1.5).toFixed(2)}</s>
              </p>
              <h1 className="product-categroies text-xs uppercase text-gray-400">
                {product.category}
              </h1>
            </div>
            <UtilityButtons product={product.id} />
          </div>
        ));
    }
  }
}
    

export default WishlistSec

