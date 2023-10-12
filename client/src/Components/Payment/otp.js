import React, { Fragment, useState, useEffect } from 'react'
import '../Login/Login.css'
import { verifyOtp, resendotp, getuser } from '../../actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import { placeOrder } from '../../actions/order'



const OTPVerification = () => {
  const img = "https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
  const navigate = useNavigate()
  const [otp, setotp] = useState('')
  const email = localStorage.getItem("email")
  const dispatch = useDispatch()
  const { user,error, loading } = useSelector(state => state.user)
  const {status} = useSelector(state =>state.sendotp)
  const {bag, loading:bagloading} = useSelector(state => state.bag_data)
  const location = useLocation()
  const state = location.state
  const orderItems = bag.orderItems.map(item => {return  {orderItem: item.product._id,qty :item.qty,paymentInfo:state,status:"Paid"}}  )

  const continues = (e) => {
    e.preventDefault();
    let data = {
      orderItems :orderItems
    }
    dispatch(placeOrder(user._id,data))
    navigate('/paymentend')
    // const myForm = {
    //   otp: Number(otp)
    // }

    // dispatch(verifyOtp(myForm))
  
    // if (error) {
    //   let par = document.getElementById('error')
    //   par.innerHTML = error
    // }
  
   
    
  }

  const Resndotp = () =>{
    dispatch(resendotp())
  }


  useEffect(() => {
    
   
  }, []);


  return (

    <Fragment>
      <form
        encType="multipart/form-data"
        onSubmit={continues}
      >
        <div className='full-width full-height center'>
          <div className='login-wrapper'>
            <img src={img} alt="login" className='otp-verify' />
            <div className='p-5'>

              <h1 className=' '>Verify With OTP</h1>
              <p className=''>Sent to {email}</p>

              <input type="number" name="phonenumber" className=''
                onChange={(e) => setotp(e.target.value)} placeholder='Enter OTP' />
              <p id='error' className='text-xs text-red-500 '></p>

              <h1 onClick={Resndotp} className='login-help login-description'>Resend OTP</h1>
              <button type='submit' className='login-button' > {loading !== false ? 'VERIFY': 'Loading...'} </button>
              <h1 className='login-description'>Have trouble loggging in? <span className='login-help'>Get help</span></h1>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default OTPVerification;
