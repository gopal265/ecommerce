import React,{Fragment} from 'react'
import {
    Topwear, indian_festive, bottomwear,
    Innerwear_Sleepwear, Footwear,
    Sports_Active_Wear, Gadgets, Fashion_Accessories,
  } from '../NavBarSub.js'
  import { Link } from "react-router-dom";
import './Men.css'
const Men = () => {
 
    
  return (
   <Fragment>
       <div className="container-fluid wrapper">
        <div className="row">
      
            <div className="col-md">
              <h5 className="subitems">Topwear</h5>
              {Topwear.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h5 className="subitems">Indian&nbsp;&&nbsp;Festive&nbsp;Wear</h5>
              {indian_festive.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}
            </div>
            <div className=" col-md">
              <h5 className="subitems">Bottomwear</h5>
              {bottomwear.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h5 className="subitems">Innerwear&nbsp;&&nbsp;Sleepwear</h5>
              {Innerwear_Sleepwear.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h5 className="subitems">Plus&nbsp;Size</h5>

            </div>

            <div className=" col-md ">
              <h5 className="subitems">Footwear</h5>
              {Footwear.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h5 className="subitems">Personal&nbsp;Care&nbsp;&&nbsp;Grooming</h5>
              <hr className='py-1' />
              <h5 className="subitems">Sunglasses&nbsp;&&nbsp;Frames</h5>
              <hr className='py-1' />
              <h5 className="subitems">Watches</h5>
            </div>
            <div className=" sub-menu-items ">
            <h5 className="subitems">Sports&nbsp;&&nbsp;Active&nbsp;Wear</h5>
              {Sports_Active_Wear.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h5 className="subitems">Gadgets</h5>
              {Gadgets.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}

            </div>
            <div className=" col-md">
            <h5 className="subitems">Fashion&nbsp;Accessories</h5>
              {Fashion_Accessories.map((data) =>
                <Link to="/products"><li className="data">{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h5 className="subitems">Bags&nbsp;&&nbsp;Backpacks</h5>
              <hr className='py-1' />
              <h5 className="subitems">Luggages&nbsp;&&nbsp;Trolleys</h5>
            </div>

      

        </div>
      
      </div>
   </Fragment>
  )
}

export default Men