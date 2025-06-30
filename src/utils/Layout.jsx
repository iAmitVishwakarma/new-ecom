import React, { useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faUser,
  faSearch,
 
} from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBars ,FaTimes , FaRegHeart } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
// Assets & Components
import Logo from "../../src/assets/logo.webp";
import Footer from "../components/Footer";
import BagCart from "../components/Cart/BagCart";
import PaymentCart from "../components/Cart/Payment/PaymentCart";
import AddressCart from "../components/Cart/Address/AddressCart";
import Login from "../screen/auth/Login";
import Signup from "../screen/auth/Signup";
import ProtectedRoute from "./ProtectedRoute";
import { setSearchTerm } from "../store/Reducers/SearchSlice";

// Lazy-loaded Screens
const Home = React.lazy(() => import("../screen/Home"));
const ProductPage = React.lazy(() => import("../screen/ProductPage"));
const WishlistSec = React.lazy(() => import("../screen/WishlistSec"));
const Cart = React.lazy(() => import("../screen/Cart"));
const Profile = React.lazy(() => import("../screen/Profile"));



import { toggleTheme } from "../store/Reducers/ThemeSlice";
import { logout } from "../store/Reducers/AuthSlice";




const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { wishlist } = useSelector((state) => state.wishlist);
  const { addToCart } = useSelector((state) => state.addCart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { searchTerm } = useSelector((state) => state.search);

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const location = useLocation();


  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(asyncgetProduct(searchTerm));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="shadow-md py-4 px-4 sm:px-10 bg-white dark:bg-gray-800 font-[sans-serif] min-h-[70px] relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
     
          <Link to="/" className="text-pink-500 text-2xl font-bold">
           <img src={Logo} alt="e-com logo" className="h-12"/>
          </Link>

          <div className="flex items-center gap-4 lg:hidden">
            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className=" transition-all duration-200 ease-in-out" >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
    

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 absolute z-10 top-16 right-0 transition-all duration-100 ease-out bg-purple-50 dark:bg-gray-600 w-xl p-5  shadow-xl">
            <nav className="flex flex-col gap-4 justify-center items-center px-5">
              
            <button onClick={() => dispatch(toggleTheme())}>
              {theme === "light" ? (
                <MdOutlineDarkMode className="text-3xl" />
              ) : (
                <MdOutlineLightMode className="text-3xl" />
              )}
          
            </button>
            <h1 className=" capitalize font-semibold -mt-3 mb-2">theme</h1>
            <Link to="/wishlist" className="relative">
              <FaRegHeart className="text-3xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              
            </Link>
            <h1 className=" capitalize font-semibold -mt-3 mb-2">wishlists</h1>
            <Link to="/cart" className="relative">
              <BsBag className="text-3xl" />
              {addToCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {addToCart.length}
                </span>
              )}
            </Link>
            <h1 className=" capitalize font-semibold -mt-3 mb-2">Cart</h1>
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="block px-4 py-2 text-lg bg-pink-500 hover:text-pink-900 text-gray-100 font-semibold rounded-lg transition-colors duration-100 ease-in-out hover:bg-amber-500/50 capitalize"
            >
              {isAuthenticated ? "Profile" : "Login"}
            </Link>
         
            </nav>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:w-10/12  lg:items-center lg:justify-end lg:mt-0">
 {location.pathname.includes("/cart") || location.pathname.includes("/wishlist") || location.pathname.includes("/products") || isAuthenticated && (
          <form
            onSubmit={handleSearch}
            className="w-full lg:w-1/2 mx-auto mt-4 lg:mt-0"
          >
            <div className="relative">
              <input
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                value={searchTerm}
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <IoIosSearch />
              </button>
            </div>
          </form>
 )}

          <div className="flex items-center  gap-7 ml-4">
           
            <button onClick={() => dispatch(toggleTheme())} className="flex flex-col items-center text-xs justify-center">
              {theme === "light" ? (
                <MdOutlineDarkMode className="text-2xl" />
              ) : (
                <MdOutlineLightMode className="text-2xl" />
              )}
                <h1 className=" capitalize font-semibold mt-1">theme</h1>
            </button>
           
            {isAuthenticated &&(<>
            <Link to="/wishlist" className="relative flex flex-col items-center text-xs justify-center">
              <FaRegHeart className="text-2xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
                <h1 className=" capitalize font-semibold mt-1 ">wishlists</h1>
            </Link>
            <Link to="/cart" className="relative flex flex-col items-center text-xs justify-center">
              <BsBag className="text-2xl" />
              {addToCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {addToCart.length}
                </span>
              )}
                <h1 className=" capitalize font-semibold mt-1">cart</h1>
            </Link>
            </>
            )}
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="block px-4 py-2 text-md bg-pink-500 hover:text-pink-900 text-gray-100 font-semibold rounded-lg transition-colors duration-100 ease-in-out hover:bg-amber-500/50 capitalize"
            >
              {isAuthenticated ? "Profile" : "Login"}
            </Link>
          </div>
        </div>
            </div>
      </header>

       <main className="flex-grow">
        <Suspense fallback={<div className="text-center p-10">Loading page...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:name" element={<ProductPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/wishlist" element={<WishlistSec />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="" element={<Profile activeTab="profile" />} />
                <Route path="addresses" element={<Profile activeTab="addresses" />} />
                <Route path="orders" element={<Profile activeTab="orders" />} />
              </Route>
              <Route path="/cart" element={<Cart />}>
                <Route index element={<BagCart />} />
                <Route path="address" element={<AddressCart />} />
                <Route path="payment" element={<PaymentCart />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;