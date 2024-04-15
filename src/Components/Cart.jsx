import React from 'react'
import {Link} from 'react-router-dom'
const Cart = ({cart,setCart}) => {
  console.log("okkk",cart)
  return (
   <>
    <div className='container'>
    {
      cart.length==0 ? (
        <>
          <div className='text-center mt-lg-5'>
            <h1>Your Card is Empty</h1>
            <Link to={"/"} className='btn btn-info mt-lg-2'>Continue Shoping..!! </Link>
          </div>
        </>
      ):

      cart.map((pr)=>{
       return(
        <div className="card mb-3" style={{maxWidth: '800px',margin:'20px',textAlign:'center',marginLeft:'15%'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={pr.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{pr.title}</h5>
        <p className="card-text">{pr.description}</p>
        <button className='btn btn-primary mx-3'>{pr.price} ₹</button>
        <button className='btn btn-danger mx-3'>BuyNow</button>
      </div>
    </div>
  </div>
  
</div>

       )
      })
    }
    
   
   
    </div>
    {
      cart.length!=0 &&(
        <div className='container text-center my-5 '>
    <button className='btn btn-warning mx-5' >Buy Cart Item</button>
      <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
    </div>
      )
    }
    
   </>
  )
}

export default Cart