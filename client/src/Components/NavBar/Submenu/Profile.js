import React,{Fragment} from 'react'
import { useTransition, animated } from 'react-spring'
import {Link} from 'react-router-dom'
import { getuser, logout } from '../../../action/useraction'
import { useDispatch} from 'react-redux'
import { useAlert } from 'react-alert'
import {registermobile, otpverifie} from '../../../action/useraction'

const Profile = ({show, CMenu, parentCallback, user}) => {
  const dispatch = useDispatch()
  const alert = useAlert()
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })

  const logoutBTN = () =>{
    dispatch(logout())
    localStorage.removeItem('mobileno')
    dispatch(getuser())
    alert.show('Logout Successfully')
    dispatch(registermobile())
    dispatch(otpverifie())
  }
    
  return (
   <Fragment>
     
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className=""
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className="">
            <div className="">
               <h1 className="">Welcome</h1>
               {user ? "" : <h1 className="">To access account and manage orders  <br /></h1>}
                
                {
                user ? 
                <div>
                    {`${user.name}`} <br />
                    <Link to='/dashboard' className="">Dashboard</Link>
                </div>
                
                :
                     
                   <Link className='dec' to="/Login">
                   <button className="">LOGIN/&nbsp;SIGNUP</button>
                   </Link>
 
                  }
               
               
                <hr className='my-4' />
                <h1 className="">Orders</h1>
                <h1 className="">Wishlist</h1>
                <h1 className="">Gift Cards</h1>
                <h1 className="">Contact Us</h1>
                <div className='flex'>
                <h1 className="">Myntra Insider </h1><div className="">New</div>
                </div>
               

                <hr className='my-4' />

                <h1 className="">Myntra Credit</h1>
                <h1 className=''>Coupons</h1>
                <h1 className="">Saved Cards</h1>
                <h1 className="">Saved Addresses</h1>
                <br />

                {
                  user ? 

                  
                   <button className="" onClick={logoutBTN}>LOGOUT</button>
                

                :

                ""
                }
   
            </div>
           

          </div>

        </div>
        </animated.div>
      )}
      
   </Fragment>
  )
}

export default Profile