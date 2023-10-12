import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const BrandFilter = ({product,location}) => {
    let brand = [];
    const navigate = useNavigate()
    const getBrands = () =>{
        for(let i =0;i<product.length ;i++){
          brand.push(product[i].brand)
        
        }
      }
      getBrands()
    
      function brandfun(e){
        let url = location.search
       
        if (url.includes('?')) {
          let nexttext1 = e.replace(' ', '%20')
          let newtext = nexttext1.replace(' ', '%20')
         
        
          if (url.includes(`${newtext}`)) {
            let newurl = url.includes(`&brand=${newtext}`) ? url.replace(`&brand=${newtext}`,'') : null
            let newurl2 = url.replace(`?brand=${newtext}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            if(newurlsuccess[0] === "&"){
              newurlsuccess = newurlsuccess.replace('&','?')
            }
            navigate(newurlsuccess)
           }else{
             url += `&brand=${e}`
             navigate(url)
           }
      
        }else{
      
          url += `?brand=${e}`
          navigate(url)
      
        }
      
      }
    

  return (
    <div>
      <ul className=''>
      <h5 className='pb-2'>BRANDS</h5>
            {
              brand && [...new Set(brand)].map((e)=>
              <li className='' key={e} >
              <input type="checkbox" name="categories" value={`${e}`} id={`id${e}`} className='mb-2 accent-pink-500' checked={location.search.includes(e)} onChange={(e)=>brandfun(e.target.value)} />
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e}<span className='text-xs font-serif font-normal text-slate-400'> ({brand.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           
          </ul>
    </div>
  )
}

export default React.memo(BrandFilter)
