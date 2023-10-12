
import React, { useState,useCallback } from 'react'
import "./NavBar.css"
import { useNavigate } from 'react-router-dom'
import ProfileHover from '../Home/ProfileHover/ProfileHover'
import Search from './Search';
import Men from "./Submenu/Men"
import Women from "./Submenu/Women"
import Kids from "./Submenu/Kids"
import Beauty from "./Submenu/Beauty"

const NavBar = () => {
    const [displayProfile, setDisplayProfile] = useState(false)
    const navigate = useNavigate();
    const [Menu1, setMenu1] = useState('hidden')
    const [Menu2, setMenu2] = useState('hidden')
    const [Menu3, setMenu3] = useState('hidden')
    const [Menu4, setMenu4] = useState('hidden')
    const [Menu5, setMenu5] = useState('hidden')
    const [Menu6, setMenu6] = useState('hidden')
    const [Menu7, setMenu7] = useState('hidden')
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)

    const callback = useCallback((Menu, v) => {
        setMenu1(Menu);
        setShow1(v)
      }, []);
    
      const Callbackmenu2 = useCallback((Menu2, v) => {
        setMenu2(Menu2);
        setShow2(v)
      }, []);
    
      const Callbackmenu3 = useCallback((Menu3, v) => {
        setMenu3(Menu3);
        setShow3(v)
      }, []);
    
      const Callbackmenu4 = useCallback((Menu4, v) => {
        setMenu4(Menu4);
        setShow4(v)
      }, []);
    
      const Callbackmenu5 = useCallback((Menu5, v) => {
        setMenu5(Menu5);
        setShow5(v)
      }, []);
    
      const Callbackmenu6 = useCallback((Menu6, v) => {
        setMenu6(Menu6);
        setShow6(v)
      }, []);
    
      const Callbackmenu7 = useCallback((Menu7, v) => {
        setMenu7(Menu7);
        setShow7(v)
      }, []);
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-white pt-3 pb-3">
                <div className="navbar-brand" onClick={() => navigate('/')}>ShopCart</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item " onMouseEnter={() => (setMenu1('block'))} onMouseLeave={() => (setMenu1('hidden'))}
>
                            <div className="nav-link" >Men</div>

                        </li>
                        <li className="nav-item" onMouseEnter={() => (setMenu2('block'))} onMouseLeave={() => (setMenu2('hidden'))}
>
                            <div className="nav-link" >Women</div>
                        </li>

                        <li className="nav-item" onMouseEnter={() => (setMenu3('block'))} onMouseLeave={() => (setMenu3('hidden'))}
>
                            <div className="nav-link " >Kids</div>
                        </li>

                   

                        <li className="nav-item" onMouseEnter={() => (setMenu4('block'))} onMouseLeave={() => (setMenu4('hidden'))}>
                            <div className="nav-link " >Beauty</div>
                        </li>
                    </ul>
                    <form className="form-inline ">
                        <Search />

                        <div className='navbar-icon center-h navbar-icon' onClick={() => setDisplayProfile(!displayProfile)} >
                            <i class="fa-regular fa-user "></i>
                            <p>Profile</p>
                        </div >

                        <ProfileHover display={displayProfile} />

                        <div className='navbar-icon center-h navbar-icon' onClick={() => navigate('/wishlist')} >
                            <i class="fa-regular fa-heart"></i>
                            <p>WishList</p>
                        </div>

                        <div className='navbar-icon center-h navbar-icon' onClick={() => navigate('/bag')}>
                            <span class="material-symbols-outlined">shopping_bag</span>
                            <p>Bag</p>
                        </div>

                    </form>
                </div>
                <div className={` navbar-men ${Menu1 === 'block' || show1 === true ? "block" : 'hidden'}  `} onMouseEnter={()=>setShow1(true)} onMouseLeave={()=> setShow1(false)}>
                <Men />
                </div>

                <div className={`navbar-men ${Menu2 === 'block' || show2 === true ? "block" : 'hidden'}  `} onMouseEnter={()=>setShow2(true)} onMouseLeave={()=> setShow2(false)}>
                <Women />
                </div>

                <div className={`navbar-men ${Menu3 === 'block' || show3 === true ? "block" : 'hidden'}  `} onMouseEnter={()=>setShow3(true)} onMouseLeave={()=> setShow3(false)}>
                <Kids />
                </div>

                <div className={`navbar-men ${Menu4 === 'block' || show4 === true ? "block" : 'hidden'}  `} onMouseEnter={()=>setShow4(true)} onMouseLeave={()=> setShow4(false)}>
                <Beauty />
                </div>
              
            </nav>
        </div>
    );
};

export default NavBar
