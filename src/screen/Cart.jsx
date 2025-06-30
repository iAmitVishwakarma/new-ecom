import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

function Cart() {

 return(
    <div className='w-11/12 mx-auto aspect-[3/1] -mb-10'>
  <Outlet></Outlet>
  </div>
 )

}

export default Cart



