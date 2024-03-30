import { url } from '../utils.helpers.js';

const payProviderApi = async (id, pay) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/provider/${id}`, {
        method: 'PUT',
        body: JSON.stringify(pay),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { payProviderApi };