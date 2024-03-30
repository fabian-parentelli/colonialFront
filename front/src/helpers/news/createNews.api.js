import { url } from "../utils.helpers.js";

async function createNewsApi(news) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/news`, {
        method: 'POST',
        body: JSON.stringify(news),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    if (content.error) return content.error;
    if (content.data.status) return content.data.result;
};


export { createNewsApi };