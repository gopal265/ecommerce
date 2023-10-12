import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GenderFilter = ({location}) => {
    const [selectGender,setSelectGender] = useState('')
    let gender = ["men","women",'boys','girls']
    const navigate = useNavigate()
    const changeGender = (e) =>{
        setSelectGender(e.target.value)
        console.log(selectGender)
        genderfun(e.target.value)
      }
    
      const  genderfun = (e) =>{

 
        let url = location.search
        console.log(url)
        if (url.includes('?')) {
          let newtext = e.replace(' ', '%20')
          if (url.includes('&gender')){
            if(url.includes('&gender=men')){
              var tempurl = url.replace('&gender=men',`&gender=${newtext}`)
     
            }
            else if(url.includes('&gender=women')){
              var tempurl = url.replace('&gender=women',`&gender=${newtext}`)
            
            }
            else if(url.includes('&gender=boys')){
              var tempurl = url.replace('&gender=boys',`&gender=${newtext}`)
            }
            else if(url.includes('&gender=girls')){
              var tempurl = url.replace('&gender=girls',`&gender=${newtext}`)
            }
            
          }
          else if(url.includes('gender')){
            if(url.includes('gender=men')){
              var tempurl = url.replace('gender=men',`gender=${newtext}`)
            }
            else if(url.includes('gender=women')){
              var tempurl = url.replace('gender=women',`gender=${newtext}`)
            }
            else if(url.includes('gender=boys')){
              var tempurl = url.replace('gender=boys',`gender=${newtext}`)
            }
            else if(url.includes('gender=girls')){
              var tempurl = url.replace('gender=girls',`gender=${newtext}`)
            }
          }
          else{
            var tempurl = url+ `&gender=${newtext}`
          }
          
          
         
            navigate(tempurl)
     
          
      
          
        
        }else{
          url += `?gender=${e}`
          navigate(url)
      
          // window.location = url
      
        }
      }
  return (
    <>
     <ul className=''>
            <h5 className='pb-2'>Gender</h5>
            {
              gender.map((e)=>
              <li className=''>
              <input type="radio" name="gender" value={e} className='' id={`gender-${e}`} checked={location.search.includes(e)}  onChange={changeGender} />
              <label className=''>{e}</label>
              </li>
              )
            }
           
          </ul> 
    </>
  )
}

export default GenderFilter
