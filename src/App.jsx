import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { asyncgetProduct } from "./store/Action/getProduct";
import Layout from "./utils/Layout";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetProduct());
  }, [dispatch]);


  return (
    <>
   <Layout />
    </>
  )
}

export default App
