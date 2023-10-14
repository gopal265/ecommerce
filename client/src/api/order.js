import axios  from "axios";

const base_url = "https://shopcartbackend-vj0i.onrender.com/order"

export const createWish =(data)=> axios.post(`${base_url}/createwish`,data)

export const getwish = (id) => axios.get(`${base_url}/getwish/${id}`)

export const deleteWish = (data) => axios.put(`${base_url}/deletewish`,data)

export const createBag = (data) => axios.post(`${base_url}/createbag`,data)

export const getBag = (id) => axios.get(`${base_url}/getbag/${id}`)

export const deleteBag = (data) => axios.put(`${base_url}/deletebag`,data)

export const sendOTp = (data) => axios.post(`${base_url}/sendOtp`,data)

export const placeOrder = (id,data) => axios.post(`${base_url}/placeorder/${id}`,data)

export const getOrders = (id) => axios.get(`${base_url}/getorders/${id}`)