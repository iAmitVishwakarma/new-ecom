import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


// import dataItem from '../assets/Data'


function PosterHome() {

useEffect(() => {
  const intervalId = setInterval(() => {
    setRandomNumber(Math.floor(Math.random() * 20))
  }, 5000);
  return () => clearInterval(intervalId);
}, []);

const [randomNum, setRandomNumber] = useState(0);

const {products} = useSelector((state)=> state.productDatas)



if (products && products.length > 0) { 
 return <div
  className="w-[95%]  hidden md:block px-2 sm:px-4 hero m-auto border-e border-red-100 dark:border-red-300 rounded"
  onClick={() => Product(products[randomNum].id)}
>
  <div
    style={{ backgroundImage: `linear-gradient(60deg, #FD913C 45%, white 65%)` }}
    className="w-full h-60 sm:h-72 md:h-96 flex flex-col md:flex-row justify-center items-center poster rounded-md overflow-hidden"
  >
    <Link
      to={`/products/${products[randomNum].title}`}
      className="w-full md:w-5/12 mt-2 sm:mt-4 px-3 text-detail text-center md:text-left"
    >
      <h4 className="uppercase font-bold text-xs text-gray-700 dark:text-gray-300">
        {products[randomNum].category}
      </h4>
      <h1 className="text-xl sm:text-2xl font-bold text-slate-50 dark:text-slate-200">
        {products[randomNum].title.split(" ").slice(0, 6).join(" ")}{" "}
        <span className="text-base">
          {products[randomNum].title.split(" ").slice(6).join(" ")}
        </span>
      </h1>
      <p className="capitalize overflow-hidden mt-1 font-normal text-gray-800 dark:text-gray-200 text-sm sm:text-base">
        <i>
          {products[randomNum].description.split(" ").slice(0, 30).join(" ")}
        </i>
      </p>
    </Link>

    <Link
      to={`/products/${products[randomNum].title}`}
      className="w-full md:w-1/2 flex justify-center md:justify-end Poster-detail"
    >
      <img
        src={products[randomNum].image}
        alt={`Image of ${products[randomNum].title}`}
        className="w-32 sm:w-40 md:w-56 h-40 sm:h-52 md:h-[60vh] object-contain m-2"
      />
    </Link>
  </div>
</div>
}

 

  
   
    
 
}

export default PosterHome;
