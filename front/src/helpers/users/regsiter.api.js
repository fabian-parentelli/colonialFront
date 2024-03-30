import { url } from "../utils.helpers.js";

async function registerApi(user) {

    delete user.confirmPassword;

    const response = await fetch(`${url}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content;
};


export { registerApi };