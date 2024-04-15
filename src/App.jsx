import Navbar from "./Components/Navbar"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Product from "./Components/Product"
import ProductDetail from "./Components/ProductDetail"
import Cart from "./Components/Cart"
import Search from "./Components/Search"
import { items } from "./Components/Data"
import { useState } from "react"

function App() {
  const [data,setData]=useState([...items])
  const [cart,setCart]=useState([])


  return (
    <>
<BrowserRouter>
<Navbar cart={cart} setData={setData}/>

<Routes>
  <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>} />
  <Route path="/product/:id" element={<ProductDetail/>}/>
  <Route path="/search/:term" element={<Search cart={cart} setCart={setCart} />}/>
  <Route path="/cart"  element={<Cart cart={cart} setCart={setCart} />}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
