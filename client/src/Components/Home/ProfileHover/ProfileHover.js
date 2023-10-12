import React from 'react'
import "./ProfileHover.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProfileHover = ({display}) => {
    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
  return (
    <div className={`profile ${display ? "show-profile" :""}`}>
      <p>Welcome</p>
      {
        user && user.userName?  (<div onClick={() =>navigate('/dashboard')}>{user.userName}</div>)
        :
        (
            <button className='btn btn-outline-primary' onClick={()=> navigate("/login")}>Login/SignUp</button>
        )
      }
      <hr className='profile-line' />
      <div>
        <div onClick={()=> navigate('/orders')}>Orders</div>
        <div onClick={()=> navigate('/wishlist')}>WishList</div>
      </div>
      <hr className='profile-line'/>
      <div>
      </div>
    </div>
  )
}

export default ProfileHover
