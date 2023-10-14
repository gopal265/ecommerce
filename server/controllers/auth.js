import  RC from   "../middlewares/resolveAndCatch.js";
import User from '../models/user.js'
import sendEmail from "../utils/sendMail.js";
import dotenv from "dotenv"
import { createToken } from "../utils/createToken.js";
import errorhandler from "../utils/errorhandle.js";

dotenv.config();

export const registerBYMail = RC(async (req,res,next) =>{

  const {email} = req.body;

  const user =   await  User.findOne({email})
 
  if(!user){
    const newUser = await User.create({email})
    console.log(newUser)
  }
 

  const newUser = await User.findOne({email})
  let otp = Math.floor((1 + Math.random()) * 90000)
  sendEmail(email,otp,newUser,res,next);


})

export const loginByPassword = RC( async (req,res,next) =>{

      const {email,password} = req.params

      const user = await User.findOne({email});
      if (!user){
        return res.status(400).json({message:"User Not Found",success:false})
      }
      if(user.password === ""){
        return res.status(400).json({message:"Password is not Created.",success:false})
      }
      if (user.password == password){
        return res.status(200).json({message:"Successfully Loggedin",user,success:true})
      }
      if(user.password !== password){
        return res.status(400).json({message:"Password Incorrect",success:false})
      }
})


export const getuser = RC(async(req, res, next)=>{
      const user = await User.findOne({email: req.params.email})
      
      res.status(200).json({
        success:true,
        user
      })
})

export const verifyOtp = RC(async (req, res, next)=>{
  
  
  console.log(req.body)
  
    const {otp} = req.body
    const user = await User.findOne({email: req.params.email})
    if (!user.otp) {
      return  res.status(400).json({
        error :"Your OTP has been expired or not has been genrated pls regenrate OTP"
      })
     
    }
    if (user.otp !== otp) {
      return res.status(400).json({
        error : "You entered expire or wrong OTP"
      })
    }
    if(otp === user.otp){
      user.verify = 'verified'
      user.otp =null
      await user.save({ validateBeforeSave: false })
      if (user.userName) {
        createToken(user, 200, res)
      }else{
        res.status(200).json({
          success:true,
          user
        })
      }
    }

})

export const resendOtp = RC(async (req, res, next)=>{

  const {email} = req.params
  const user = await User.findOne({email})
  let otp = Math.floor((1 + Math.random()) * 90000)
  console.log(user, otp)

  sendEmail(email,otp,user,res)

})

export const updateUser =RC( async(req,res,next)=>{
  console.log(req.body)

  const users = await User.updateOne({email: req.params.email}, req.body)
  const user = await User.findOne({email: req.params.email})

  if(!user){
    return next( new errorhandler('Email incorrect', 400))
  }
  
  createToken(user, 200, res)
  
})

export const updateUserDetails =RC( async(req,res,next)=>{
  console.log(req.body)
const {firstName,lastName,userName, pincode, address1, address2, city, phoneNumber,password} = req.body
  
  const user = await User.updateOne({email: req.params.email}, 
    {
      firstName,
      lastName,
      userName,
      phoneNumber,
      password,
      'address.address1':address1,
      'address.address2':address2,
      'address.pincode':pincode,
      'address.city':city,
    })


  res.status(200).json({
    success:true,
    message :'Address Update Successfully'
  })
  
})
