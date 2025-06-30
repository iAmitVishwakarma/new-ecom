import React, { useState, useEffect, useRef, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import your page components
import Logo from "../../src/assets/logo.webp";
const Home = React.lazy(() => import("../screen/Home"));
const ProductPage = React.lazy(() => import("../screen/ProductPage"));
const WishlistSec = React.lazy(() => import("../screen/WishlistSec"));
const Cart = React.lazy(() => import("../screen/Cart"));
const Profile = React.lazy(() => import("../screen/Profile"));
import BagCart from "../components/Cart/BagCart";
import PaymentCart from "../components/Cart/Payment/PaymentCart";
import AddressCart from "../components/Cart/Address/AddressCart";
import Login from "../screen/auth/Login";
import Signup from "../screen/auth/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "../components/Footer";
// import { setSearchTerm } from '../';
import { setSearchTerm } from "../store/Reducers/SearchSlice";

const Navlinks = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { addToCart } = useSelector((state) => state.addCart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { searchTerm } = useSelector((state) => state.search);
const location = useLocation()
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="header flex justify-between items-center px-10 py-4 shadow-lg sticky top-0 bg-white z-50">
        <div className="w-10/12 mx-auto flex justify-between items-center">
          {" "}
          <h1>hello</h1>
          <div className="logo">
            <Link to="/">
              <img className="h-12" src={Logo} alt="logo" />
            </Link>
          </div>
          {isAuthenticated ? (
            <> { location.pathname.includes('/cart') 
              <div className="search-bar flex items-center bg-gray-100 rounded-md px-4 py-2 w-1/3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="bg-transparent outline-none ml-2 w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
}
              <div className="nav-icons flex items-center space-x-8">
                <Link to="/profile" className="decoration-none">
                  <div className="profile-icon relative  flex flex-col items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <p className="text-sm font-bold">Profile</p>
                  </div>
                </Link>

                <Link to="/wishlist" className="decoration-none">
                  <div className="wishlist-icon relative  flex flex-col items-center">
                    <FontAwesomeIcon icon={faHeart} />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                    <p className="text-sm font-bold">Wishlist</p>
                  </div>
                </Link>

                <Link to="/cart" className="decoration-none">
                  <div className="bag-icon relative  flex flex-col items-center">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    {addToCart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {addToCart.length}
                      </span>
                    )}
                    <p className="text-sm font-bold">Bag</p>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsProfileOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
        
      </header>
      <main className="flex-grow">
        <Suspense
          fallback={<div className="text-center p-10">Loading page...</div>}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<Home />} />
            <Route path="/products/:name" element={<ProductPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/wishlist" element={<WishlistSec />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="" element={<Profile activeTab={"profile"} />} />
                <Route
                  path="addresses"
                  element={<Profile activeTab={"addresses"} />}
                />
                <Route
                  path="orders"
                  element={<Profile activeTab={"orders"} />}
                />
              </Route>

              {/* Static Cart Routing */}
              <Route path="/cart" element={<Cart />}>
                <Route index element={<BagCart />} />
                <Route path="address" element={<AddressCart />} />
                <Route path="payment" element={<PaymentCart />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer /> {/* Add Footer Here */}
    </div>
  );
};

export default Navlinks;
