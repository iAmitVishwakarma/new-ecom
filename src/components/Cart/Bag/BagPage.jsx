import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeaddToCart, setaddToCart } from '../../../store/Action/AddCart';

function BagPage({items  }) {

  const dispatch = useDispatch();
  const {addToCart} = useSelector(state => state.addCart);
 
  


  
  return (
     items.map((item) => {
      const  toggleaddToCart = ()=>{
        if (addToCart.includes(item.id)) {
            dispatch(removeaddToCart(item.id));
        }}
     
      return(
    <div  key={item.id} >
    <div key={item.id} className="bag-item-container mb-4 p-4 relative bg-white border border-gray-300 rounded shadow-md">
      <div  className="item-left-part absolute h-36 w-36">
        <img className="w-full h-full object-contain object-center" src={item.image} />
      </div>
      <div className="item-right-part pl-12 relative min-h-36 ml-36 mb-4">
        <div className="item-name text-sm">{item.title}</div>
        <div className="price-container">
          <span className="current-price text-sm">Rs {item.price}</span>
          <span className="original-price text-sm">Rs {item.originalPrice}</span>
          <span className="discount-percentage text-sm">({item.discountPrice}% OFF)</span>
        </div>
        <div className="return-period flex items-center text-sm pt-2">
          <span className="return-period-days font-bold mr-2">10 days</span> return available
        </div>
        <div className="delivery-details text-sm mt-1 mb-2">
          Delivery by
          <span className="delivery-details-days text-green-600">15 Sept</span>
        </div>
      </div>
      <div onClick={toggleaddToCart } className="remove-from-cart absolute top-2 right-4 text-lg cursor-pointer">X</div>
    </div>

    </div>)
    })
  )

}

export default BagPage
