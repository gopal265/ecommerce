import React, { Fragment, useState, useEffect } from 'react'
import validator from "validator"
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { registermobile, clearErrors, registerMail, loginBYPassword, getuser } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const Login = () => {
  const img = 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg'
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [login,setLogin] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading, message, user,error} = useSelector(state => state.Registeruser)
  const {user :loginuser} = useSelector(state => state.user)

  let par = document.getElementById('error')

  const continues = () => {
    
    
    if(email.trim() === "")  par.innerHTML = "Please Entert the Email Address";
    if(!validator.isEmail(email.trim())) par.innerHTML = "Please Enter a valid Email Address";

    if(validator.isEmail(email.trim())){
      if (!login) {dispatch(registerMail(email))
       localStorage.setItem("email",JSON.stringify(email))}
    }
    if (login){
      if(password.trim()!== ''){
        localStorage.setItem("email",JSON.stringify(email))
        dispatch(loginBYPassword({email:email,password:password}))
      }
    }
   

  }

  useEffect(() => {
    
     if (message && user  &&  !login ) {
      
    navigate('/verifyotp')
  }
    if(message === "Successfully Loggedin" && user && login){
      dispatch(getuser())
      navigate('/')
    }
  
  
  }, [user,message]);

  return (

    <Fragment>
      <NavBar />
      <div className='full-width full-height center '>
        <div className=' login-wrapper' >
          <img src={img} alt="login" className='full-width' />
          <div className='p-5'>

            <h3 className='login-head'>Login <span className='small'>or</span> Singup</h3>

            <input type="email" name="email" className='login-email'
         
              onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <p id='error' className=' '></p>
            {login && <input type='password' name='password' className='login-email'  onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />}

            <p className='login-description'>By Continuing, I agree to the <span className='login-help'>Terms of Use</span>  & <span className='login-help'> Privacy Policy</span></p>
            <button type='submit' className='login-button'  onClick={continues}>{ login ?  loading !==true ?'LOGIN' : 'Loading...' : loading !== true  ?"CONTINUE" :"Loading.." }  </button>
            <p className='login-description'>Have trouble loggging in? <span className='login-help'>Get help</span></p>
            {!login &&<p className='login-description'>Already have Account? <span className='login-help' onClick={() => setLogin(!login)}>Login by Password</span></p> }
            {login &&<p className='login-description'>No Account? <span className='login-help' onClick={() => setLogin(!login)}>Register</span></p> }

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login