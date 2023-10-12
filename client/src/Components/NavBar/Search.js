import React, { Fragment, useState } from 'react'
import {getAllProducts} from '../../actions/product'
import {useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import "./NavBar.css"
const Search = () => {
    
    const [state, setstate] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    function searchenter(e) {
        e.preventDefault();
        if (state.trim()) {
            navigate(`/products?keyword=${state}`)
            dispatch(getAllProducts())
        } else {
            navigate('/products')
        }
     
    }
    return (
        <Fragment>
         
            <div className='navbar-searchbar center-v '>
            <input type="text" placeholder='Search for products, brands and more' 
            className=' ' onChange={(e)=>setstate(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass pl-3" onClick={searchenter}></i>
            </div>
          
           
         
            
        </Fragment>
    )
}

export default Search