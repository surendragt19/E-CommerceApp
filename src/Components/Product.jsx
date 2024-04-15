import React from 'react'
import { items } from './Data'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items,cart,setCart}) => {

    const adtoCart=(id,price,title,description,imgSrc)=>{
        const obj={
            id,price,title,description,imgSrc
        }
        setCart([...cart, obj])
        console.log(cart)
        toast.success('Added!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return (
        <>
       <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
    <div className='container'>
    <div className='row'>
        {
            items.map((ele)=>{
                return(
                    <>
                    <div className='col-lg-4 col-md-6 my-3 text-center'>
                    <div className="card" style={{width: '18rem'}}>
                    <Link key={ele.id} to={`/product/${ele.id}`}>
  <img src={ele.imgSrc} className="card-img-top" alt="..."/>
  </Link>
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">{ele.description}</p>
    <button className='btn btn-primary mx-3'>{ele.price} ₹</button>
    <button className='btn btn-danger' 
    onClick={()=>adtoCart( ele.id,ele.price,ele.title,ele.description,ele.imgSrc)}>Add to Cart</button>
  </div>
</div>
</div>

                    </>
                )
            })
        }
    </div>
    </div>
    </>
  )
}

export default Product