
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filladdress from './Filladdress';
import Paymentsummary from '../Paymentsummary';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import AddressListCart from './AddressListCart';

const SelectDeliveryAddress = ({onAddAddress, handleRemoveAddress}) => {
  const dispatch = useDispatch();

 const [checkedAddress, setCheckedAddress] = useState(null);
 const [newAddress, setNewAddress] = useState({ fullName: '', addressLine1: '', addressLine2: '', city: '', state: '', postalCode: '', phoneNumber: '', addressType: '' });
 const [showForm, setShowForm] = useState(false);
 

useEffect(() => {
  localStorage.setItem('checkedAddress', JSON.stringify(checkedAddress));
}, [checkedAddress]);


  const {addressList} = useSelector(state => state.addressListSlice);

  return (
  
    <div className="container w-full mx-auto p-4 SelectDeliveryAddress">
<div className='flex items-center justify-between' >
      <h1 className="text-2xl font-bold mb-4">Select Delivery Address</h1>
      <button onClick={() => setShowForm(!showForm)} className='border py-1 px-2 mb-2 capitalize float-end'>Add new address</button>
      </div>

      {showForm && (
        <div className="address-form absolute top-0 left-0 w-full h-screen overflow-hidden  bg-[#00000077] backdrop-blur-0 shadow p-4 mb-5">
        <Filladdress onAddAddress={onAddAddress} setShowForm={setShowForm} ></Filladdress>
       </div>
      )}
{addressList.map((element , index) => {

if(index === 0) {
  return (
    <>
  <h1 className=' uppercase text-[#80838e] text-xs font-bold mb-2'> Default Address</h1>

    <AddressListCart 
      key={index} 
      element={element} 
      checkedAddress={checkedAddress} 
      index={index} 
      setCheckedAddress={setCheckedAddress} 
    />
    </>
  )
}else{
  return (
    <>
    <h1 className=' uppercase text-[#80838e] text-xs font-bold mb-2'>Other Address</h1>
      <AddressListCart 
        key={index} 
        element={element} 
        checkedAddress={checkedAddress} 
        index={index} 
        setCheckedAddress={setCheckedAddress} 
      />
      </>
  )
}

  
})}
<div hidden={true}>  <Paymentsummary checkedAddress={checkedAddress}  ></Paymentsummary>
</div> 
    </div>
     

  );
};

// onChange={(e)=> console.log(e.target.attributes[3].value = true)}

export default SelectDeliveryAddress;



