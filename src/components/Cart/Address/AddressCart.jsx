import React, { useState } from 'react'
import Paymentsummary from '../Paymentsummary'
import AddressForm from './Addressform'

function AddressCart() {
const [checkedAddress, setCheckedAddress] = useState(null)

console.log(checkedAddress );

  return (
    <section className="flex w-3/4 mx-auto mt-8 mb-1 bg-white p-4 rounded shadow-md">
   <div className="w-2/3 pr-4 border-r border-gray-300">
   <AddressForm  setCheckedAddress={setCheckedAddress} ></AddressForm>
     </div>
  <Paymentsummary></Paymentsummary>
</section>
  )
}

export default AddressCart
