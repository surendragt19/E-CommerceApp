
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductDetail = () => {
    
    const {id}=useParams()

    const [product ,setProduct]=useState({})
    const [relatedPro,setRelatedPro]=useState([])

    useEffect(()=>{
        const filterFun=items.filter((prValue)=>{
           return prValue.id==id;   
        })
        setProduct(filterFun[0])

    },[id])


    useEffect(()=>{
        const relatedCat=items.filter((cat)=>{
            return cat.category==product.category;
        })
        setRelatedPro(relatedCat)
    },[product])

  return (
    <>
    
    <div className='img'>
    <img src={product.imgSrc}/></div>
    <div style={{textAlign:'center'}}>
    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p className="card-text"><a href={product.amazonLink} style={{textDecoration:'none',color:'black'}}>Buy To Amazon</a></p>
    <button className='btn btn-primary mx-3'>{product.price} ₹</button>
    <button className='btn btn-danger'>Add to Cart</button>
    </div>
    </div>

<Product items={relatedPro}/>


    {/* Related Product viwe */}


    {/* <div className='container my-5'>
    <div className='row'>
    <h1 style={{textAlign:'center'}}>Related Product</h1>
    {relatedPro.map((item)=>{
        return(
            <>
            <div className='col-lg-4 col-md-6 my-3 text-center'>
                    <div className="card" style={{width: '18rem'}}>
                    
  <img src={item.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <button className='btn btn-primary mx-3'>{item.price} ₹</button>
    <button className='btn btn-danger'>Add to Cart</button>
  </div>
</div>
</div>
         
            </>
        )
    })}
    </div>
    </div> */}


  
  
    </>
  )
}

export default ProductDetail