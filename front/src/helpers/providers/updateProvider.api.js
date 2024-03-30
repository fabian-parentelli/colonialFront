import { url } from "../utils.helpers";

async function updateProviderApi(provider) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/provider`, {
        method: 'PUT',
        body: JSON.stringify(provider),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content.data;
};

export { updateProviderApi };