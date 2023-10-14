import axios from "axios"

const base_url = 'https://shopcartbackend-vj0i.onrender.com/products'

export const getAllProducts =(link) => axios.get(`${base_url}/getproducts${link}`)

export const getSingleProduct =(id) => axios.get(`${base_url}/singleproduct/${id}`)