import React, { Fragment, useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../actions/product'
// import Loader from '../Loader/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import "./Products.css"
import GenderFilter from '../ProductFilter/GenderFilter'
import CategoryFilter from '../ProductFilter/CategoryFilter'
import ColorFilter from '../ProductFilter/ColorFilter'
import NavBar from '../NavBar/NavBar'
import BrandFilter from '../ProductFilter/BrandFilter'
// import Footer from '../Footer/Footer'

const Products = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { wishlist } = useSelector(state => state.wishlist_data)
    const { product, pro, loading, error, length } = useSelector(state =>state.allProducts)
    const [sortvalue, setsortvalue] = useState('Recommended')
    const options = ["Recommended","What`s New","Popularity","Price: High To Low","Price: Low To High","Customer Rating"]
    const Redirect = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const setCurrentPageNo = (e)=>{
        setCurrentPage(e)
        dispatch(getAllProducts(e))
    }

    const handlChange = (event)=>{
            event.preventDefault();
            let sValue = event.target.value
            if(sValue === options[1]){
                datefun(1)
            }
            else if(sValue == options[3]){
                pricefun(-1)
            }
            else if(sValue == options[4]){
                pricefun(1)
            }
            setsortvalue(event.target.value)
            
    }
    function pricefun(e) {
        let url = window.location.search
         
        if (url.includes('?')) {

            if (url.includes('low')) {

                if (url.includes('&low')) {
                    let newurl = url.includes(`&low=1`) ? url.replace(`&low=1`, `&low=${e}`) : null
                    let newurl2 = url.includes(`&low=-1`) ? url.replace(`&low=-1`, `&low=${e}`) : null
                    let newurlsuccess = (newurl === null ? newurl2 : newurl)

                    Redirect(newurlsuccess)
                    dispatch(getAllProducts())
                    //  window.location = newurlsuccess 
                }
                if (url.includes('?low')) {
                    let newurl = url.includes(`?low=1`) ? url.replace(`?low=1`, `?low=${e}`) : null
                    let newurl2 = url.includes(`?low=-1`) ? url.replace(`?low=-1`, `?low=${e}`) : null
                    let newurlsuccess = (newurl === null ? newurl2 : newurl)
                    Redirect(newurlsuccess)
                    dispatch(getAllProducts())
                    //  window.location = newurlsuccess
                }


            } else {


                let newurl = window.location.search += `&low=${e}`

                Redirect(newurl)
                dispatch(getAllProducts())
                //  url += `&low=${e}`
                //  Redirect(url)
                //  window.location = url
            }

        } else {

            //   url += `?low=${e}`

            Redirect(`?low=${e}`)
            dispatch(getAllProducts())



        }

    }

    function datefun(e) {
        let url = window.location.search

        if (url.includes('?')) {

            if (url.includes('date')) {

                if (url.includes('&date')) {
                    let newurl = url.includes(`&date=1`) ? url.replace(`&date=1`, `&date=${e}`) : null
                    let newurl2 = url.includes(`&date=-1`) ? url.replace(`&date=-1`, `&date=${e}`) : null
                    let newurlsuccess = (newurl === null ? newurl2 : newurl)
                    //  window.location = newurlsuccess 
                    Redirect(newurlsuccess)
                    dispatch(getAllProducts())
                }
                if (url.includes('?date')) {
                    let newurl = url.includes(`?date=1`) ? url.replace(`?date=1`, `?date=${e}`) : null
                    let newurl2 = url.includes(`?date=-1`) ? url.replace(`?date=-1`, `?date=${e}`) : null
                    let newurlsuccess = (newurl === null ? newurl2 : newurl)
                    //  window.location = newurlsuccess
                    Redirect(newurlsuccess)
                    dispatch(getAllProducts())
                }


            } else {
                url += `&date=${e}`
                //  window.location = url
                Redirect(url)
                dispatch(getAllProducts())
            }

        } else {

            url += `?date=${e}`
            //   window.location = url
            Redirect(url)
            dispatch(getAllProducts())

        }

    }

    

    const [state, setstate] = useState(false)
    const [state1, setstate1] = useState(false)

    useEffect(() => {
      dispatch(getAllProducts())
  
    }, [location]);

    return (
        <Fragment>
            
            <NavBar />
            <div className=""><span className=''>Home</span>
                <span className=''>{window.location.pathname}</span> </div>
            <div className=""> <span className=" ">NO OF ITEMS</span>
                <span className="">- { loading === false ? product.length : '...'} items</span>  </div>

            {/* Filter__titile div *********************************** */}
            <div className="container-fluid">
                <div className='row'>
                <div className="col-md-2 center-v">FILTERS</div>
                <div className="col-md-7 center-v"><span className={`${location.search !== '' ? 'displayfilter':"hidefilter"}`} onClick={()=> Redirect('')}>Clear Filter</span></div>
                <div className="col-md-3">
                    <div className='sort-wrapper center'>
                        <div className='sort pr-3'>
                            Sort by : 
                        </div>
                   
                        <select value={sortvalue} onChange={(e)=>handlChange(e)} className='sort-options'>
                            <option value={options[0]}>Recommended</option>
                            <option value={options[1]}>What`s New</option>
                            <option value={options[2]}>Popularity</option>
                            <option value={options[3]}>Price: High To Low</option>
                            <option value={options[4]}>Price: Low To High</option>
                            <option value={options[5]}>Customer Rating</option>

                        </select>
                      

                 

                    </div>



                </div>

                </div>
            </div>


            <div className='container-fluid pt-3'>
               <div className='row' >
                <div className="col-md-auto filter-container pl-3">
                    <GenderFilter location={location}/>
                    {    
                        pro  &&
                        <div>
                            <CategoryFilter product={pro} location={location} />
                            <BrandFilter product={pro} location={location} />
                            <ColorFilter product={pro} location={location} />
                         
                            {/* <PriceFilter /> */}
                            {/* <ProductFilter product={pro} location={location} /> */}

                        </div>
                    }

                </div>

                {/* Product DIV *************************************** */}

                <div className="col-md">
                    {
                        loading === true ? ("Loading") :

                            (
                                // ( document.URL.includes('?') ? product.length > 50 : pro.length > 50)
                                loading === false &&
                                <Fragment>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                        {product && product.map((pro) => (
                                        <div className='col-md-3 pb-4'>
                                              <Product product={pro} key={pro._id} />
                                        </div>
                                          ))}

                                        </div>
                                       
                                    </div>
                                    {
                                        window.screen.width >= 1024 && length > 50 ?
                                        <div className='paginationBox font1 border-t-[1px] border-slate-200 py-4 hidden 2xl:block xl:block lg:block relative'>
                                        <span className='left-0 absolute text-sm text-[grey]'>Page {currentPage} of {Math.ceil(length / 50)}</span>
                                        {
                                            currentPage === 1 ? "" :
                                            <button className=' mr-10  text-lg flex items-center border-[1px] border-slate-300 py-1 px-5 rounded-[4px]
                                            hover:border-[black]' onClick={()=>(setCurrentPage(currentPage-1), setCurrentPageNo(currentPage-1))} ><h1>Previous</h1>  </button>
                                        }
                                       
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={50}
                                        totalItemsCount={length}
                                        onChange={setCurrentPageNo}
                                        nextPageText={false}
                                        prevPageText={false}
                                        firstPageText={false}
                                        lastPageText={false}
                                        itemClassFirst='hidden'
                                        itemClassPrev='hidden'
                                        itemClassNext='hidden'
                                        itemClassLast='hidden'
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        activeClass="pageItemActive"
                                        activeLinkClass="pageLinkActive"
                                    />
                                    {
                                        currentPage === Math.ceil(pro.length / 50) ? '' : 
                                        <button className=' ml-10 text-lg flex items-center border-[1px] border-slate-300 py-1 px-5 rounded-[4px]
                                        hover:border-[black]' onClick={()=>(setCurrentPage(currentPage+1), setCurrentPageNo(currentPage+1))}><h1>Next</h1> </button>
                                    }
                                   
                                 </div> 
                                 : ""
                                    }
                                    
                                </Fragment>)
                    }
                   
                </div>
                </div>
               
            </div>
         

            
{/* <Footer/> */}
        </Fragment>

    )
}

export default Products