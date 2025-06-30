import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { placeOrder, clearOrders } from "../../../../store/Reducers/OrderSlice";
import { clearCart } from "../../../../store/Action/AddCart";
import OrderPlaced from "../../OrderPlaced";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cashondelivery = ({ PaymentMode }) => {
  // console.log(PaymentMode);

  const captchInputfiled = useRef(null);

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  );
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dispatch = useDispatch();
  const { addToCart } = useSelector((state) => state.addCart);
  
  const { placeOrderData } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.addressListSlice);
  const checkedAddress = JSON.parse(localStorage.getItem("checkedAddress"));

  const getAddress = addressList.filter(
    (elem, index) => index === checkedAddress
  );

  const { products } = useSelector((state) => state.productDatas);
  let items = products.filter((item) => addToCart.includes(item.id))

const  totalMRP = items.reduce((acc, item) => acc + parseFloat(item.originalPrice), 0)
 const    totalDiscount = items.reduce((acc, item) => acc + parseFloat(item.discountPrice), 0);

  useEffect(() => {
    if (orderPlaced) {
      const orderData = {
        orderId: Date.now(),
        paymentMode: PaymentMode,
        items: addToCart,
        totalAmount: totalMRP,
        totalDiscount : totalDiscount,
        totalItems: addToCart.length,
        userId: user?.name,
        billerFullName: getAddress[0].fullName,
        address:
          getAddress[0].addressLine1 +
          " " +
          getAddress[0].addressLine2 +
          " " +
          getAddress[0].city +
          "," +
          " " +
          getAddress[0].state +
          "- " +
          getAddress[0].postalCode,
        phone: getAddress[0].phoneNumber,
        AddressType: getAddress[0].addressType,
        orderPlaced: true,
        // after placing order, we can set the delivery date 2 days later
        deliveryDate: new Date().setDate(new Date().getDate() + 2),
        deliveryTime: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      dispatch(placeOrder(orderData));

      setTimeout(() => {
        dispatch(clearCart());
        setOrderPlaced(false);
      }, 5000);
    }
  }, [orderPlaced]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (captchInputfiled.current.value == "" ){ 
        alert("please enter captcha code")
        return 
      }else if (captchInputfiled.current.value != randomNum  ){
       alert("please enter  correct captcha code")
      return;
    }else if(randomNum == captchInputfiled.current.value ){
    setOrderPlaced(true);
    }


  };

  const getRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
  };

  return (
    <>
      <form onSubmit={handlePlaceOrder}>
        <div className="border p-4 mb-4">
          <div className="w-3/6 flex justify-around  items-center mb-4  m-auto ">
            <s
              className="text-2xl font-bold border px-4 filter sepia-[10] saturate-[5] drop-shadow-md text-black"
              style={{
                background:
                  "linear-gradient(red,  white, red, white,gray, white ,red)",
              }}
            >
              {randomNum}
            </s>
            <FontAwesomeIcon
              onClick={getRandomNumber}
              icon="sync-alt"
              className="text-pink-500 cursor-pointer"
            />
          </div>
          <input
            ref={captchInputfiled}
            className="captchInputfiled w-11/12 border dark:text-gray-800 text-sm pl-2 py-2 rounded mb-1"
            placeholder="Enter code shown in above image•"
            type="number"
            maxLength="4"
            minLength="4"
          />
          <p className="text-gray-500 text-xs  ml-1">
            You can pay via Cash/ UPI on delivery
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded mb-4"
        >
          PLACE ORDER
        </button>
      </form>

      {orderPlaced == true && (
        <OrderPlaced randomNum={randomNum} PaymentMode={PaymentMode} />
      )}
    </>
  );
};

export default Cashondelivery;
