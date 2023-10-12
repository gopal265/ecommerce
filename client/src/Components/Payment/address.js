import React, { Fragment, useState } from 'react';
import { set } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link from React Router
import AddAddress from './AddAddress';
import EditAddress from './EditAddress';
import "./address.css"

const AddressCheckout = () =>{
   const {user,loading} = useSelector(state => state.user)
   const [edit,setEdit] = useState(false)
   const [add,setAdd] = useState(false)
   const location = useLocation()
   const state = location.state
   const navigate = useNavigate()
   const date = new Date()
    return (
      <Fragment>
      
        <div className='container-fluid bag-nav'>
                    <div className='row pt-3 pb-3'>
                        <div className='col-md-2'>ShopCart</div>
                        <div className='col-md-8 center'>
                        <span className="">BAG</span> ----------&nbsp;
                        <span className="">ADDRESS</span> ---------- &nbsp;
                        <span className="">PAYMENT</span>
                     </div>
                     <div className='col-md-2'>
                     <span className=''>100% SECURE</span> 
                   </div>
                    </div>

                </div>
          <div className='container pt-4'>
            <div className="row">
              <div className='col-6'>
                <h3>Select Delivery Address</h3>
                <div>
                  {!loading && user.address !== undefined && !edit ? (
                    

                    <div>
                      <h5>ADDRESS</h5>
              <div>
                <div id="name">
                  <div>
                    <h4>{user.firstName + ' '+ user.lastName}</h4>
                  </div>
                </div>
                <p>
                   
                   
                
                    <div>{user.address.address1}</div>
                    <div>{user.address.address2}</div>
                    <div>{user.address.city}</div>
                    <div>{user.address.pincode}</div>

                    
                </p>
                <p>
                  Mobile No: <b>{user.phoneNumber}</b>
                </p>
                      </div>
                      
                </div>
                  ) :(
                      <div>

                      <h5 onClick={()=>setAdd(true)}>ADD ADDRESS</h5>
                      {  add &&
                        <AddAddress task ={add} changetask={setAdd}/>
                        
                      }
                      { edit && 
                        <EditAddress task={edit} changetask={setEdit} />
                         

                      }
                      </div>
                  )
}
                  

              </div>
              
                <p>Pay on Delivery</p>
                <div id="option">
                  <div onClick={()=>setEdit(true)}>EDIT</div>
                </div>
              </div>
            
            <div className='col-6'>
              <div id="itemDiv">
                <h5>DELIVERY ESTIMATES</h5>
                Delivery Between {(date.getDate())+'-'+(date.getMonth()+1)+"-"+date.getFullYear()} to {(date.getDate()+2)+'-'+(date.getMonth()+1)+"-"+date.getFullYear()}
                <br />
              </div>
              <div onClick={()=> navigate('/payment',{state:state})}> 
                <button  id="place" className='btn place-button'>CONTINUE</button>
              </div>
            </div>
            </div>
          </div>
   
      </Fragment>
    );
  }


export default AddressCheckout;