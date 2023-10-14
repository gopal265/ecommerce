import axios from "axios"

const base_url = "http://localhost:5000/auth";

export const registerMail =(email) => axios.post(`${base_url}/registerbymail`,email);

export const verifyOtp = (email,otp) => axios.post(`${base_url}/${email.toString()}/verifyotp`,otp)

export const resendOtp = (email) => axios.post(`${base_url}/${email}/resendotp`)

export const updateUser = (email,data) => axios.patch(`${base_url}/${email}/updateuser`,data)

export const updateUserDetails = (email,data) => axios.patch(`${base_url}/${email}/updateuserdetails`,data)
export const getUser = (email) => axios.get(`${base_url}/${email}/getuser`)

export const loginBYPassword = (email,password) => axios.get(`${base_url}/${email}/${password}/login`)
