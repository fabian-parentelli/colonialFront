import { url } from "../utils.helpers";

async function updateProductApi(product, id) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product/update/${id}`, {
        method: 'PUT',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content.data;
};

export { updateProductApi };