import React,{Fragment} from 'react'
import {BedLinenFurnishing, Flooring,Bath,
    LampsLighting,HomeDécor,KitchenTable,
    Storage,HBrands
  } from '../NavBarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Home = ({show, Menu, parentCallback}) => {

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
    <Fragment>

       <div className="Menu">
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className="CMenu"
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className="sub-items">

            <div className="sub-menu-items">
              <h1 className="subitems">Bed&nbsp;Linen&nbsp;&&nbsp;Furnishing</h1>
              {BedLinenFurnishing.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className="subitems">Flooring</h1>
              {Flooring.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

            <div className="sub-menu-items">
              <h1 className="subitems">Bath</h1>
              {Bath.map((data) =>
                <Link to='/products'><li className=""onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className="subitems">Lamps&nbsp;&&nbsp;Lighting</h1>
              {LampsLighting.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className="sub-menu-items">
              <h1 className="subitems">Home&nbsp;Décor</h1>
              {HomeDécor.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Cushions&nbsp;&&nbsp;Cushion&nbsp;Covers</h1>
              <hr className='py-1' />
              <h1 className="subitems">Curtains</h1>
              <hr className='py-1' />
              <h1 className="subitems">Home&nbsp;Gift&nbsp;Sets</h1>
            </div>

            <div className=" sub-menu-items ">
            <h1 className="subitems">Kitchen&nbsp;&&nbsp;Table</h1>
              {KitchenTable.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Storage</h1>
              {Storage.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className="sub-menu-items ">
            <h1 className="subitems">Brands</h1>
              {HBrands.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
             
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
      </Fragment>
 
  )
}

export default Home