import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Cashondelivery from './Cashondelivery';

const Recommended = () => {

  const [selectedPayment, setSelectedPayment] = useState('cash'); // Default to cash on delivery

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };



  return (
    <>
     <h3 className="text-lg font-semibold mb-4">
         Recommended Payment Options
     </h3>
    <div className="mb-4">
        <div className="ml-2 flex justify-between w-full items-center" >
           <div className='flex items-center'>
               <input  className="form-radio text-pink-500 " name="payment" type="radio"  value="CashonDelivery" onChange={handlePaymentChange} />
                 <span className="ml-2">   Cash on Delivery (Cash/UPI)  </span>
                  </div>
                   <FontAwesomeIcon icon="money-bill-wave"  className=" mr-2 text-xl" />
        </div> 
        <div>
           {selectedPayment === "CashonDelivery" && <div className='my-1 mt-4'> <Cashondelivery PaymentMode={selectedPayment} /> </div>}
        </div>
    </div>

    <div className="mb-4">
        <div className="ml-2 flex justify-between w-full items-center" >
           <div className='flex items-center'>
             <input className="form-radio text-pink-500" name="payment" type="radio"  value="phonepe"  onChange={handlePaymentChange}/>
             <span className="ml-2"> PhonePe </span>
             </div>
             <FontAwesomeIcon icon="mobile-alt" className=" mr-2" />
         </div>
      <div>
       {selectedPayment  === "phonepe" && <div className='mt-4'><button className="w-full bg-pink-500 text-white py-2 rounded mb-4 uppercase">
        <div className=' capitalize text-black'>
    !!!Sorry 😞 but ,Please Selct <b>Cash on delvery</b> Mode!!!
  </div>
    </button> </div> }
      </div>
</div>
    </>
  )
}

export default Recommended
