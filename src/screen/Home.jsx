// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';

// import PosterHome from '../components/home/PosterHome';
// import Categroies from '../components/home/categroies';
// import Product from '../components/home/Product';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Home() {
//   const filterBox = useRef(null);
  

//   const { products } = useSelector((state) => state.productDatas);

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [priceSort, setPriceSort] = useState('');
//   const [discountFilter, setDiscountFilter] = useState('');

//   useEffect(() => {
//     let productsToShow = [...products];

//     if (selectedCategory) {
//       productsToShow = productsToShow.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     if (discountFilter) {
//       productsToShow = productsToShow.filter(
//         (product) => product.discountPrice >= parseInt(discountFilter)
//       );
//     }

//     if (priceSort === 'low-to-high') {
//       productsToShow.sort((a, b) => a.price - b.price);
//     } else if (priceSort === 'high-to-low') {
//       productsToShow.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(productsToShow);
//   }, [products, selectedCategory, priceSort, discountFilter]);



// const handleFilterToggle = () => {
 
 
// if(filterBox.current.childNodes[1].classList.contains('opacity-0')) {
//   filterBox.current.childNodes[1].classList.remove('opacity-0');
//   filterBox.current.childNodes[1].classList.add('opacity-100');
// }else{
//    filterBox.current.childNodes[1].classList.add('opacity-0');
//   filterBox.current.childNodes[1].classList.remove('opacity-100');
// }

//   }


//   if (!products || products.length === 0) {
//     return (
//       <div role="status" className="flex justify-center items-center m-40">
//         <div className="text-7xl">
//           <svg
//             aria-hidden="true"
//             className="w-full h-40 mb-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//             viewBox="0 0 100 101"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//               fill="currentColor"
//             />
//             <path
//               d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//               fill="currentFill"
//             />
//           </svg>
//           <span className="sr-only">Loading...</span>
//           <p className="text-lg font-bold text-gray-600">
//             Please wait while we load the products...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <br />
//       <PosterHome />
//       <br />
//       <Categroies />
//       <br />

//       <div className="product-container w-10/12 gap-2 m-auto flex flex-wrap">
//         <h1 className="w-full text-2xl font-semibold uppercase mb-2">
//           <span className="text-red-600 text-3xl font-bold">|</span> best
//           products
//         </h1>

//          <div className='filterBox w-full   mx-auto h-12 px-2 pr-5 flex items-center justify-between pb-2  my-2 '
         
//          ref={filterBox}>

//           <p className='fiterHeading w-1/12 flex justify-center items-center p-2 text-xl font-semibold text-gray-600   bg-[#F230B2]/30 border rounded-full shadow-lg  ' 
//           onClick={handleFilterToggle}
//           ><FontAwesomeIcon icon="fa-solid fa-filter" /> filter</p>
       
//       <div className="filter-container bg-[#FF8F2C]/50 w-10/12 transition-all duration-200  opacity-0  op p-2 border rounded-full shadow-lg flex justify-around items-center ">
       
//        {/* Category Filter */}
//         <div className="filter-group">
//           <label htmlFor="category-filter" className="font-bold mr-2">
//             Category:
//           </label>
//           <select
//             id="category-filter"
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             value={selectedCategory}
//            className="p-1 px-2 border-none outline-none rounded-md"
//           >
//             <option value="">All</option>
//             <option value="men's clothing">Men's Clothing</option>
//             <option value="jewelery">Jewelery</option>
//             <option value="electronics">Electronics</option>
//             <option value="women's clothing">Women's Clothing</option>
//           </select>
//         </div>

//         {/* Price Sort */}
       
//         <div className="filter-group">

//           <label htmlFor="price-sort" className="font-bold mr-2">
//             Sort by Price:
//           </label>
//           <select
//             id="price-sort"
//             onChange={(e) => setPriceSort(e.target.value)}
//             value={priceSort}
//             className="p-1 px-2 border-none outline-none rounded-md"
           

//           >
//             <option value="">Default</option>
//             <option value="low-to-high">Low to High</option>
//             <option value="high-to-low">High to Low</option>
//           </select>
//         </div>

//         {/* Discount Filter */}
//         <div className="filter-group">
//           <label htmlFor="discount-filter" className="font-bold mr-2">
//             Discount:
//           </label>
//           <select
//             id="discount-filter"
//             onChange={(e) => setDiscountFilter(e.target.value)}
//             value={discountFilter}
//          className="p-1 px-2 border-none outline-none rounded-md"
//           >
//             <option value="">All</option>
//             <option value="30">30% or more</option>
//             <option value="40">40% or more</option>
//             <option value="50">50% or more</option>
//             <option value="60">60% or more</option>
//             <option value="70">70% or more</option>
//           </select>
//         </div>
//       </div>

