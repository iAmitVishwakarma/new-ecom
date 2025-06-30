import React from 'react'
import { useSelector } from 'react-redux';
import BagPage from '../Cart/Bag/BagPage';
import Paymentsummary from '../Cart/Paymentsummary';
import EmptyCart from '../Cart/EmptyCart';


function BagCart() {
    const {addToCart} = useSelector(state => state.addCart);
  const { products } = useSelector((state) => state.productDatas);
  let items = products.filter((item) => addToCart.includes(item.id))

if (addToCart.length === 0) {
  return <EmptyCart></EmptyCart>
}


if (items.length > 0 ) {
  return (
    <div className="flex w-3/4 mx-auto mt-8 mb-1 bg-white p-4 rounded shadow-md">
   <div className="w-2/3 pr-4 border-r border-gray-300">
     <BagPage items={items}  ></BagPage>
     </div>
  <Paymentsummary></Paymentsummary>
</div>
  )
}
}

export default BagCart
