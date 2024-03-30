import { url } from "../utils.helpers";

async function saveOrderApi(order) {

    const response = await fetch(`${url}/api/order`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    if (content.data) return content.data;
    if(content.error) return content.error;
}

export { saveOrderApi };