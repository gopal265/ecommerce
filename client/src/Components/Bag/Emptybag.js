import React, {Fragment} from 'react'
import emptybag from "../../assets/images/empty-bag.jpg"
import {useNavigate} from 'react-router-dom'
import "../WishList/WishList.css"
const Emptybag = () => {
    const navigate = useNavigate()

    function re() {
        navigate('/wishlist')
    }
  return (
    <Fragment>
        <div className='full-height center'>
            <div className='center-h'>
            
            <img src={emptybag} alt="" className='nowish' />
            <h1 className='wish-head'>Hey, it feels so light!</h1>
            <h1 className='wish-description'>There is nothing in your bag. Let's add some items.</h1>
            <button className='wish-button' onClick={re}>ADD ITEMS FROM WISHLIST</button>
            </div>
               
        </div>
    </Fragment>
  )
}

export default Emptybag