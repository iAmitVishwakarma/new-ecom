import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Filladdress = ({ onAddAddress , setShowForm }) => {
  const [addressType, setAddressType] = useState('');
  const [homeActive, setHomeActive] = useState(false);
  const [workActive, setWorkActive] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleAddressTypeChange = (event) => {
    setAddressType(event.target.value);
    if (event.target.id === 'home') {
      setHomeActive(true);
      setWorkActive(false);
    } else if (event.target.id === 'work') {
      setHomeActive(false);
      setWorkActive(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAddress = {
      fullName,
      phoneNumber,
      postalCode,
      addressLine1,
      addressLine2,
      city,
      state,
      addressType,
    };
    onAddAddress(newAddress);
    setShowForm(false) 
  };

  return (
    <div className="max-w-md flex items-center mx-auto p-4 border   backdrop-blur-lg shadow-sm bg-white/10 border-gray-300 border-dashed rounded-lg relative">
     
       <i onClick={()=>setShowForm(false) } class="ri-close-large-line absolute -top-2 -right-2 text-black bg-white rounded-full px-1 font-bold"></i>
      
      
      <form onSubmit={handleSubmit} className="flex  flex-col justify-center items-start">
        <div className="addressDetail">
        <label htmlFor='CONTACT DETAILS' className="block mb-2">CONTACT DETAILS:</label>
          <input
          name='CONTACT DETAILS'
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name*"
            required
            className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded"
          />
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Mobile Number*"
            required
            className="w-full p-2 text-sm text-gray-700 border mt-2 border-gray-300 rounded"
          />
          <br />
         <label htmlFor='addressLine1' className="block mb-2">ADDRESS:</label>
          <input
          name='address'
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Pin code*"
            required
            className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded"
          />
          <input
           name='address'
            type="text"
            id="addressLine1"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="Address (House NO, Building, Street, Area)*"
            required
            className="w-full mt-2 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
          />
          <br />
          <input
            type="text"
            id="addressLine2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Locality / Town•"
            className="w-full p-2 text-sm text-gray-700 border mt-2 border-gray-300 rounded"
          />

          <div className="flex justify-around gap-1 w-full">
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City / District *"
              required
              className="w-full p-2 text-sm text-gray-700 border mt-2 border-gray-300 rounded"
            />
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State *"
              required
              className="w-full p-2 text-sm text-gray-700 mt-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <br />
        <div className="optionBtn ">
          <label htmlFor='addressType' className="block my-3">SAVE ADDRESS AS:</label>
          <div className="flex justify-around gap-1 w-full">
            <input
            name='addressType'
              type="button"
              value="Home"
              id="home"
              onClick={handleAddressTypeChange}
              className={homeActive ? 'bg-red-500 text-white border border-gray-300 rounded py-2 px-4 font-semibold' : 'bg-white border border-gray-300 rounded py-2 px-4'}
 />
            <input
              name='addressType'
              type="button"
              value="Work"
              id="work"
              onClick={handleAddressTypeChange}
              className={workActive ? 'bg-red-500 text-white border border-gray-300 rounded py-2 px-4 font-semibold' : 'bg-white border border-gray-300 rounded py-2 px-4'}
            />
          </div>
        </div>
        <br />
        <div className="btn mt-3 w-full  border border-pink-500 flex justify-center p-2">
          <button id="submit" type="submit" className="w-full text-lg font-bold text-white bg-pink-500 rounded py-2 px-4">Save Address</button>
        </div>
      </form>
      
    </div>
  );
};

export default Filladdress;