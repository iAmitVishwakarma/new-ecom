

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProduct } from "../store/Action/getProduct";

import PosterHome from "../components/home/PosterHome";
import Categroies from "../components/home/Categroies";
import Product from "../components/home/Product";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const dispatch = useDispatch();
  const filterBox = useRef(null);
  const { products } = useSelector((state) => state.productDatas);
  const { searchTerm } = useSelector((state) => state.search);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [discountFilter, setDiscountFilter] = useState("");

  // Fetch products on mount
  useEffect(() => {
    dispatch(asyncgetProduct());
  }, []);

  // Apply filters
  useEffect(() => {
    let productsToShow = [...products];

    if (searchTerm) {
      productsToShow = productsToShow.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      productsToShow = productsToShow.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (discountFilter) {
      productsToShow = productsToShow.filter(
        (product) => product.discountPrice >= parseInt(discountFilter)
      );
    }

    if (priceSort === "low-to-high") {
      productsToShow.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high-to-low") {
      productsToShow.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(productsToShow);
  }, [products, selectedCategory, priceSort, discountFilter, searchTerm]);

  const handleFilterToggle = () => {
    const box = filterBox.current?.childNodes[1];
    if (!box) return;
    box.classList.toggle("opacity-0");
    box.classList.toggle("opacity-100");
    box.classList.toggle("hidden");
  };

  const isLoading = !products || products.length === 0;

  const categoryHtml = () => {
  return (
   <div
  className="filterBox w-full relative mx-auto px-2 pr-5 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 pb-2 my-2"
  ref={filterBox}
>
  <p
    className="fiterHeading w-full lg:w-1/6  text-center p-2 text-xl font-semibold text-gray-600 dark:text-gray-200 bg-pink-400/30 dark:bg-pink-600/30 border rounded-full shadow-lg cursor-pointer"
    onClick={handleFilterToggle}
  >
    <FontAwesomeIcon icon="fa-solid fa-filter" /> Filter
  </p>

  <div className="filter-container hidden z-100 w-full lg:w-10/12 bg-orange-300/50 dark:bg-orange-800/50 transition-all duration-200 opacity-0 p-4 border    lg:rounded-full rounded-md shadow-lg flex flex-col md:flex-row justify-around items-center gap-4 lg:gap-0">
    <div className="filter-group">
      <label htmlFor="category-filter" className="font-bold mr-2 text-gray-700 dark:text-gray-200">
        Category:
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-1 px-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-none outline-none rounded-md"
      >
        <option value="">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>

    <div className="filter-group">
      <label htmlFor="price-sort" className="font-bold mr-2 text-gray-700 dark:text-gray-200">
        Sort by Price:
      </label>
      <select
        id="price-sort"
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value)}
        className="p-1 px-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-none outline-none rounded-md"
      >
        <option value="">Default</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>

    <div className="filter-group">
      <label htmlFor="discount-filter" className="font-bold mr-2 text-gray-700 dark:text-gray-200">
        Discount:
      </label>
      <select
        id="discount-filter"
        value={discountFilter}
        onChange={(e) => setDiscountFilter(e.target.value)}
        className="p-1 px-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-none outline-none rounded-md"
      >
        <option value="">All</option>
        <option value="30">30% or more</option>
        <option value="40">40% or more</option>
        <option value="50">50% or more</option>
        <option value="60">60% or more</option>
        <option value="70">70% or more</option>
      </select>
    </div>
  </div>
</div>
  );
};


const loadingHtml = ()=> {
  return (
    <div role="status" className="flex justify-center items-center m-40">
      <div className="text-7xl text-center">
        <svg
          aria-hidden="true"
          className="w-full h-40 mb-5 text-gray-200 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="..." fill="currentColor" />
          <path d="..." fill="currentFill" />
        </svg>
        <p className="text-lg font-bold text-gray-600">
          Please wait while we load the products...
        </p>
      </div>
    </div>
  );
};


  return (
    <div>
      <Helmet>
        <title>New E-com - Fashion, Electronics, and Jewelry</title>
        <meta
          name="description"
          content="Shop the best products online at New E-com. Explore our collection of men's and women's clothing, electronics, and fine jewelry. Fast shipping and great deals."
        />
      </Helmet>


      <br />
      <PosterHome />
      <br />
      <Categroies />
      <br />

      {isLoading ? (
       <>{loadingHtml()}</>
      ) : (
        <div className="product-container w-10/12 gap-2 m-auto flex flex-wrap">
          {filteredProducts.length > 0 && (
            <div className="w-full">
              <h1 className="text-2xl font-semibold uppercase mb-2">
                <span className="text-red-600 text-3xl font-bold">|</span> best
                products
              </h1>
              <br />
             {categoryHtml()}
            </div>
          )}

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
           <Noproductsfound />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;




const Noproductsfound = ()=>{
  return(
     <div className="text-center w-full aspect-[4/1] flex flex-col items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Nzdxowtfgybm1JAcF3A62JbtcUY0KbE0GMyXaPJx6sSZPenK-_JWEOoYHivaCDtfJQ&usqp=CAU"
                alt="No products found"
              />
            </div>
  )
}