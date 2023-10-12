import {
    REQUEST_PRODUCTS,
    SUCCESS_PRODUCTS,
    FAIL_PRODUCTS,
    REQUEST_SINGLE_PRODUCTS,
    SUCCESS_SINGLE_PRODUCTS,
    FAIL_SINGLE_PRODUCTS,
    CLEAR_ERRORS
} from '../constants/productConstants'
import * as api from "../api/product"

export const getAllProducts = (e=1) => async (dispatch) => {
    let url = window.location.href
   
    try {

        dispatch({ type: REQUEST_PRODUCTS })

      
       
   let link = url.includes('?') ? `?${url.split("?")[1]}&width=${window.screen.width}&page=${e}` : `?width=${window.screen.width}&page=${e}`
          
    //    let link1 = link ? link +=  `&width=${window.screen.width}` : 
        const { data } = await api.getAllProducts(link)

        dispatch({ type: SUCCESS_PRODUCTS, payload: data.products, pro:data.pro, length:data.length })

    } catch (error) {

        dispatch({ type: FAIL_PRODUCTS, payload: error.response.data.message })

    }
}

export const getSingleProduct = (id) => async (dispatch) => {

    try {
        dispatch({ type: REQUEST_SINGLE_PRODUCTS })

        const { data } = await api.getSingleProduct(id)

        dispatch({ type: SUCCESS_SINGLE_PRODUCTS, payload: data.product, similar: data.similar_product})

    } catch (error) {

        dispatch({ type: FAIL_SINGLE_PRODUCTS, payload: error.response.data.message })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}