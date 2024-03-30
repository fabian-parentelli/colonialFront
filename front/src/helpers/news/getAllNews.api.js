import { url } from '../utils.helpers.js';

const getAllNewsApi = async () => {

    const response = await fetch(`${url}/api/news`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.error) return content.error;
    if (content.data) return content.data;
};

export { getAllNewsApi };