import { url } from '../utils.helpers.js';

const updateNewsActiveApi = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/news/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })

    const content = await response.json();
    if (content.error) return content.error;
    if (content.data.status) return content.data.result;
};

export { updateNewsActiveApi };