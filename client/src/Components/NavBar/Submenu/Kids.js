import React,{Fragment} from 'react'
import {Boys_Clothing, Girls_Clothing,KFootwear,
    Toys,Infants,Kids_Accessories,
    KBrands,
  } from '../NavBarSub.js'
import { Link } from "react-router-dom";
import "./Men.css"
const Kids = ({show, CMenu, parentCallback}) => {

    
  return (
    <Fragment>
  
   
       <div className="container-fluid wrapper">
        <div className="row">

            <div className="col-md">
              <h1 className="subitems">Boys&nbsp;Clothing</h1>
              {Boys_Clothing.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className="col-md ">
              <h1 className="subitems">Girls&nbsp;Clothing</h1>
              {Girls_Clothing.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className="col-md ">
              <h1 className="subitems">Footwear</h1>
              {KFootwear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Toys</h1>
              {Toys.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" col-md">
            <h1 className="subitems">Infants</h1>
              {Infants.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Home&nbsp;&&nbsp;Bath</h1>
              <hr className='py-1' />
              <h1 className="subitems">Personal&nbsp;Care</h1>

            </div>

            <div className=" col-md">
            <h1 className="subitems">Kids&nbsp;Accessories</h1>
              {Kids_Accessories.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Brands</h1>
              {KBrands.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
             
              
            </div>

          </div>

        </div>
      

   </Fragment>
  )
}

export default Kids