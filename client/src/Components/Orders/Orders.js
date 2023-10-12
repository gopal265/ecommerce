import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json } from 'react-router-dom'
import { getOrders } from '../../actions/order'
import Order from '../Order/Order'

const Orders = () => {
    const {orders} = useSelector(state => state.orders)
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrders(user._id))
    },[])
  return (
    <div>
      <div className='center p-3 order-head'>
      <h3 className='center'>Orders</h3>
      </div>
    <div className='container-fluid'>
      <div className='row'>
      {orders !== undefined && orders.map(order =>(
        <div className='col-md-6'>
                    <Order order={order}/>
             </div>

      )
      
      )}
      </div>
     
    </div>
    </div>
  )
}

export default Orders
