import React,{Fragment} from 'react'
import {Makeup, SkincareBathBody,Haircare,
    Fragrances,HairStraightener,MenGrooming,
    BeautyGiftMakeupSet,BTopBrands
  } from '../NavBarSub.js'
import { Link } from "react-router-dom";
import "./Men.css"
const Beauty = () => {
    
  


  return (
    
   <Fragment>
      
        <div className="row wrapper">
         

            <div className="col-md-auto">
              <h1 className="subitems">Makeup</h1>
              {Makeup.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
             
            </div>

            <div className="col-md-auto ">
              <h1 className="subitems">Skincare,&nbsp;Bath&nbsp;&&nbsp;Body</h1>
              {SkincareBathBody.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className="subitems">Baby&nbsp;Care</h1>
              <h1 className="subitems">Masks</h1>

            </div>

            <div className="col-md-auto">
              <h1 className="subitems">Haircare</h1>
              {Haircare.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className="py-1" />
              <h1 className="subitems">Fragrances</h1>
              {Fragrances.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
            </div>

            <div className="col-md-auto">
            <h1 className="subitems">Hair&nbsp;Straightener</h1>
              {HairStraightener.map((data) =>
                <Link to='/products'><li className="py-1">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Men's&nbsp;Grooming</h1>
              {MenGrooming.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Beauty&nbsp;Gift&nbsp;&&nbsp;Makeup&nbsp;Set</h1>
              {BeautyGiftMakeupSet.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Premium&nbsp;Beauty</h1>
              <h1 className="subitems">Wellness&nbsp;&&nbsp;Hygiene</h1>
            </div>

            <div className=" col-md-auto">
            <h1 className="subitems">Top&nbsp;Brands</h1>
              {BTopBrands.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              
            </div>

          </div>

        
     
 </Fragment>
   
  )
}

export default Beauty