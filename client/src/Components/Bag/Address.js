import React, { Fragment, useEffect, useState } from 'react'
import { getuser, updatedetailsuser } from "../../actions/auth";
import { getbag } from '../../actions/order'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Address = () => {
  const [state, setstate] = useState(false)
  const [state1, setstate1] = useState(false)
  const [edit, setedit] = useState('hidden')
  const { loading: userloading, user, isAuthentication } = useSelector(state => state.user)
  const { bag, loading: bagloading } = useSelector(state => state.bag_data)
  const { success } = useSelector(state => state.updateuser2)
  const redirect = useNavigate()
  const dispatch = useDispatch()

  const [mrp, setmrp] = useState(0)
  const [sp, setsp] = useState(0)
  const [ds, setds] = useState(0)
  if (bagloading === false && state1 === false) {
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


  const [name, setname] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [pincode, setpincode] = useState('')
  const [address1, setaddress1] = useState('')
  const [address2, setaddress2] = useState('')
  const [citystate, setcitystate] = useState('')


  function saveaddress() {
    const option = {
      name: name,
      phonenumber: Number(phonenumber),
      pincode: Number(pincode),
      address1: address1,
      address2: address2,
      citystate: citystate
    }

    dispatch(updatedetailsuser(option, user._id))
    setedit('hidden')
    dispatch(getuser())
  }

  useEffect(() => {
    if (!user) {
      dispatch(getuser())
    }


    if (state === false) {
      if (userloading === false) {
        if (isAuthentication === false) {
          redirect('/Login')
          setstate(true)

        } else {
          dispatch(getbag(user._id))
          setname(user.name)
          setphonenumber(user.phonenumber)
          setpincode(user.address.pincode)
          setaddress1(user.address.address1)
          setaddress2(user.address.address2)
          setcitystate(user.address.citystate)
          setstate(true)
        }

      }
    }
  }, [dispatch, user, state, userloading, isAuthentication, redirect]);
  return (
    <Fragment>
      {
        (userloading === false) &&

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

          <div className=' '>
            <div className="col-span-8">
              <h1 className=' '>Select Delivery Address</h1>

              <h1 className=''>DEFAULT ADDRESS</h1>

              <div className=''>
                <div className=''><input type="radio" className='' checked={true} /> <h1 className=''> {user.name} </h1></div>

                <h1 className=''>{user.address.address1}, {user.address.address2}</h1>
                <h1 className=''>{user.address.citystate}, {user.address.pincode}</h1>
                <h1 className=''>Mobile:&nbsp; <span className='font1'> {user.phonenumber}</span></h1>

                <li className=''>pay on delivery Available</li>

                <button className='' onClick={() => setedit('block')}>EDIT</button>

              </div>
            </div>

            <div className=" ">
              {
                bagloading === false &&
                <div>
                  <h1 className=''>DELIVERY ESTIMATES</h1>
                  {
                    bag.orderItems.map((e) =>
                      <div className=''>
                        <div className="col-span-2 "><img src={e.product.images[0].url} alt="" className='w-full' /></div>
                        <div className=""> <h1> Estimated delivery by &nbsp;<span className='font-bold'>Tommorrow</span> </h1></div>
                      </div>
                    )
                  }

                  <div className="col-span-5 text-[14px] ">
                    <div className='mt-2 '>
                      <h1 className='font1 text-[#535766] text-[12px]'>PRICE DETAILS<span className='text-[12px]'>&nbsp;({bagloading === false && bag.orderItems.length} items)</span></h1>
                      <div className='text-[#535766] relative mt-2'>Total MRP<span className='absolute right-0'>&#8377;&nbsp;{mrp}</span></div>
                      <div className='text-[#535766] relative mt-2'>Discount on MRP<span className='absolute right-0 text-[#0db7af]'>-&#8377;&nbsp;{Math.round(ds)}</span></div>
                      <div className='text-[#535766] relative mt-2 mb-2'> Convenience Fee<span className='absolute right-0 '><span className='line-through'>-&#8377;&nbsp;99</span> <span className='no-underline text-[#0db7af]'>FREE</span> </span></div>
                      <div className='py-2 border-t-[1px] border-slate-200 bg-white 2xl:relative xl:relative lg:relative'>
                        <div className='relative font1 text-base'>Total Amount<span className='absolute right-0'>&#8377;&nbsp;{Math.round(sp)}</span></div>

                        <button className='mt-2 bg-[#ff3f6c] text-center w-full py-3 font1 text-bold text-white'> CONTINUE </button>
                      </div>
                    </div>

                  </div>
                </div>
              }

            </div>
          </div>

          <div className={`${edit} fixed top-0 bg-[#24242468] w-full h-full z-10`} >

            <div className='w-full 2xl:w-[31.33%] xl:w-[31.33%] lg:w-[31.33%] 2xl:mx-auto xl:mx-auto lg:mx-auto 2xl:h-max xl:h-max 
                lg:h-max h-full bg-white 2xl:mt-4 xl:mt-4 lg:mt-4 rounded-md border-[1px] border-slate-200  pt-5'>
              <h1 className='font1 font-bold flex relative px-4 border-b-[1px] pb-5'><span className='text-[#4f525d] text-[14px]'>EDIT ADDRESS</span><span className='absolute right-4 text-xl cursor-pointer' onClick={() => setedit('hidden')}></span></h1>
              <h1 className='font1 text-[13px] px-4 mt-4'>CONTACT DETAILS</h1>
              <div className='px-4'>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Name*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Mobile No*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
                </div>
                <h1 className='font1 text-[13px] px-4 mt-4'>ADDRESS</h1>

                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Pincode*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.pincode} onChange={(e) => setpincode(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Address ( House No, Building, Street, Area )*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.address1} onChange={(e) => setaddress1(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Address 2 </label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.address2} onChange={(e) => setaddress2(e.target.value)} />
                </div>
                <div className='mt-6 relative'>
                  <label htmlFor="name" className='bg-white left-4 -top-4 text-[#94969f] text-[12px] px-1 z-10 absolute'>Locality / Town*</label>
                  <input type="text" className=' border-[1px] border-slate-300 w-full rounded-md text-[#282c3f] py-3 px-4 text-xs -mt-2' defaultValue={user.address.citystate} onChange={(e) => setcitystate(e.target.value)} />
                </div>

              </div>

              <div className='py-2 px-2 bg-white mt-4'>
                <button className='bg-[#ff3f6c] font1 text-white text-base font-bold w-full py-3 ' onClick={saveaddress}>SAVE ADDRESS</button>

              </div>

            </div>



          </div>
        </Fragment>

      }

    </Fragment>
  )
}

export default Address