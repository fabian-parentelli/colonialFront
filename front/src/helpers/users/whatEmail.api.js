import { url } from '../utils.helpers.js';

export const whatEmilApi = async (email) => {

    const response = await fetch(`${url}/api/user/recover_password`, {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return { status: 'success' };
};