import React from 'react'
import {useParams} from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { useEffect } from 'react'
import Product from './Product'
const Search = () => {
  const {term} =useParams()
  const [serchFilter,setSearchFilter]=useState([])

  useEffect(()=>{
    const filterData=()=>{
    const data=items.filter((val)=> val.title.toLowerCase().includes(term.toLowerCase()))
    console.log("search",data)
    setSearchFilter(data)
    }
    filterData();
  },[term])
  return (<>
 
    <Product items={serchFilter}/>
  </>
    
  )
}

export default Search