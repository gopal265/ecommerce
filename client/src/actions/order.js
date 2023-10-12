import axios from 'axios'
import {
    REQUEST_CREATE_WISHLIST,
    SUCCESS_CREATE_WISHLIST,
    FAIL_CREATE_WISHLIST,
    REQUEST_GET_WISHLIST,
    SUCCESS_GET_WISHLIST,
       FAIL_GET_WISHLIST,
    REQUEST_CREATE_BAG,
    SUCCESS_CREATE_BAG,
       FAIL_CREATE_BAG,
    REQUEST_GET_BAG,
    SUCCESS_GET_BAG,
       FAIL_GET_BAG,
       SUCCESS_UPDATE_QTY_BAG,
REQUEST_UPDATE_QTY_BAG,
   FAIL_UPDATE_QTY_BAG,
   SUCCESS_DELETE_BAG,
   REQUEST_DELETE_BAG,
   FAIL_DELETE_BAG,
   SUCCESS_DELETE_WISH,
   REQUEST_DELETE_WISH,
      FAIL_DELETE_WISH,
    CLEAR_ERRORS,
    REQUEST_PLACE_ORDER,
    SUCCESS_PLACE_ORDER,
    FAIL_PLACE_ORDER,
    REQUEST_GET_ORDER,
    SUCCESS_GET_ORDER,
    FAIL_GET_ORDER
} from '../constants/orderConstants'
import * as api from '../api/order'

export const sendOTp = () => async(dispatch) =>{
 try {
    dispatch({type:"loading"})
    const email = localStorage.getItem('email').replace(/"/g, '')
    const {data} = api.sendOTp({email:email})
    dispatch({type:'success',payload:'verified'})
 } catch (error) {
    dispatch({type:'fail',payload:'wrong'})
 }
}
export const createwishlist = (option) => async (dispatch) => {
    console.log(option)
    try {

        dispatch({ type: REQUEST_CREATE_WISHLIST })
        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await api.createWish(option)

        dispatch({ type: SUCCESS_CREATE_WISHLIST, payload: data.success,})

    } catch (error) {

        dispatch({ type: FAIL_CREATE_WISHLIST, payload: error.response.data.message })

    }
}

export const getwishlist = (userid) => async (dispatch) => {

    try {
        dispatch({ type: REQUEST_GET_WISHLIST })
        const { data } = await api.getwish(userid)
        dispatch({ type: SUCCESS_GET_WISHLIST, payload: data.wishlist,})
    } catch (error) {
        dispatch({ type: FAIL_GET_WISHLIST, payload: error.response.data.message })
    }
}

export const createbag = (option) => async (dispatch) => {
    console.log(option)
    try {

        dispatch({ type: REQUEST_CREATE_BAG })
        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await api.createBag(option)

        dispatch({ type: SUCCESS_CREATE_BAG, payload: data.success,})

    } catch (error) {

        dispatch({ type: FAIL_CREATE_BAG, payload: error.response.data.message })

    }
}

export const getbag = (userid) => async (dispatch) => {

    try {
        dispatch({ type: REQUEST_GET_BAG })
        const { data } = await api.getBag(userid)
        dispatch({ type: SUCCESS_GET_BAG, payload: data.bag,})
    } catch (error) {
        dispatch({ type: FAIL_GET_BAG, payload: error.response.data.message })
    }
}

export const getqtyupdate = (qtydata) => async (dispatch) => {

    try {
        dispatch({ type: REQUEST_UPDATE_QTY_BAG })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.put(`/api/v1/update_bag`,qtydata, config )
        dispatch({ type: SUCCESS_UPDATE_QTY_BAG, payload: data.success,})
    } catch (error) {
        dispatch({ type: FAIL_UPDATE_QTY_BAG, payload: error.response.data.message })
    }
}

export const deletebag = (fdata) => async (dispatch) => {

    try {
        dispatch({ type: SUCCESS_DELETE_BAG })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await api.deleteBag(fdata)
        dispatch({ type: REQUEST_DELETE_BAG, payload: data.success,})
    } catch (error) {
        dispatch({ type: FAIL_DELETE_BAG, payload: error.response.data.message })
    }
}

export const deletewish = (fdata) => async (dispatch) => {

    try {
        dispatch({ type: SUCCESS_DELETE_WISH })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await api.deleteWish(fdata)
        dispatch({ type: REQUEST_DELETE_WISH, payload: data.success,})
    } catch (error) {
        dispatch({ type: FAIL_DELETE_WISH, payload: error.response.data.message })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

export const placeOrder = (id,data) => async(dispatch) =>{
    try {
        dispatch({type:REQUEST_PLACE_ORDER})
        const {response} = await api.placeOrder(id,data)
        dispatch({type:SUCCESS_PLACE_ORDER,payload:response.orderItems})
    } catch (error) {
        dispatch({type:FAIL_PLACE_ORDER,payload:error})
    }
}
export const getOrders = (id) => async(dispatch) =>{
    try {
        dispatch({type:REQUEST_GET_ORDER})
        const {data} = await api.getOrders(id)
        dispatch({type:SUCCESS_GET_ORDER,payload:data.orderItems})

    } catch (error) {
        dispatch({type:FAIL_GET_ORDER,payload:error})
    }
}