import React, {  useEffect, useState } from 'react'
import './Product.css'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createwishlist } from '../../actions/order'


const Product = ({ product,inWish=false}) => {

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [addedtoWish,setAddedtoWish] = useState(false)
    const navigate = useNavigate()
    const addtoWishList = ()=>{
        dispatch(createwishlist({user: user._id,orderItems:[{product:product._id}]}))
        setAddedtoWish(true)
    }
    

    return (
        <>
            
        { product.images[0] && 
            
            <>
                <div className='product-wrapper' >
                    <div >
                        <img src={product.images[0]} className='product-img' onClick={()=> navigate(`/products/${product._id}`)}/>
                        </div>
                    <div className={`${!inWish ?"visible-class" : ''}   pl-3`} onClick={()=> navigate(`/products/${product._id}`)}>
                        <div className='brand pt-2 pb-1'>{product.brand}</div>
                        <div className='title pb-1'>{product.title}</div>
                        <div className='center-v prices'>
                        <div className='sellingprice'>Rs. {product.sellingPrice}</div>
                        <div className='mrp'>Rs. {product.mrp}</div>
                        <div className='discount'>({Math.abs(Math.round(product.sellingPrice / product.mrp * 100 - 100))}% OFF)</div>
                        </div>
                        
                        </div> 
                        {
                            !inWish &&
                            <div className='hover-class full-width'>
                            <div className={`${addedtoWish ? "productadded" :"" } wishlist center full-width`} onClick={addtoWishList}><span><i class="fa-regular fa-heart"></i></span>Wishlist</div>
                            <div className=' pl-3'>
                            
                            <div className='title pb-1'>Sizes : {product.sizes}</div>
                            <div className='center-v prices'>
                            <div className='sellingprice'>Rs. {product.sellingPrice}</div>
                            <div className='mrp'>Rs. {product.mrp}</div>
                            <div className='discount'>({Math.abs(Math.round(product.sellingPrice / product.mrp * 100 - 100))}% OFF)</div>
                            </div>
                            </div> 
                        </div>
                        
                        }
                       
                        
                        

                </div>


            </>

            
            }

                </>           
    )
    }     

export default Product