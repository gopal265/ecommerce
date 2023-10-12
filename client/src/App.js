import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Overview from "./Components/Login/DashBoard/OverView"
import Registeruser from "./Components/Login/RegisterUser"
import VerifyOtp from "./Components/Login\/VerifyOtp"
import Home from './Components/Home/Home'
import UpdateUser from './Components/Login/UpdateUser';
import { useEffect } from 'react';
import Ppage from './Components/Productpage/Ppage';
import Products from './Components/Products/Products';
import Wishlist from './Components/WishList/WishList';
import Bag from './Components/Bag/Bag';
import AddressCheckout from './Components/Payment/address';
import PaymentPage from './Components/Payment/payment';
import ConfirmPayment from "./Components/Payment/end"
import OTPVerification from './Components/Payment/otp';
import { SUCCESS_LOGOUT } from './constants/userConstants';
import Orders from './Components/Orders/Orders';
function App() {
  const {user} = useSelector(state => state.user)
  
  return (
    <div className="App app-width">
      <BrowserRouter >
      
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/verifyOtp' Component={VerifyOtp} />
      <Route path='/registerUser' Component={Registeruser} />
      <Route path='/dashboard'  element={<Overview user={user} />} />
      <Route path='/updateUser' Component={UpdateUser} />
      <Route path='/products' Component={Products}/>
      <Route path='/products/:id' element={ <Ppage/>}/>
      <Route path='/wishlist' Component={Wishlist} />
      <Route path='/bag' Component={Bag} />
      <Route path='/address/bag' Component={AddressCheckout} />
      <Route path='/payment' Component={PaymentPage} />
      <Route path='/paymentotp' Component={OTPVerification} />
      <Route path='/paymentend' Component={ConfirmPayment} />
      <Route path='/orders' Component={Orders} />
      

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
