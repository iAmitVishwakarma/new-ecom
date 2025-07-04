import React from 'react'
import { useSelector } from 'react-redux'

const Categroies = () => {
 const {products} = useSelector((state)=> state.productDatas)
 let  categories = [...new Set(products.map(product => product.category))]



  return ( <div className=' md:flex justify-evenly bg-[#ff8f2c]/50 hidden  
  '>
    <h1 className=' uppercase text-2xl text-[#eb018b] font-bold p-2  drop-shadow-2xl' >ALL product</h1>
    {categories.map((product , index) =>(
            <h1 key={index}  className=' uppercase text-2xl text-[#eb018b] font-bold p-2  drop-shadow-2xl ' >{product}</h1>
    ))}</div>
  )
}

export default Categroies
// C:\Users\win10\Desktop\react Project\my-project\firstPro\src\components\home\Categroies.jsx