import React,{Fragment} from 'react'
import {Indian_FusionWear, Western_Wear,Shop_Occassion,
    WFootwear,Sports_ActiveWear,Lingerie_Sleepwear,
    Beauty_Personal_Care,
  } from '../NavBarSub.js'
import { Link } from "react-router-dom";
import "./Men.css"
const Women = ({show, CMenu, parentCallback}) => {
 
    
  return (
   <Fragment>
       <div className="container-fluid wrapper">
        <div className="row"
          
        >

            <div className=" col-md">
              <h1 className="subitems">Indian&nbsp;&&nbsp;Fusion Wear</h1>
              {Indian_FusionWear.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className="subitems">Belts,&nbsp;Scarves&nbsp;&&nbsp;More</h1>
              <hr className='py-1' />
              <h1 className="subitems">Watches&nbsp;&&nbsp;Wearables</h1>
            </div>

            <div className=" col-md ">
              <h1 className="subitems">Western&nbsp;Wear</h1>
              {Western_Wear.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}

            </div>

            <div className=" col-md ">
              <h1 className="subitems">Shop&nbsp;By&nbsp;Occassion</h1>
              {Shop_Occassion.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Plus&nbsp;Size</h1>
              <hr className='py-1' />
              <h1 className="subitems">Maternity</h1>
              <hr className='py-1' />
              <h1 className='subitems'>Sunglasses&nbsp;&&nbsp;Frames</h1>
            </div>

            <div className="col-md ">
            <h1 className="subitems">Footwear</h1>
              {WFootwear.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
              {Sports_ActiveWear.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}

            </div>

            <div className=" col-md">
            <h1 className="subitems">Lingerie&nbsp;&&nbsp;Sleepwear</h1>
              {Lingerie_Sleepwear.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Beauty&nbsp;&&nbsp;Personal&nbsp;Care</h1>
              {Beauty_Personal_Care.map((data) =>
                <Link to='/products'><li className="data">{data.title}</li></Link>
              )}
            </div>

          </div>

        </div>
      

   </Fragment>
  )
}

export default Women