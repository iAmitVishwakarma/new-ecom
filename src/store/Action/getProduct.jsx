import { setProducts } from "../Reducers/ProReducer";

export const asyncgetProduct = ()=> async (dispatch, getState) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products').then(res=>res.json());
     
      const data  = await response.map((res)=>{
        const  discountPrice = Math.floor(Math.random() * 50 + 10);
        const originalPrice = parseFloat((res.price + (res.price * discountPrice / 100)).toFixed(2));
        res.originalPrice = originalPrice, res.discountPrice = discountPrice
        return res
      })
     
      dispatch(setProducts(data))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };