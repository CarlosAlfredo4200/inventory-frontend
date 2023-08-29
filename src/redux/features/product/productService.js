import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`

//Create a new product
const createProduct = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

//Get all products
const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

//Delete a products
const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
};

//Get a product
const getProduct = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
};

//Update a product
const updateProduct = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data;
};

const productService = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    
};

export default productService;