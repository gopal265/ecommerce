import React, { Fragment, useState, useEffect } from 'react'
// import elementClass from 'element-class'
import './bag.css'
import {useSelector, useDispatch} from 'react-redux'
import {getbag, getqtyupdate, deletebag} from '../../actions/order'
import { getuser } from "../../actions/auth";
import { useNavigate, Link } from 'react-router-dom'
import Emptybag from './Emptybag'
import NavBar from "../NavBar/NavBar"

const Bag = () => {
    
    const {loading:userloading, user, isAuthentication } = useSelector(state => state.user)
    const {bag, loading:bagloading} = useSelector(state => state.bag_data)
    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const steps = ['10% Instant Discount on Canara Bank Credit and Debit cards on a min spend of Rs 2000. TCA',
    '15% Cashback up to Rs 500 on first ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Cashback up to Rs 300 on second or further ZestMoney transaction on a min spend of Rs 2,500.TCA',
    '10% Instant Discount on Bank Of Baroda Credit cards on a min spend of Rs 3,000.TCA',
    '5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA',
    '10% Cashback upto Rs 100 on Paytm Postpaid transaction on a min spend of Rs 1000 . TCA',
    '15% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA',
    '10% Cashback upto Rs 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000 . TCA',
    'Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 999.Use code MBK500 on Mobikwik. TCA',
    '5% Cashback upto Rs 150 on a minimum spend of Rs 1,500 with PayZapp. TCA',

];
const [mrp, setmrp] = useState(0)
const [sp, setsp] = useState(0)
const [ds, setds] = useState(0)

if (bagloading === false && state1 === false && bag !== null ) {
    setstate1(true)
    console.log(bag.orderItems.length)
    let va = 0
    let ss = 0
    for (let i = 0; i < bag.orderItems.length; i++) {
        va += bag.orderItems[i].product.mrp * bag.orderItems[i].qty
       ss += bag.orderItems[i].product.sellingPrice * bag.orderItems[i].qty
    }
    setmrp(va)
    setsp(ss)
    let dd = va - ss
    setds(dd)
    
}



const [qtyvalue,setQtyvalue] = useState(1)
const [id,setid] = useState('')

function updateqty(e) {
    
   if (e.keyCode == 13) {
    const Data ={
        id:id,
        qty: Number(qtyvalue)
    }
    dispatch(getqtyupdate(Data))
    dispatch(getbag(user._id))
   
   }
    
   
}

const [state3, setstate3] =useState(false)
const {deletebag:baggggg} = useSelector(state=>state.deletebag)

if (state3=== false && baggggg === true && user !==null) {
    dispatch(getbag(user._id))
    setstate1(false)
    setstate3(true)
}

function place() {
    navigate('/address/bag',{state:{mrp:mrp,sp:sp,ds:ds,items:bag.orderItems.length}})
}


function delbag(user, product) {
    console.log(user)
    const option = {
        product: product,
        user:user
    }
    
    dispatch(deletebag(option))
    setstate3(false)
    
}



useEffect(() => {
    if (state2 === false) {
        if (user !==null) {
            dispatch(getuser())
        }
        setstate2(true)
    }
  
    if (state === false) {
        if (userloading === false) {
            if (isAuthentication === false && user == null) {
                // Alert.info('Log in to access BAG')
                setstate(true)
                
            } else {
                dispatch(getbag(user._id))
                setstate(true)
            }

        }
    }
    
}, [dispatch, user, state,userloading,isAuthentication, navigate ]);

    return (
        <Fragment>
            <NavBar />
            { isAuthentication === true && user !== null?
                
                <Fragment>{
                    bagloading === false &&

            <Fragment>
            {    
                (bag !== null  && bag.orderItems.length > 0) ?
                <Fragment >
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
        {/* ***************************************************************************************************************** */}
                <div className='container pt-4'>
                    <div className='row'>
                <div className="col-md-7 bag-border">
                    <div className=''>
                        <div className='bag-head'>
                            Available Offers</div>
                        <ul className='bag-offers'>
                        {
                            steps.map((e, i)=>
                            <li className=''>{e}</li>
                            )
                        }
                        </ul>
                        
                    </div>
        
                    <div className=''>
                        {
                            bagloading === false && bag.orderItems.map((e)=>
        
                            <div className='bag-product p-2'>
                            <div className="bag-product-img">
                              <Link to={`/products/${e.product._id}`}>  <img src={e.product.images[0]} alt="" className=' '/></Link>
                            </div>
                            <div className="bag-product-content pl-2">
                                <h1 className='bag-product-brand'>{e.product.brand}</h1>
                                <h2 className='bag-product-title'> {e.product.title} </h2>
                                <div className='bag-product-seller'>Sold by: {e.product.brand}</div>
                               
                                <div className='bag-product-size pt-2'> <span className=''>Size:</span>  {e.product.size}  <span className='ml-10'>Qty:</span> 
                                <input type="number" name="quantity" id="quantity" min='1' max={e.product.stock}  defaultValue={e.qty} 
                                className='bag-product-qty'onChange={(f)=>(setQtyvalue(f.target.value) ,setid(e._id))} onKeyUp={(e)=>updateqty(e)}  /> </div>
                               
                                <div className='bag-product-brand pt-1'> <span className="pr-2">&#8377; {Math.round(e.product.sellingPrice)}</span><span className="bag-product-seller">&#8377; {e.product.mrp}</span><span className="ml-2 text-[#f26a10]">&#8377; {-Math.round(e.product.mrp - e.product.sellingPrice)} OFF</span> </div>
                                <p className='bag-product-seller pt-1'>7 days return Available</p>
                                
                                
                            </div>
                            <div className='bag-delete'>
                            <span className='' onClick={()=>delbag( user._id, e.product._id)} ><i class="fa-solid fa-xmark"></i></span>
                            </div>
                        </div>
                            )
        
                        }
                    </div>
                </div>
        
                <div className="col-md-4 pl-3 pr-3">
                     <div className='mt-2 '>
                         <h5 className=' '>PRICE DETAILS<span className=''> ({bagloading === false && bag.orderItems.length} items)</span></h5>
                         <div className='center-v-sb pb-2'>
                         <div className=''>Total MRP</div>
                         <div className=''>&#8377;&nbsp;{mrp}</div>
                         </div>

                         <div className='center-v-sb pb-2'>
                         <div className=' mt-2'>Discount on MRP</div>
                         <div className=''>&#8377;&nbsp;{Math.round(ds)}</div>
                         </div>

                         <div className='center-v-sb pb-2'>
                         <div className=' mt-2 mb-2'> Convenience Fee</div>
                         <div className=''><span className=''>&#8377;&nbsp;99</span> <span className=''>FREE</span> </div>

                         </div>

                        <hr />

                         <div className='center-v-sb pb-4 pt-2'>
                         <div className=''>Total Amount</div>
                         <span className=''>&#8377;&nbsp;{Math.round(sp)}</span>
                         </div>
                        <div className='center'>
                        <button className='order-button' onClick={place} > PLACE ORDER </button>

                        </div>
                       
                    </div>   
        
                </div>
                </div>
                </div>
                    </Fragment>

                :

                <Emptybag/> 

                
            }
                </Fragment>

        }
        </Fragment>
           
            :

            <Emptybag/>
        }
        </Fragment>
    )
}

export default Bag