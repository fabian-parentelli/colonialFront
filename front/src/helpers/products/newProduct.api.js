import { url } from "../utils.helpers";

async function newProductsApi(product) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product`, {
        method: 'POST',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content;
}

export { newProductsApi };