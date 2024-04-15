import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = ({setData,cart}) => {

  const [serchterm,setSearch]=useState()
  const navigate=useNavigate()

const location=useLocation()

  const filterByCatgory=(catAll)=>{
    const element=items.filter((product)=>product.category===catAll)
    setData(element)
  }

  const filterByPrice=(priceAll)=>{
    const itemPrice=items.filter((pr)=>{
      return pr.price>=priceAll
    })
    setData(itemPrice)
  }

  const handleSerch=(e)=>{
    e.preventDefault();
    navigate(`/search/${serchterm}`)
    setSearch("")
  }


  return (
    <>
   <header className='sticky-top'>

    <div className='nav_bar'>
        <Link to={'/'} className='logo'><i className="fa-solid fa-cart-shopping"></i><b className="m-1">E-Cart</b></Link>
        <form onSubmit={handleSerch} className='search'>
            <input type='text' placeholder='Search'
            value={serchterm}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
        <Link to={'/cart'} className='cart'>
        
        
        <button type="button" className="btn btn-primary position-relative">
        <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

</Link>
    </div>

    {/* filter */}



    {
      location.pathname =="/" && (
        <div className='filter'>
        <div className='items text-dark'><b>Filter By{"->"}</b></div>
        <div className='items'
        onClick={()=>setData(items)}
        >No Filter</div>
        
        <div className='items' 
        onClick={()=>filterByCatgory('mobiles')}>Mobile</div>

        <div className='items'
        onClick={()=>filterByCatgory('laptops')}
        >Laptop</div>

        <div className='items'
        onClick={()=>filterByCatgory('tablets')}
        >Tablets</div>

        <div className='items' 
        onClick={()=>filterByPrice(29999)}>{">="}29999</div>

        <div className='items'
        onClick={()=>filterByPrice(49999)}
        >{">="}49999</div>


        <div className='items'
        onClick={()=>filterByPrice(79999)}>{">="}79999</div>
       
    </div>
      )
    }
   
   </header>
   </>
  )
}

export default Navbar