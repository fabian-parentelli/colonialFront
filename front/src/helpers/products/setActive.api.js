import { url } from '../utils.helpers.js';

const setActiveApi = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/product/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    const content = await response.json();
    return content;
};

export { setActiveApi };