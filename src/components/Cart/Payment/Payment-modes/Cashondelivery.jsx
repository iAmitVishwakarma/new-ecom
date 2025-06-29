import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import OrderPlaced from '../../OrderPlaced';


const Cashondelivery = ({PaymentMode , }) => {
  // console.log(PaymentMode);

const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

const [orderPlaced, setOrderPlaced] = useState(false);


const OrderPlace = (e)=>{
 e.preventDefault();
 {e.target.form[0].value ==="" && alert("please enter captcha code")}
 {e.target.form[0].value != randomNum && alert("please enter  correct captcha code")}

 setOrderPlaced(true) 
}


  return (
  <>
  <form onSubmit={OrderPlace} >
   <div className="border p-4 mb-4">
      <div className="w-3/6 flex justify-around  items-center mb-4  m-auto ">
        <s className="text-2xl font-bold border px-4 filter sepia-[10] saturate-[5] drop-shadow-md text-black" style={{background: 'linear-gradient(red,  white, red, white,gray, white ,red)'}}>
         {randomNum}
        </s>
        <FontAwesomeIcon onClick={()=>getRandomNumber() }  icon="sync-alt" className="text-pink-500 cursor-pointer" />
      </div>
   <input className="w-11/12 border text-sm pl-2 py-2 rounded mb-1" placeholder='Enter code shown in above image•' type="number" maxLength="4" minLength="4"  />
      <p className="text-gray-500 text-xs  ml-1">
        You can pay via Cash/ UPI on delivery
      </p>
    </div>
    <button type='submit' onClick={OrderPlace} className="w-full bg-pink-500 text-white py-2 rounded mb-4">
      PLACE ORDER
    </button>
    </form>


{orderPlaced == true && <OrderPlaced randomNum={randomNum}  PaymentMode={PaymentMode} />} 

  </>
  )
}




export default Cashondelivery
