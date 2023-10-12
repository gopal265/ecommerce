import React, { Fragment, useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { createbag, deletewish, getwishlist,  } from '../../actions/order'
import noWish from "../../assets/images/wishlist.png"
// import wish from '../images/emptywish.PNG'
import { Link, useNavigate } from 'react-router-dom'
import { getuser, clearErrors } from '../../actions/auth'
import Nowishlist from './NoWishList'
import "./WishList.css"
import NavBar from '../NavBar/NavBar'


const Wishlist = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { wishlist, loading } = useSelector(state => state.wishlist_data)
    const { isAuthentication, loading: userloading, error, user } = useSelector(state => state.user)
    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const {deletewish:dellll} = useSelector(state=>state.deletewish)



    function delwish(user, product) {
        console.log(user)
        const option = {
            product: product,
            user:user
        }
        
        dispatch(deletewish(option))
        setstate2(false)
       
        
    }
    if (state2=== false && dellll === true) {
        dispatch(getwishlist(user._id))
        setstate2(true)
    }


    function movetobag(user, product) {
        const option ={
            user:user,
            orderItems:[
              {product:product, qty:1}
            ]}
        dispatch(createbag(option))
        // Alert.success('Product added successfully in Bag')

        delwish(user,product)
    }

    useEffect(() => {

        if (state1 === false) {
            if (user !==null) {
                dispatch(getuser())
            }
            setstate1(true)
        }
        
    
        if (error) {
            dispatch(clearErrors())
        }
        if (state === false) {
            if (userloading === false) {
                if (isAuthentication === false) {
                    // Alert.info('Log in to access wishlist')
                    setstate(true)
                    
                } else {
                    dispatch(getwishlist(user._id))
                    setstate(true)
                }

            }
        }

    }, [dispatch, error, userloading, isAuthentication, user]);

    return (
        <Fragment>
            <NavBar />
        {
           
            isAuthentication === true && user!==null?

            <Fragment>{
                loading === false &&  
                <Fragment>
                    {(wishlist !== null && wishlist.orderItems.length > 0)  ?
                        <div className='wish-wrapper container-fluid'>
                            <div ><span className='wish-head pr-2' >My Wishlist</span> <span className='wish-description'> {wishlist.orderItems.length} items</span></div>
                            <br />
                            <div className='container-fluid'>
    
                                <div className='row '>
                                    {wishlist && wishlist.orderItems.map((pro) => (
                                        <div className='col-md-3 p-3 center-h'>
                                            <div className='wish-delete center' onClick={()=>delwish(user._id, pro.product._id)}><i class="fa-solid fa-xmark"></i></div>
                                            <div className='pb-3 wish-product-wrapper full-width'>
                                            <Product product={pro.product} key={pro._id} inWish={true} />
                                            </div>
                                            <div className='wishtobag full-width center'>
                                            <div className=''onClick={()=>movetobag(user._id, pro.product._id)}>MOVE TO BAG</div>

                                            </div>
                                        </div>
    
    
                                    ))}
                                </div>
    
                            </div>
                        </div>
                        :
                        <Fragment>
                            <div className='container-fluid center full-height '>
                                <div className='center-h '>
                                    <div className='wish-head pb-3' >YOUR WISHLIST IS EMPTY</div>
                                    <p className='wish-description pb-3'>Add items that you like to your wishlist. Review <br /> them anytime and easily move them to the bag.</p>
                                    <img src={noWish} alt="" className='nowish' />
                                    <Link to='/'> <button className='wish-button '>CONTINUE SHOPPING</button></Link>
                                </div>
                            </div>
                        </Fragment>
                    }
    
                </Fragment>
            }
            </Fragment>

            :

            <Nowishlist/>

            
            
        }
        </Fragment>
        

    )
}

export default Wishlist