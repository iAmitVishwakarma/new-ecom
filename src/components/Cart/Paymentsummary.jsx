import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectDeliveryAddress from './Address/SelectDeliveryAddress';
import { faL } from '@fortawesome/free-solid-svg-icons/faL';

const Paymentsummary = () => {
    const {addToCart} = useSelector(state => state.addCart);
    const { products } = useSelector((state) => state.productDatas);
    const {addressList} = useSelector(state => state.addressListSlice);

// console.log(addressList === null);
 const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);

    let totalMRP = 0;
    let totalDiscount = 0;
    const totalItem = addToCart.length;
    const convenienceFee = 99;
   
    let items = products.filter((item) => addToCart.includes(item.id))
    totalMRP = items.reduce((acc, item) => acc + parseFloat(item.originalPrice), 0)
    totalDiscount = items.reduce((acc, item) => acc + parseFloat(item.discountPrice), 0);
    const finalPayment  =  totalMRP - totalDiscount + convenienceFee - couponDiscount;
    

    const handleApplyCoupon = (e) => {
      if (e.target.classList.contains('CouponCode')){
          setCouponCode(e.target.innerText)
        }
          if (e.target.classList.contains('apply')) { 
      if (couponCode === 'SALE50') {
      setCouponDiscount(50);
    } else {
      alert('Invalid coupon code');
    }
  }
  };


  return (
    <div className="w-1/3 pl-4">
    <div className="Coupons">
        <h1 className="text-lg font-bold">COUPONS</h1>
        <div className="cuponsDetails flex justify-between items-center">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="cuponsText font-bold text-sm dark:text-gray-800 mx-4 p-2 border rounded"
          />
          <button
            onClick={handleApplyCoupon}
            className="apply button-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            APPLY
          </button>
        </div>
<div className=' grid grid-flow-col-dense items-start justify-between gap-2 mt-2'>
  <p className='CouponCode border-dashed border-2 px-1 text-[#EC4899] font-bold ' onClick={handleApplyCoupon}>SALE50</p>
<p className='text-sm font-thin capitalize'>save 300
Rs- 300 off on minimum purchase of Rs. 1299.
Expires on: 30th November 2025 11:59 PM</p>

</div>


        </div>
    <br />
    <hr />
    <br />
    <div className="price-header text-sm font-bold mb-4">PRICE DETAILS ({totalItem} Items)</div>
    <div className="price-item mb-2">
      <span className="price-item-tag text-sm">Total MRP</span>
      <span className="price-item-value text-sm">₹${totalMRP.toFixed(2)}</span>
    </div>
    <div className="price-item mb-2">
      <span className="price-item-tag text-sm">Discount on MRP</span>
      <span className="price-item-value text-sm text-green-600">₹${totalDiscount.toFixed(2)}</span>
    </div>
    <div className="price-item mb-2">
      <span className="price-item-tag text-sm">Convenience Fee</span>
      <span className="price-item-value text-sm">₹${convenienceFee}</span>
    </div>
    <div className="price-item mb-2" id="Coupon" style={{display : couponDiscount > 0 ? 'block' : 'none'}} >
      <span className="price-item-tag text-sm">Coupon</span>
      <span className="price-item-value text-sm text-green-600">-₹${couponDiscount.toFixed(2)}</span>
    </div>
    <hr />
    <div className="price-footer pt-4 border-t border-gray-300">
      <span className="price-item-tag text-sm font-bold">Total Amount</span>
      <span className="price-item-value text-sm font-bold">₹${finalPayment.toFixed(2)}</span>
    </div>
 
   



 { location.pathname == '/cart'   && <Link to="/cart/address" >
  <button onClick={(e)=>console.log(e)} className="btn-place-order w-full uppercase bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4" >
  Place Order
  </button>
</Link> }
{location.pathname == '/cart/address' &&     <Link   to="/cart/payment" >
 { addressList.length > 0 && <button className="btn-place-order w-full uppercase bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4"  >
   Continue
   </button>}
</Link>}


       </div>
    
  )
}

export default Paymentsummary

