import React from 'react'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import "./Home.css"
import HomeGit from './HomeGift/HomeGit'
import TrendBrands from './TrendBrands/TrendBrands'
import Categories from './Categories/Categories'
import NavBar from '../NavBar/NavBar'
import ProfileHover from './ProfileHover/ProfileHover'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
   const navigate = useNavigate()
   const gifts = [
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/cef0d9ed-5f6b-4fea-af6f-5a7431ea25c11691045352299-Makeup.png',
    'https://assets.myntassets.com/f_webp,w_192,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/38f1add0-b7b9-4764-8156-625b026049a41691045352290-Handbags.png',
    'https://assets.myntassets.com/f_webp,w_192,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/728be17b-8a33-4cd6-95b1-4c612048d7961691045352269-Ethnic.png',
    'https://assets.myntassets.com/f_webp,w_192,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/24329cef-087e-441e-acd6-bc7e05eefc891691045352279-Ethnic_Wear.png',
    'https://assets.myntassets.com/f_webp,w_192,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/a4d4675c-0bfc-4250-8a7a-bfbdd62073f01691045352399-Watches_.png'
   ]

   const catgegories = ['https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg',
   'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg',
   'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg',
   'https://assets.myntassets.com/f_webp,w_160,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg',
   'https://assets.myntassets.com/f_webp,w_160,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg',
   'https://assets.myntassets.com/f_webp,w_160,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg'
]
  return (
    <div>
      <NavBar />
      <div  onClick={()=> navigate('/products')} >
      <HomeCarousel />
      </div>

     <h2 className='home-heading'>Medal Worthy Brands</h2>

     <div className='container-fluid'> 
        <div className='row'>
           { gifts.map( gift =>(
            <div className='col-sm gift'  onClick={()=> navigate('/products')} >
                <HomeGit img_url={gift} />
                </div>

           ))}
        </div>
        <h2 className='home-heading'>Trending Global Brands</h2>
      <div onClick={()=> navigate('/products')}>
      <TrendBrands    />
      </div>
        <h2 className='home-heading'>Shop By Categories</h2>
        <div className='container-fluid'>
         <div className='row'>
         {
         catgegories.map(cat =>(
            <div className='col-md-2 col-sm-3 gift ' onClick={()=> navigate('/products')} >
               <Categories img_url={cat} />
               </div>
         ))
        }
        </div>
        </div>

     </div>
    </div>
  )
}

export default Home
