import React, {Fragment} from 'react'
// import emptywish from '../images/emptywish.PNG'
import noWish from "../../assets/images/wishlist.png"
import "./WishList.css"
import {useNavigate} from 'react-router-dom'

const Nowishlist = () => {
    const navigate = useNavigate()

    function re() {
        navigate('/Login')
    }
  return (
    <Fragment>
        <div className='container-fluid full-height center'>
            <div className='center-h'>
            <div className='wish-head pb-3'>PLEASE LOG IN</div>
            <div className='wish-description pb-3'>Login to view items in your wishlist.</div>
            <img src={noWish} alt="" className='nowish' />
            <button className=' wish-button ' onClick={re}>LOGIN</button>
            </div>
               
        </div>
    </Fragment>
  )
}

export default Nowishlist