import React, { Fragment, useEffect,useLayoutEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllProducts } from '../../actions/product'
import { useDispatch } from 'react-redux'


const ProductFilter = ({ product,location}) => {
const [ colorul, setcolorul ] = useState('max-h-72')
const [colorulbtn, setcolorulbtn] = useState('block')

const dispatch = useDispatch()
const navigate = useNavigate()

  
  let brand = [];

  const getBrands =() =>{
    for(let i = 0 ; i < product.length;i++){
      brand.push(product[i].brand)
    }
  }
  
  getBrands()

  
 
  

  


useEffect(() => {

}, []);


  return (
    <Fragment>
      <div className=''>
       {/* Gender Filter ********************************************** */}
             
            {/* categories Filter ******************************************* */}

            
            
            {/* Color filter *************************************************** */}

            
              {/* Price filter *************************************************** */}
          {/* <ul className={`pl-8 border-b-[1px] border-slate-200 py-4  overflow-hidden relative `}>
              <h1 className='font1 text-base font-semibold mb-2'>PRICE</h1>
           
              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price1fun(Math.max(...result[0]))} id={`id${Math.max(...result[0])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[0]))} to Rs. {Math.floor(Math.max(...result[0]))} <span className='text-xs font-serif font-normal text-slate-400'> ({spARRAY.filter((f) => f <=  Math.max(...result[0])).length})</span> </label>
              </li>

              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price2fun(Math.min(...result[1]), Math.max(...result[1]))} id={`id${Math.max(...result[1])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[1]))} to Rs. {Math.floor(Math.max(...result[1]))} <span className='text-xs font-serif font-normal text-slate-400'> ({sparraynew()})</span> </label>
              </li>

              <li className='items-center '>
              <input type="checkbox" name="color" value={`price1`}  className='mb-2 accent-pink-500' onClick={()=>price3fun(Math.min(...result[2]))}  id={`id${Math.min(...result[2])+1}`} />
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[2]))} to Rs. {Math.floor(Math.max(...result[2]))} <span className='text-xs font-serif font-normal text-slate-400'> ({spARRAY.filter((f) => f >=  Math.min(...result[2])).length})</span> </label>
              </li>
              
          </ul> */}
      </div>
    </Fragment>
  )
}

export default React.memo(ProductFilter)