import axios from "axios"

const base_url = 'http://localhost:5000/products'

export const getAllProducts =(link) => axios.get(`${base_url}/getproducts${link}`)

export const getSingleProduct =(id) => axios.get(`${base_url}/singleproduct/${id}`)