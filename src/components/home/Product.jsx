// ProductCard.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import UtilityButtons from "../UtilityButtons";

const Product = ({ product }) => {
  //  console.log(product, "product in product component");
  // const [productsData, setProductsData] = useState([]);
  return (
    <div className="product-card m-1 p-2 relative w-52 h-80 bg-white border border-gray-200 overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-500 ease-in-out">
      <Link to={`/products/${product.title}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image w-44 h-40 object-contain mx-auto hover:scale-110 transition-transform duration-100 ease-in-out"
        loading="lazy"
        
  width="176"  // Corresponds to Tailwind's w-44 (11rem * 16px/rem)
  height="160" // Corresponds to Tailwind's h-40 (10rem * 16px/rem)
        />
        <br />
        <hr />
        <h2 className="product-title text-1xl font-semibold text-black">
          {product.title.split(" ").length <= 7 ?( product.title.split(" ").slice(0, 7).join(" ") ) : (product.title.split(" ").slice(0, 7).join(" ") + " ..." )
          }
        </h2>
        <p className="product-price text-sm text-red-600 mb-2 flex flex-col">
          <b className="text-green-600">Discount Price: ${product.price}</b>
          <s>Original Price :${product.originalPrice}</s>
        </p>
        <h1 className="product-categroies text-xs uppercase text-gray-400">
          {product.category}
        </h1>
      </Link>
      <UtilityButtons product={product.id} />
    </div>
  );
};

export default Product;
