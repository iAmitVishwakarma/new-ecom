import React, { useEffect, useState } from 'react';
import Filladdress from './Filladdress';
import SelectDeliveryAddress from './SelectDeliveryAddress';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress ,removeAddress } from '../../../store/Reducers/AddressLists';

const AddressForm = () => {
  const dispatch = useDispatch();
  const {addressList} = useSelector(state => state.addressListSlice);



  useEffect(() => {
    // This effect will run whenever addressList changes
    localStorage.setItem('addressList', JSON.stringify(addressList));
  }, [addressList]);

  
  const handleAddAddress = (newAddress) => {
    dispatch(addAddress(newAddress));
  }


  
  return (
    <div>
      {addressList.length > 0 ? (
        <SelectDeliveryAddress  />
      ) : (
        <Filladdress onAddAddress={handleAddAddress} /> 
      
      )}
    </div>
  );
};

export default AddressForm;