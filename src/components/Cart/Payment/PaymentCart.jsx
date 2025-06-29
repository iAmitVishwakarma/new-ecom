import React from 'react'
import PaymentMode from './PaymentMode'
import Paymentsummary from '../Paymentsummary'


function PaymentCart() {
 return (
  <div className="flex w-3/4 mx-auto mt-8 mb-1 bg-white p-4 rounded shadow-md">
  <div className="w-2/3 pr-4 border-r border-gray-300">
  <PaymentMode></PaymentMode>
    </div>
 <Paymentsummary></Paymentsummary>
</div>
 
 )
}

export default PaymentCart



