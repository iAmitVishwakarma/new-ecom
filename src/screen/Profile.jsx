import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectDeliveryAddress from '../components/Cart/Address/SelectDeliveryAddress';

import {
  faUser,
  faMapMarkerAlt,
  faBox,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { removeOrder } from '../store/Reducers/OrderSlice';
import { logout } from '../store/Reducers/AuthSlice';



const Profile = () => {

  const location = useLocation();
 const dispatch = useDispatch();
 const navigate = useNavigate();
  const { addressList } = useSelector((state) => state.addressListSlice);
  const { orders } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.productDatas);
 
  // Function to find product by ID
  const getProductById = (id) => products.find(p => p.id === id);


  const renderContent = () => {
    switch (location.pathname) {
      case '/profile':
        return (
          <div>
             <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-2">
                <span className="font-semibold">Name:</span> {user?.name || 'Amit Vishwakarma'}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span> {user?.email || 'amit.vishwa@example.com'}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {user?.number  || '+91-9876543210'} 
              </p>
            </div>
          </div>
        );
      case '/profile/addresses':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Addresses</h2>
            <div className="bg-white p-6 rounded-lg shadow">
             {/* <AddressListCart /> */}
             <SelectDeliveryAddress />
            </div>
          </div>
        );
      case '/profile/orders':
        return (
           <div>
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
             <div className="space-y-6">
                {orders.length > 0 ? (
                  orders.map(order => {
                    const firstItem = getProductById(order.items[0]);
                    return (
                        <div key={order.orderId} className="bg-white p-4 rounded-lg shadow-md flex space-x-4">
                            <img src={firstItem?.image} alt={firstItem?.title} className="w-24 h-24 object-contain rounded-md" />
                            <div className="flex-grow">
                                <p className="font-bold text-lg">Order ID: {order.orderId}</p>
                                <p className="text-sm text-pink-900">Delivered to: {order.address}</p>
                                <p className="font-semibold text-gray-800 mt-1">Total: ₹{order.totalAmount.toFixed(2)}</p>
                                <p className="text-sm text-gray-500">{order.totalItems} items | Paid via <i>{order.paymentMode === 'CashonDelivery'  && 'Cash on Delivery' }</i></p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <p className="text-sm  mb-5">Status: -
                                <p className="text-xs ">Ordered on {new Date(order.orderId).toLocaleDateString()}</p>
                                  <p className="text-xs  text-blue-500">Delivery on {new Date(order.deliveryDate).toLocaleDateString()}</p>
                                  </p>
                                <button
                                    onClick={() => dispatch(removeOrder(order.orderId))}
                                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 text-sm"
                                >
                                    Mark as Delivered
                                </button>
                            </div>
                        </div>
                    )
                  })
                ) : (
                  <p>You have not placed any orders yet.</p>
                )}
             </div>
            </div>
        );
      default:
        return null;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
  <div className="wishlist-container w-10/12 mx-auto mt-8 mb-1 bg-white p-4 rounded shadow-md">
      <div className="flex">
        <aside className="w-1/4 pr-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <ul>
              <Link to="" 
                className={`flex items-center p-4 cursor-pointer rounded-lg mb-2 ${location.pathname === '/profile' ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'}`}
            
              >
                <FontAwesomeIcon icon={faUser} className="mr-3" /> Profile
              </Link>
               <Link to="addresses" 
                className={`flex items-center p-4 cursor-pointer rounded-lg mb-2 ${location.pathname === '/profile/addresses' ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'}`}
           
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" /> Addresses
              </Link>
              <Link to="orders"
                className={`flex items-center p-4 cursor-pointer rounded-lg mb-2 ${location.pathname === '/profile/orders' ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'}`}
               
              >
                <FontAwesomeIcon icon={faBox} className="mr-3" /> Orders
              </Link>
               <button
                className="flex items-center p-4 cursor-pointer text-red-500 hover:bg-gray-200 rounded-lg mt-4"
              onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" /> Logout
              </button>
            </ul>
          </div>
        </aside>
        <main className="w-3/4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Profile;
