import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './Reducers/ProReducer'
import  wishlistSlice  from './Action/Wishlists'
import  addToCartSlice, { clearCart }  from './Action/AddCart'
import  addressListSlice  from './Reducers/AddressLists'
import orderSlice from './Reducers/OrderSlice'
import authSlice from './Reducers/AuthSlice'
import searchSlice from './Reducers/SearchSlice'
import ThemeSlice from './Reducers/ThemeSlice'

export const store = configureStore({
  reducer: {
    productDatas: productSlice,
    wishlist: wishlistSlice,
    addCart :  addToCartSlice,
    addressListSlice : addressListSlice,
    orders: orderSlice,
    auth: authSlice,
    search: searchSlice,
     theme: ThemeSlice,
  },
});

export { clearCart };