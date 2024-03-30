import { url } from '../utils.helpers.js';

const updateUpDateApi = async () => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/date`, {
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

export { updateUpDateApi };