import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './Reducers/ProReducer'
import  wishlistSlice  from './Action/Wishlists'
import  addToCartSlice  from './Action/AddCart'
import  addressListSlice  from './Reducers/AddressLists'




export const store = configureStore({
  reducer: {
    productDatas: productSlice,
    wishlist: wishlistSlice,
     addCart :  addToCartSlice,
     addressListSlice : addressListSlice,
  },
 
})
