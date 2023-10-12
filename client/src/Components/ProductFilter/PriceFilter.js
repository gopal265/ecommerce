import React from 'react'

const PriceFilter = ({product,location}) => {
    let price =[]
    const getPrice = () => {
        for (let i = 0; i < product.length; i++) {
    
          price.push(product[i].sellingPrice)
        }
    
      }
    getPrice();
    function price1fun(e){
        let url = document.URL
        if (url.includes('?')) {
          if (url.includes(`${e+1}`)) {
            let newurl = url.includes(`&sellingPrice[$lte]=${e+1}`) ? url.replace(`&sellingPrice[$lte]=${e+1}`,'') : null
            let newurl2 = url.replace(`?sellingPrice[$lte]=${e+1}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            window.location = newurlsuccess 
           }else{
             url += `&sellingPrice[$lte]=${e+1}`
             window.location = url
           }
    
        }else{
          url += `?sellingPrice[$lte]=${e+1}`
          window.location = url
      
        }
    }
    function price2fun(e,f){
 
        let url = document.URL
        if (url.includes('?')) {
          if (url.includes(`${e+1}`)) {
            let newurl = url.includes(`&sellingPrice[$gte]=${e+1}&sellingPrice[$lte]=${f+1}`) ? url.replace(`&sellingPrice[$gte]=${e+1}&sellingPrice[$lte]=${f+1}`,'') : null
            let newurl2 = url.replace(`?sellingPrice[$gte]=${e+1}&sellingPrice[$lte]=${f+1}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            window.location = newurlsuccess 
           }else{
             url += `&sellingPrice[$gte]=${e+1}&sellingPrice[$lte]=${f+1}`
             window.location = url
           }
      
        }else{
          url += `?sellingPrice[$gte]=${e+1}&sellingPrice[$lte]=${f+1}`
          window.location = url
      
        }
      }
      function price3fun(e){
        let url = document.URL
        if (url.includes('?')) {
          if (url.includes(`${e+1}`)) {
            let newurl = url.includes(`&sellingPrice[$gte]=${e+1}`) ? url.replace(`&sellingPrice[$gte]=${e+1}`,'') : null
            let newurl2 = url.replace(`?sellingPrice[$gte]=${e+1}`,'')
            let newurlsuccess =  (newurl === null ? newurl2 : newurl)
            window.location = newurlsuccess 
           }else{
             url += `&sellingPrice[$gte]=${e+1}`
             window.location = url
           }
      
        }else{
          url += `?sellingPrice[$gte]=${e+1}`
          window.location = url
      
        }
      }      
  return (
    <div>
         <ul className={`pl-8 border-b-[1px] border-slate-200 py-4  overflow-hidden relative `}>
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
              
              <label className='font1 text-sm ml-2 mr-4 mb-2'> Rs. {Math.floor(Math.min(...result[2]))} to Rs. {Math.floor(Math.max(...result[2]))} <span className='text-xs font-serif font-normal text-slate-400'> ({price.filter((f) => f >=  Math.min(...result[2])).length})</span> </label>
              </li>
              
          </ul>
    </div>
  )
}

export default PriceFilter
