import { url } from '../utils.helpers.js';

const getSaleTrueApi = async () => {

    const response = await fetch(`${url}/api/product/saletrue`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { getSaleTrueApi };