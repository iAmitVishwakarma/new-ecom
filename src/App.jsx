import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { asyncgetProduct } from "./store/Action/getProduct";
import Navlinks from "./utils/Navlinks";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetProduct());
  }, [dispatch]);


  return (
    <>
   <Navlinks />
    </>
  )
}

export default App
