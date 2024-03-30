import { url } from '../utils.helpers.js';

const getProductsApi = async (obj) => {

    let urlData = `${url}/api/product?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.category) urlData += `category=${obj.category}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}`;

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content.data;
};

export { getProductsApi };