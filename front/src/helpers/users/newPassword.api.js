import { url } from '../utils.helpers.js';

export const newPasswordApi = async (token, userPass) => {

    delete userPass.passConfirm;

    const response = await fetch(`${url}/api/user/new_password`, {
        method: 'PUT',
        body: JSON.stringify(userPass),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content;
};