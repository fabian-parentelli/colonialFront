import { url } from '../utils.helpers.js';

const getProductByIdApi = async (id) => {

    const response = await fetch(`${url}/api/product/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    const content = await response.json();
    return content.data;
};

export { getProductByIdApi };