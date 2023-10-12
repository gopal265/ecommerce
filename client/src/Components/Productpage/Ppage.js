import React, { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../actions/product'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import './Ppage.css'
import Product from "../Product/Product"
import {getuser} from '../../actions/auth'
import {createbag, createwishlist, clearErrors} from '../../actions/order'
import NavBar from '../NavBar/NavBar'


const Ppage = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const { product, loading, similar } = useSelector(state => state.singleProduct)
  const {loading: userloading, user, isAuthentication} = useSelector(state => state.user)
  const {error, bag} = useSelector(state => state.bag)
  const {error:werror} = useSelector(state => state.wishlist)
  const [img, setimg] = useState('')

  function addtobag() {
    if (user) {

      const option ={
         user:user._id,
         orderItems:[
           {product:param.id, qty:1}
         ]
        
       }
     
       dispatch(createbag(option))
       

     }else{
     }
  }

  function addtowishlist() {
    if (user) {

     const option ={
        user:user._id,
        orderItems:[
          {product:param.id}
        ]
       
      }
      console.log(option)
      dispatch(createwishlist(option))

      
      
    }else{
    }
  }

  const [state, setstate] = useState(false)
  
  useEffect(() => {
    


      dispatch(getSingleProduct(param.id))

    
   
  
  }, [param.id]);

  return (
    <Fragment>
      <NavBar />
      {
        loading === false ?
        <div className='container-fluid'>
          <div className='container-fluid pt-3'>
            <div className='row' >
              <div className='col-md-7'>
              {/* Image div for large screen */}
              <div className='container-fluid'>
                <div className='row'>
                  {
                    product.images.map((e) =>
                      <div className='col-md-6' >
                        <img src={e} className='ppage-image' alt="productImage" />
                      </div>

                    )
                  }
                </div>
              </div>
              </div>
              {/* Content div for large screen */}
              <div className='col-md-5'>
                <div className=''>
                  <h1 className='ppage-brand'>{product.brand}</h1>
                  <h1 className='ppage-title'>{product.title}</h1>
                </div>
                <div className=''>
                  <div className='ppage-price'>
                    <span className="sp pr-2">Rs. {Math.round(product.sellingPrice)}</span>
                    <span className="ppage-price-mrp pr-2">Rs. {product.mrp}</span>
                    <span className="ppage-price-discount">( {-Math.round(product.sellingPrice / product.mrp * 100 - 100)}% OFF )</span> </div>
                  <div className='ppage-tax'>inclusive of all taxes</div>
                  <h5 className='pt-1'>SELECT SIZE</h5>
                  <button className=''>{product.size}</button>
                  <br />
                  <button className="pt-2 pb-2 pl-5 pr-5 mr-3 ppage-bag" onClick={addtobag}> <span>ADD TO BAG</span></button>
                  <button className="pt-2 pb-2 pl-4 pr-4 ppage-wish" onClick={addtowishlist}><span>WISHLIST</span></button>

                </div>
                <div className='border-b-[1px] border-slate-200  pb-6 pt-4'>
                  
                  <div className='ppage-brand'>Seller: <span className='ppage-brand'>{product.brand.toUpperCase()}</span> </div>
                  <div className='ppage-title'>Product Code:&nbsp;{product.style_no}</div>

                </div>

                <div className='border-b-[1px] border-slate-200  pb-6 pt-4'>
{/* 
                  {
                    product && product.bulletPoints.map((e) =>
                      <div className='mb-2 font-extralight text-slate-600'>
                        {e.point}
                      </div>
                    )
                  } */}
                  <div className=''>BEST OFFERS</div>
                  <div className=''>Best Price:&nbsp; <span className='text-[#f26a10e1]'>&nbsp;Rs. {Math.round(product.sellingPrice)}</span></div>
                  <li className=''>Applicable on: Orders above Rs. 1599 (only on first purchase)</li>
                  <li className=''>Coupon code: <span className=''>MYNTRA250</span></li>
                  <li className=''>Coupon Discount: Rs. 62 off (check cart for final savings)</li>

                </div>

                <div className=''>

                  <h5 className=''>PRODUCT DETAILS </h5>
                  <div className='mt-4'>
                    <li className='list-none mt-2'>{product.productDetails}</li>
                    <li className='list-none '>Warranty: 1 month</li>
                    <li className='list-none '>Warranty provided by Brand Owner / Manufacturer</li>
                  </div>
                  <h5 className='font1 flex items-center mt-4 font-semibold'>Size & Fit</h5>
                  <li className='list-none mt-2'>{product.size}</li>
                  <h5 className='font1 flex items-center mt-4 font-semibold'>Material & Care</h5>
                  <li className='list-none mt-2'>{product.material}</li>
                 
                  <h5 className='font1 flex items-center mt-4 font-semibold'>Specifications</h5>
                  {/* {
                    product.specification.map((e) =>
                      <li className='list-none mt-2'>{e.point}</li>
                    )
                  } */}
                </div>

              </div>
            
            
            {/* <Footer/> */}
            </div>
          </div>
          <div className='pt-4'>SIMILAR PRODUCTS</div>
          <div className='container-fluid p-5' >
            <div className='row'>
            {similar && similar.map((pro) => (
              <div className='col-md-3 p-2'> 
                <Product product={pro} key={pro._id} />
              </div>

            ))}
            </div>
       
          </div>
          </div>
          
          :
          <Loader />
      }

    </Fragment>
  )
}

export default Ppage