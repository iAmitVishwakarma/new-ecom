import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { asyncgetProduct } from '../store/Action/getProduct';
import UtilityButtons from '../components/UtilityButtons';


const ProductPage = () => {

  return (
    <div className="flex justify-center h-[80vh] w-3/4 mx-auto bg-white mt-8 relative border border-gray-300 shadow-md" >
    <div className="absolute left-0 p-4">
      <button onClick={() => goBack()} className="bg-gray-900 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"> &lt; go back</button>
    </div>
    <div className="w-2/5 ">
      <img src={product.image} alt={product.title} className="w-full h-[100%] object-contain p-4 float-left -mx-20" />
    </div>
   <hr />
    <div className="w-1/3 flex flex-col justify-center items-start mt-5">
      <h6 className="text-slate-300 font-bold  uppercase text-base mt-[-10px]">{product.category}</h6>
      <h2 className="text-3xl font-bold mb-2">{product.title.split(" ").slice(0, 6).join(" ")} <span className="text-lg">{product.title.split(" ").slice(6).join(" ")}</span></h2>
      
      <i className="text-gray-600 text-sm mb-5">{product.description.split(" ").slice(0, 50).join(" ")}</i>
      <div className="flex items-center">
        <span className="text-blue-600 font-bold text-lg">${product.price} </span>
        <s className=' ml-2'>${product.originalPrice}</s>
        <span className="text-red-600 text-sm mx-2">({product.discountPrice}% OFF)</span>
      </div>
      <UtilityButtons product={product.id} />
    </div>
  
  </div>
  );
}


export default ProductPage


// cd my-project cd firstPro