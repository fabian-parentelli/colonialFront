import { url } from "../utils.helpers";

async function updSaleProductApi(product, id) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product/updsale/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    return content.data;
};

export { updSaleProductApi };