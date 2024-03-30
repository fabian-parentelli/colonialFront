import { url } from '../utils.helpers.js';

const getOrdersApi = async (obj) => {

    const token = localStorage.getItem('token');
    let urlData = `${url}/api/order?`;

    if (obj.page !== undefined && obj.page !== null) {
        urlData += `page=${obj.page}&`;
    };
    
    if (obj.active !== undefined && obj.active === false) {
        urlData += `active=${obj.active}`;
    };

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data.data;
    if (content.error) return content.error;
};

export { getOrdersApi };