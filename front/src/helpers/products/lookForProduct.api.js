import { url } from '../utils.helpers.js';

const lookForApi = async (name) => {
    
    const response = await fetch(`${url}/api/product/lookfor/${name}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    const content = await response.json();
    return content;
};

export { lookForApi };