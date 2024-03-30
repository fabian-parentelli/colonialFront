import { url } from "../utils.helpers.js";

async function newProviderApi(provider) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/provider`, {
        method: 'POST',
        body: JSON.stringify(provider),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    if(content.data) return content.data;
    if(content.error) return content.error;
};


export { newProviderApi };