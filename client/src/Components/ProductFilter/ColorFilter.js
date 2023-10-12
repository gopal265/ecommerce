import React from 'react'
import { useNavigate } from 'react-router-dom';

const ColorFilter = ({product,location}) => {
   
    let colors = [];
    const navigate = useNavigate()
  
    const getColors =() =>{
        for(let i = 0 ; i < product.length;i++){
          colors.push(product[i].colors)
        }
      }
      getColors()

    function colorfun(e){
        let url = location.search
      
        if (url.includes('?')) {
          let newtext = e.replace(' ', '%20')
          if (url.includes(`${newtext}`)) {
            let newurl = url.includes(`&colors=${newtext}`) ? url.replace(`&colors=${newtext}`,'') : null
            let newurl2 = url.replace(`?colors=${newtext}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            if(newurlsuccess[0] === "&"){
              newurlsuccess = newurlsuccess.replace('&','?')
            }
            navigate(newurlsuccess)
           }else{
             url += `&colors=${e}`
             window.location = url
           }
          
        
        
        }else{
          url += `?colors=${e}`
          navigate(url)
      
        }
      }
  return (
    <div>
      <ul className= 'overflow-hidden relative '>
              <h5 className=' mb-2'>COLOR</h5>
            {
              colors && [...new Set(colors)].map((e)=>
              <li className='items-center '>
              <input type="checkbox" name="color" value={`${e}`} id={`id${e}`} checked={location.search.includes(e)} onClick={()=>colorfun(`${e}`)} className='mb-2'  />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e} <span className='text-xs font-serif font-normal text-slate-400'> ({colors.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           
          </ul>
    </div>
  )
}

export default ColorFilter
