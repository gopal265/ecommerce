import React, { useState, useEffect } from 'react'
import '../Login/Login.css'
import { clearErrors, updateUser, getuser, updatedetailsuser } from '../../actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"

const AddAddress = ({task,changetask}) => {
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const local_Email = localStorage.getItem('email').replace(/"/g, '');
    const { user, error } = useSelector(state => state.updateuser)
    const {register,handleSubmit,formState:{errors}} = useForm()

    const submitdata = (data) =>{
            if (data){
                dispatch(updatedetailsuser(data))
                dispatch(getuser())
                changetask(!task)

            }


    }

    return (
        <>
       
        <div className='center full-width'>
            <div className=' login-wrapper p-5' >
                <form onSubmit={handleSubmit(submitdata)}>
                    <div className="form-group center-v-sb">
                        <span for="exampleInputEmail1">Email address</span>
                        <span>{local_Email}</span>
                    </div>

                    <div className="form-group">
                        <input key='userName' type='text' className="form-control" id='userName' placeholder="Address1" {...register('address1',{required:true})} />
                   
                    </div>

                    <div className="form-group">
                        <input key='firstName' type='text' className="form-control" id='firstName' placeholder="LandMark" {...register('address2',{required:true})} />
                    </div>

                    <div className="form-group">
                        <input key='lastName' type='text' className="form-control" id='lastName' placeholder='city' {...register('city',{required:true})} />
                    </div>

                    <div className="form-group">
                        <input key='phoneNo' type='tel' className="form-control" id='phoneNo' placeholder='PinCode' {...register('pincode',{required:true})} />
                    </div>

                  
                    <button type="submit" className="login-button">Add</button>
                </form>
            </div>
        </div>
        </>

    )
}

export default AddAddress
