import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryFilter = ({product,location}) => {
    let category = [];
    const [selectedCategories,setSelectedCategories] = useState([])
    const navigate = useNavigate()
    const getCategories = () =>{
        for(let i =0;i<product.length ;i++){
          category.push(product[i].category)
        
        }
      }
      getCategories()
    
    const handleCheck = (e) =>{
        if(selectedCategories.includes(e.target.value)){
            setSelectedCategories([...selectedCategories,e.target.value])
        }
        else{
            let updatedState = selectedCategories.filter(item => item !== e.target.value)
            setSelectedCategories(updatedState)
        }
        categoryfun(e.target.value)
    }
    
      function categoryfun(e){
        let url = location.search
       
        if (url.includes('?')) {
          let nexttext1 = e.replace(' ', '%20')
          let newtext = nexttext1.replace(' ', '%20')
         
        
          if (url.includes(`${newtext}`)) {
            let newurl = url.includes(`&category=${newtext}`) ? url.replace(`&category=${newtext}`,'') : null
            let newurl2 = url.replace(`?category=${newtext}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            if(newurlsuccess[0] === "&"){
              newurlsuccess = newurlsuccess.replace('&','?')
            }
            navigate(newurlsuccess)
           }else{
             url += `&category=${e}`
             navigate(url)
           }
      
        }else{
      
          url += `?category=${e}`
          navigate(url)
      
        }
      
      }
    

  return (
    <div>
      <ul className=''>
      <h5 className='pb-2'>CATEGORIES</h5>
            {
              category && [...new Set(category)].map((e)=>
              <li className='' key={e} >
              <input type="checkbox" name="categories" value={`${e}`} id={`id${e}`} className='mb-2 accent-pink-500' checked={location.search.includes(e.replace(" ","%20"))} onChange={handleCheck} />
              <label className='font1 text-sm ml-2 mr-4 mb-2'>{e}<span className='text-xs font-serif font-normal text-slate-400'> ({category.filter((f)=>f === e).length})</span> </label>
              </li>
              )
            }
           
          </ul>
    </div>
  )
}

export default React.memo(CategoryFilter)
