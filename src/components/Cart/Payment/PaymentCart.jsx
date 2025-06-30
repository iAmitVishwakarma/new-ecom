import React from 'react'
import PaymentMode from './PaymentMode'
import Paymentsummary from '../Paymentsummary'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addressListSlice } from '../../../store/Reducers/AddressLists';


function PaymentCart() {
  const {addToCart} = useSelector(state => state.addCart);
  const {addressList} = useSelector(state => state.addressListSlice);
  const navigate =  useNavigate();  

 if (addToCart.length === 0) {
  return navigate("/cart")
}


if(addressList.length ===  0){
  alert("Please Add your dilvery Address")
  return navigate("/cart/address")
}
 return (
  <div className="flex w-3/4 mx-auto mt-8 mb-1 bg-white dark:bg-gray-800 p-4 rounded shadow-md">
  <div className="w-2/3 pr-4 border-r border-gray-300">
  <PaymentMode></PaymentMode>
    </div>
 <Paymentsummary></Paymentsummary>
</div>
 
 )
}

export default PaymentCart



