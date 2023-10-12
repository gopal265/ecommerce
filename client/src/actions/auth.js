import {
    REQUEST_USER_NO,
    SUCCESS_USER_NO,
    FAIL_USER_NO,
    REQUEST_LOGIN_PASSWORD,
    SUCCESS_LOGIN_PASSWORD,
    FAIL_LOGIN_PASSWORD,
    REQUEST_USER,
    SUCCESS_USER,
    FAIL_USER,
    REQUEST_VERIFY_OTP,
    SUCCESS_VERIFY_OTP,
    FAIL_VERIFY_OTP,
    REQUEST_RESEND_OTP,
    SUCCESS_RESEND_OTP,
    FAIL_RESEND_OTP,
    REQUEST_UPDATE_USER,
    SUCCESS_UPDATE_USER,
    FAIL_UPDATE_USER,
    SUCCESS_LOGOUT,
    FAIL_LOGOUT,
    REQUEST_UPDATE_DETAILS_USER,
    SUCCESS_UPDATE_DETAILS_USER,
    FAIL_UPDATE_DETAILS_USER,
    CLEAR_ERRORS
} from '../constants/userConstants'
import * as api from "../api/auth"
import axios from 'axios'

export const registerMail = (email) => async (dispatch) => {

    try {

        dispatch({ type: REQUEST_USER_NO })

   
        const { data } = await api.registerMail({email:email})
        
        dispatch({ type: SUCCESS_USER_NO, payload: data.user, message: data.message })

    } catch (error) {

        dispatch({ type: FAIL_USER_NO, payload: error.response.data.message })

    }
}

export const loginBYPassword = ({email,password}) => async(dispatch) =>{
    try {
        dispatch({type:REQUEST_LOGIN_PASSWORD})

        const {data} = await api.loginBYPassword(email,password)
        dispatch({type:SUCCESS_LOGIN_PASSWORD,payload:data.user,message:data.message})
    } catch (error) {
    
        dispatch({type:FAIL_LOGIN_PASSWORD, payload:error.response.data.message})
    }
}

export const getuser = () => async (dispatch) => {

    try {

        dispatch({ type: REQUEST_USER })
        const email = localStorage.getItem('email').replace(/"/g,'')

        const { data } = await api.getUser(email)

        dispatch({ type: SUCCESS_USER, payload: data.user })

    } catch (error) {

        dispatch({ type: FAIL_USER, payload: error.response.data.message })

    }
}

export const verifyOtp = (otp) => async (dispatch) => {

    try {

        dispatch({ type: REQUEST_VERIFY_OTP })
        const email = localStorage.getItem('email').replace(/"/g, '')
        

        console.log(email)
        const { data } = await api.verifyOtp(email,otp)
        console.log(data)

        dispatch({ type: SUCCESS_VERIFY_OTP, payload: data.user })

    } catch (error) {
      
        dispatch({ type: FAIL_VERIFY_OTP, payload: error.response.data.message })

    }
}

export const resendotp = () => async (dispatch) => {

    try {

        dispatch({ type: REQUEST_RESEND_OTP })
        const mobile = JSON.parse(localStorage.getItem('mobileno'))
        const mobileno = Number(mobile.phonenumber)

        const { data } = await axios.get(`/api/v1/resendotp/${mobileno}`)

        dispatch({ type: SUCCESS_RESEND_OTP, payload: data.success })

    } catch (Error) {
    
        dispatch({ type: FAIL_RESEND_OTP, payload: Error.response.data.message })

    }
}

export const updateUser = (userdata) => async (dispatch) => {
   
    try {

        dispatch({ type: REQUEST_UPDATE_USER })
        const email = localStorage.getItem('email').replace(/"/g,'')
   
  
        const { data } = await api.updateUser(email,userdata)

        dispatch({ type: SUCCESS_UPDATE_USER, payload: data.user })

    } catch (Error) {
    
        dispatch({ type: FAIL_UPDATE_USER, payload: Error.response.data.message })

    }
}

export const updatedetailsuser = (userdata) => async (dispatch) => {
   
    try {

        dispatch({ type: REQUEST_UPDATE_DETAILS_USER })
        
        const email = localStorage.getItem('email').replace(/"/g,'')

        const { data } = await api.updateUserDetails(email,userdata)

        dispatch({ type: SUCCESS_UPDATE_DETAILS_USER, payload: data.success })

    } catch (Error) {
    
        dispatch({ type: FAIL_UPDATE_DETAILS_USER, payload: Error.response.data.message })

    }
}


export const logout = () => async (dispatch) => {
   
    try {
        console.log("logout")

        const { data } = await axios.get(`/api/v1/logout` )

        dispatch({ type: SUCCESS_LOGOUT, payload: data.success })

    } catch (Error) {
    
        dispatch({ type: FAIL_LOGOUT, payload: Error.response.data.message })

    }
}




export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}