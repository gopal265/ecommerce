import React, { useState, useEffect } from 'react'
import './Login.css'
import { clearErrors, updateUser, getuser } from '../../actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import NavBar from '../NavBar/NavBar'

const Registeruser = () => {
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const local_Email = localStorage.getItem('email').replace(/"/g, '');
    const { user, error } = useSelector(state => state.user)
    const {register,handleSubmit,formState:{errors}} = useForm()

    const submitdata = (data) =>{
            if (data){
                dispatch(updateUser(data,user._id))
            }
    }


   useEffect(() => {
        
    if(error){
        console.log(user)
        dispatch(clearErrors())
    }
    if ( user.userName) {
        dispatch(getuser())
        console.log(user)
        redirect('/dashboard')
   }
    
    }, [ error, dispatch,user]);


    return (
        <>
        <NavBar />
        <div className='center full-width'>
            <div className=' login-wrapper p-5' >
                <form onSubmit={handleSubmit(submitdata)}>
                    <div className="form-group center-v-sb">
                        <span for="exampleInputEmail1">Email address</span>
                        <span>{local_Email}</span>
                    </div>

                    <div className="form-group">
                        <input key='userName' type='text' className="form-control" id='userName' placeholder="User Name" {...register('userName',{required:true})} />
                   
                    </div>

                    <div className="form-group">
                        <input key='firstName' type='text' className="form-control" id='firstName' placeholder="First Name" {...register('firstName',{required:true})} />
                    </div>

                    <div className="form-group">
                        <input key='lastName' type='text' className="form-control" id='lastName' placeholder='Last Name (Optional)' {...register('lastName')} />
                    </div>

                    <div className="form-group">
                        <input key='phoneNo' type='tel' className="form-control" id='phoneNo' placeholder='Phone Number' {...register('phoneNumber',{required:true})} />
                    </div>

                    <div className="form-group">
                        <input key='password' type='password' className="form-control" id='password' placeholder='Password' {...register('password')} />
                    </div>
                    <button type="submit" className="login-button">Submit</button>
                </form>
            </div>
        </div>
        </>

    )
}

export default Registeruser