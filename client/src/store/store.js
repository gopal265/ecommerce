import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { registeruser, getuser, resendotp, verifyOtp, updatedetailsuserreducer } from '../reducers/userReducers';
import {Allproducts, singleProduct} from "../reducers/productReducers"
import { create_bag_reducer, create_wishlist_reducer, delete_bag_reducer, delete_wish_reducer, get_bag_reducer, get_order_reducer, get_wishlist_reducer, sendotp_reducer, update_qty_bag_reducer } from '../reducers/orderReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
      Registeruser: registeruser,
      user : getuser,
      resendotp: resendotp,
      userdetails: verifyOtp,
      allProducts:Allproducts,
      singleProduct: singleProduct,
      wishlist:create_wishlist_reducer,
      wishlist_data:get_wishlist_reducer,
      bag:create_bag_reducer,
      bag_data:get_bag_reducer,
      update_bag: update_qty_bag_reducer,
      updateuser2:updatedetailsuserreducer,
      deletebag:delete_bag_reducer,
      deletewish:delete_wish_reducer,
      sendotp : sendotp_reducer,
      orders : get_order_reducer
      
})
const rootReducer = (state, action) => {
      if (action.type === "SIGNOUT_REQUEST") {
          // for all keys defined in your persistConfig(s)
          storage.removeItem('persist:redux')
          localStorage.setItem('email',"")
          // storage.removeItem('persist:otherKey')
  
          return reducer(undefined, action);
      }
      return reducer(state, action);
  };
const persistConfig = {
      key: 'redux', // the key to use for storage
      storage, // the storage engine to use (localStorage, sessionStorage, or custom)
    };

let initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,initialState,applyMiddleware(thunk))
export const persistor = persistStore(store);