//  </div>
 
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product key={index} product={product} />
//           ))
//         ) : (
//           <div className="text-center w-full">
//             <h1>No products found.</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;







// Home.js
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetProduct } from '../store/Action/getProduct';

import PosterHome from '../components/home/PosterHome';
// Corrected the import path to match the filename's capitalization
import Categroies from '../components/home/Categroies'; 
import Product from '../components/home/Product';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Home() {
  const filterBox = useRef(null);
  const dispatch =  useDispatch()
  const {products} = useSelector((state)=> state.productDatas)
  const[productsData, setProductsData] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceSort, setPriceSort] = useState('');
  const [discountFilter, setDiscountFilter] = useState('');
   const { searchTerm } = useSelector((state) => state.search);

  useEffect(()=>{
    dispatch(asyncgetProduct())
  },[])

  


  useEffect(() => {
    let productsToShow = [...products];

   // Search filter
    if (searchTerm) {
      productsToShow = productsToShow.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


// Category filter
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

    if (priceSort === 'low-to-high') {
      productsToShow.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high-to-low') {
      productsToShow.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(productsToShow);
  }, [products, selectedCategory, priceSort, discountFilter , searchTerm]);



const handleFilterToggle = () => {
 
 
if(filterBox.current.childNodes[1].classList.contains('opacity-0')) {
  filterBox.current.childNodes[1].classList.remove('opacity-0');
  filterBox.current.childNodes[1].classList.add('opacity-100');
}else{
   filterBox.current.childNodes[1].classList.add('opacity-0');
  filterBox.current.childNodes[1].classList.remove('opacity-100');
}

  }
  

useEffect(() => {
setProductsData(products)
}, [products])

  
if (products == false) { 
  return (
    <div role="status" className="flex justify-center items-center m-40">
      <div className="text-7xl">
        <svg
          aria-hidden="true"
          className="w-full h-40 mb-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only ">Loading...</span>
        <p className="text-lg font-bold text-gray-600">Please wait while we load the products...</p>
      </div>
    </div>
  );
}


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
      <PosterHome  />
      <br />



<Categroies></Categroies>
      <br />
      <div className="product-container w-10/12 gap-2 m-auto flex flex-wrap">
    { filteredProducts.length > 0 &&  <div className='w-full'>
      <h1 className='w-full text-2xl font-semibold uppercase mb-2'><span className="text-red-600 text-3xl font-bold">|</span> best products</h1>
<br />
<div className='filterBox w-full   mx-auto h-12 px-2 pr-5 flex items-center justify-between pb-2  my-2 '
         
         ref={filterBox}>

          <p className='fiterHeading w-1/12 flex justify-center items-center p-2 text-xl font-semibold text-gray-600   bg-[#F230B2]/30 border rounded-full shadow-lg  ' 
          onClick={handleFilterToggle}
          ><FontAwesomeIcon icon="fa-solid fa-filter" /> filter</p>
       
      <div className="filter-container bg-[#FF8F2C]/50 w-10/12 transition-all duration-200  opacity-0  op p-2 border rounded-full shadow-lg flex justify-around items-center ">
       
       {/* Category Filter */}
        <div className="filter-group">
          <label htmlFor="category-filter" className="font-bold mr-2">
            Category:
          </label>
          <select
            id="category-filter"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
           className="p-1 px-2 border-none outline-none rounded-md"
          >
            <option value="">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        {/* Price Sort */}
       
        <div className="filter-group">

          <label htmlFor="price-sort" className="font-bold mr-2">
            Sort by Price:
          </label>
          <select
            id="price-sort"
            onChange={(e) => setPriceSort(e.target.value)}
            value={priceSort}
            className="p-1 px-2 border-none outline-none rounded-md"
           

          >
            <option value="">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        {/* Discount Filter */}
        <div className="filter-group">
          <label htmlFor="discount-filter" className="font-bold mr-2">
            Discount:
          </label>
          <select
            id="discount-filter"
            onChange={(e) => setDiscountFilter(e.target.value)}
            value={discountFilter}
         className="p-1 px-2 border-none outline-none rounded-md"
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
      </div> }
{filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <div className="text-center w-full aspect-[4/1] flex flex-col items-center justify-center">
            {/* <h1>No products found.</h1> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Nzdxowtfgybm1JAcF3A62JbtcUY0KbE0GMyXaPJx6sSZPenK-_JWEOoYHivaCDtfJQ&usqp=CAU" alt="image of - No products found. " srcset="" />
          </div>
        )}
   
      </div>
    </div>
  );
}

export default Home;