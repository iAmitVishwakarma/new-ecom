import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectPaymentModes from './SelectPaymentModes';
import Recommended from './Payment-modes/Recommended';
import Cashondelivery from './Payment-modes/Cashondelivery';
import ViaUpi from './Payment-modes/ViaUpi';
import CreditDebitCard from './Payment-modes/CreditDebitCard';
import Payletter from './Payment-modes/Payletter';
import Wallets from './Payment-modes/Wallets';
import Emi from './Payment-modes/Emi';
import NetBanking from './Payment-modes/NetBanking';

///
// import Recommended from './Payment-modes/Recommended';
// import Cashondelivery from './Payment-modes/Cashondelivery';
// import ViaUpi from './Payment-modes/ViaUpi';
// import CreditDebitCard from './Payment-modes/CreditDebitCard';
// import Payletter from './Payment-modes/Payletter';
// import Wallets from './Payment-modes/Wallets';
// import Emi from './Payment-modes/Emi';
// import NetBanking from './Payment-modes/NetBanking';

// 


const PaymentMode = () => {

  const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
  const handlePaymentModeChange = (paymentMode ,event ) => {
    setSelectedPaymentMode(paymentMode)  };


  return (
   
<div className="">
  <h2 className="text-xl font-semibold mb-4">
    Choose Payment Mode
  </h2>
  <div className="flex w-full mx-auto bg-white dark:bg-gray-800  rounded-lg shadow-md">
  <div className="w-2/5 border-r bg-gray-300 dark:bg-gray-800">
    <SelectPaymentModes handlePaymentModeChange={handlePaymentModeChange}  selectedPaymentMode={selectedPaymentMode} />
  </div>
  <div className="w-3/6  mx-auto ">

 {selectedPaymentMode ? (
  <>
    {selectedPaymentMode === 'Recommended' && <Recommended />}
    {selectedPaymentMode === 'CashOnDelivery' && <div> <h1 className='text-lg font-bold mb-4' >Cash On Delivery</h1> <Cashondelivery  PaymentMode={selectedPaymentMode} /> </div>}
    {selectedPaymentMode === 'UPI' && <div> <h1 className='text-lg font-bold mb-4' >Pay using UPI</h1> <ViaUpi   PaymentMode={selectedPaymentMode} /> </div>}

    {selectedPaymentMode === 'creditDebitCard' && <div> <h1 className='text-lg font-bold mb-4' >Credit /Debit Card</h1> <CreditDebitCard   PaymentMode={selectedPaymentMode} /> </div>}

    {selectedPaymentMode === 'PayLater' && <div> <h1 className='text-lg font-bold mb-4' >Pay Later</h1> <Payletter  PaymentMode={selectedPaymentMode}    /> </div>}
    {selectedPaymentMode === 'Wallets' && <div> <h1 className='text-lg font-bold mb-4' >Wallets</h1> <Wallets    PaymentMode={selectedPaymentMode}/> </div>}
    {selectedPaymentMode === 'EMI' && <div> <h1 className='text-lg font-bold mb-4' >EMI</h1> <Emi /> </div>}
    {selectedPaymentMode === 'NetBanking' && <div> <h1 className='text-lg font-bold mb-4' >Net Banking</h1> <NetBanking    PaymentMode={selectedPaymentMode}/> </div>}
  </>
) : (
  <Recommended />
)}
  </div>



  </div>
</div>
  )
}

export default PaymentMode
