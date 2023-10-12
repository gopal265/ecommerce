import React, {Fragment} from 'react'
import "./SideBar.css"
const Sidebar = () => {
  return (
    <Fragment>
        <div className=''>
         <ul>
          <div className='sidebar-row'>
          <li className='sidebar-head'>OverView</li>
          </div>
          <hr />
          

          <div className='sidebar-row'>
          <li className='sidebar-head'>orders</li>
           <li className='sidebar-item'>Orders & Returns</li>
          </div>
           
           <hr />
          <div className='sidebar-row'>
          <li className='sidebar-head'>account</li>
           <li className='sidebar-item'>Profile</li>
           <li className='side-item'>Saves Cards</li>
           <li className='side-item'>Addresses</li>
           <li className='side-item'>Myntra Insider</li>
          </div>
        
           <hr />
          <div className='sidebar-row'>
          <li className='sidebar-head'>Legal</li>
           <li className='side-item'>Terms of Use</li>
           <li className='side-item'>Privacy Policy</li>
          </div>
        

         </ul>
        </div>
    </Fragment>
  )
}

export default Sidebar