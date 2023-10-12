import React from 'react';
import './Order.css';

const Order = ({ order }) => {
  return (
    <div>
      <div className='order-wrapper p-3'>
        <div className='order-img'><img src={order.orderItem.images[0]} alt={order.orderItem.title} /></div>
        <div className='order-details pl-3 pr-5'>
          <div className='product-name'>Brand :{order.orderItem.brand}</div>
          <div className=''>Product Name: {order.orderItem.title}</div>
          <div className=''>Price : {order.orderItem.sellingPrice*order.qty} </div>
          <div className='quantity'>Quantity: {order.qty}</div>
          </div>
          <div>
          <div className='payment-info '>
            <div className='product-name'>Payment Info</div>
            <div>Type :{order.paymentInfo}</div>
            <div className='status'>Status : {order.status}</div>
          </div>
          <div className='order-status'>Order Status :{order.orderStatus}</div>
          </div>
      
      </div>
    </div>
  );
}

export default Order;
