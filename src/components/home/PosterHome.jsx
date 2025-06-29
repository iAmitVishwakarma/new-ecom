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
 return <div className="w-[85%] px-4 hero m-auto border-e border-red-100 rounded" onClick={() => Product(products[randomNum].id)}>
  <div to={`/products/${products[randomNum].title}`} style={{ backgroundImage: `linear-gradient(60deg, #FD913C 45%, white 65%)` }} className="w-full h-96 flex justify-center items-center poster">
    <Link to={`/products/${products[randomNum].title}`} className="w-4/12   mt-[-15px] ml-[-7px] text-detail">
      <h4 className="uppercase font-bold text-xs ">{products[randomNum].category}</h4>
      <h1 className="text-2xl font-bold text-slate-50">{products[randomNum].title.split(" ").slice(0, 6).join(" ")}  <span className="text-base">{products[randomNum].title.split(" ").slice(6).join(" ")}</span>  </h1>
      <p className="capitalize overflow-hidden m-auto mt-1 font-normal">
        <i className=" text-sm">{products[randomNum].description.split(" ").slice(0, 30).join(" ")}</i>
      </p>
    </Link >
    <Link to={`/products/${products[randomNum].title}`} className="w-1/2 Poster-detail">
      <img src={products[randomNum].image} alt={products[randomNum].title} className="w-56 float-right m-2 object-contain h-60vh" />
    </Link >
  </div >
</div>
}

 

  
   
    
 
}

export default PosterHome;
