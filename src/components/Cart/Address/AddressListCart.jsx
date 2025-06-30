import React from 'react'

const AddressListCart = ({element , index , checkedAddress ,  setCheckedAddress , handleRemoveAddress}) => {

  return (
    <div key={index} className="address-card bg-white shadow flex items-start gap-2 rounded px-4 py-5 mb-5">
    <input
      type="radio"
      name="SelectDeliveryAddresses"
      className="mt-2"
      onChange={() => setCheckedAddress(index) }
      defaultChecked={index === 0}
    />
    <div>
      <div className="name flex items-center">
        <span className="text-lg font-semibold capitalize mr-2">{element.fullName}</span>
        <span className="tag border border-[#03a685] text-[10px] font-bold text-[#03a685] px-1 py-0 rounded-full uppercase">
          {element.addressType}
        </span>
      </div>
      <div className="details text-gray-600 text-[13px]">
        <p>
          {element.addressLine1}, {element.addressLine2}
        </p>
        <p>
          {element.city}, {element.state} - {element.postalCode}
        </p>
        <p className="my-2">
          Mobile: <span className="mobile font-bold">{element.phoneNumber}</span>
        </p>
      </div>
      <h6 hidden={checkedAddress !== index} className="capitalize text-sm text-green-500 mb-3">
        This address is available for Delivery
      </h6>
      <div className="actionsbtn flex items-start justify-start gap-2">
        <button
          onClick={() => handleRemoveAddress(index)}
          className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-bold py-1 px-3 border border-gray-400 rounded-2xl"
        >
          REMOVE
        </button>
        <button
          onClick={() => handleEditAddress(index)}
          className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-bold py-1 px-3 border border-gray-400 rounded-2xl"
        >
          EDIT
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddressListCart
