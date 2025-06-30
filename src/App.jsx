import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProduct } from "./store/Action/getProduct";
import Layout from "./utils/Layout";



function App() {
  const dispatch = useDispatch();
const { theme } = useSelector((state) => state.theme);
//--
  useEffect(() => {
    dispatch(asyncgetProduct());
  }, [dispatch]);
//--
  // This effect applies the 'dark' class to the <html> element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [theme]); // It runs every time the theme changes

  return (
   <div className="dark:bg-gray-900 dark:text-white">
      <Layout />
    </div>
  )
}

export default App
