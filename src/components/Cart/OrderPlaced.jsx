import React from 'react'
import { useSelector } from 'react-redux';

const OrderPlaced = ({randomNum, PaymentMode}) => {
  const {addressList} = useSelector(state => state.addressListSlice);
const checkedAddress = JSON.parse(localStorage.getItem('checkedAddress'))

const getAddress = addressList.filter((elem , index)  => index === checkedAddress)

// console.log(getAddress);
  return (
   <div className='w-full h-screen absolute left-0 top-0 bg-[#0000006c]  flex items-center  justify-center'>

<section className="bg-white p-5 rounded-md">
  <div className="mx-auto max-w-2xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-2">Thanks for your order!</h2>
    <p className="text-gray-500 mb-6 md:mb-8">Your order <a href="#" className="font-medium text-gray-900 hover:underline">#{randomNum}</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
    <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
      <dl className="sm:flex items-center justify-between gap-4">
        <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Date</dt>
        <dd className="font-medium text-gray-900 sm:text-end">{new Date().toLocaleDateString()}</dd>
      </dl>
      <dl className="sm:flex items-center justify-between gap-4">
        <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Payment Method</dt>
        <dd className="font-medium text-gray-900 sm:text-end">{(PaymentMode === 'CashonDelivery'  && 'Cash on Delivery' )}</dd>
      </dl>
      <dl className="sm:flex items-center justify-between gap-4">
        <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Name</dt>
        <dd className="font-medium text-gray-900 sm:text-end">{getAddress[0].fullName}</dd>
      </dl>
      <dl className="sm:flex items-center justify-between gap-4">
      
        <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Address</dt>
        <dd className="font-medium text-gray-900 sm:text-end">{getAddress[0].addressLine1} {getAddress[0].addressLine2}, {getAddress[0].city}, {getAddress[0].state} - {getAddress[0].postalCode}</dd> 
        
      </dl>
      <dl className="sm:flex items-center justify-between gap-4">
      
      <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Address Type</dt>
      <dd className="font-medium text-gray-900 sm:text-end">{getAddress[0].addressType}</dd> 
    </dl>
      <dl className="sm:flex items-center justify-between gap-4">
        <dt className="font-normal mb-1 sm:mb-0 text-gray-500">Phone</dt>
        <dd className="font-medium text-gray-900 sm:text-end">{getAddress[0].phoneNumber}</dd>
      </dl>
    </div>
    <div className="flex items-center space-x-4">
      <a href="#" className="text-white bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Track your order</a>
      <a href="#" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Return to shopping</a>
    </div>
  </div>
</section>

   </div>
  )
}

export default OrderPlaced
