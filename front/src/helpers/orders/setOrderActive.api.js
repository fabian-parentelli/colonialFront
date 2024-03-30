import { url } from '../utils.helpers.js';

const setActiveOrder = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/order/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    const content = await response.json();
    if(content.data) return content.data;
    else return content;
};

export { setActiveOrder };