import { useEffect, useState } from 'react';
import GetProductsData from './GetProductsData.jsx';
import { getProductsApi } from '../../../../helpers/products/getProducts.api.js';
import { lookForApi } from '../../../../helpers/products/lookForProduct.api.js';

const GetProducts = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fechData = async () => {
            const response = await getProductsApi({ limit: 10, active: false });
            if (response.status === 'success') {
                setProducts(response.products);
            }
        }; fechData();
    }, []);

    const handleChangePage = async (page) => {
        const response = await getProductsApi({ page: page, active: false });
        setProducts(response.products);
    };

    // Buscador.
    const [lookForValue, setLookForValue] = useState('');

    const handleInputChange = (e) => { setLookForValue(e.target.value) };

    useEffect(() => {
        const fetchData = async () => {
            if (!lookForValue) {
                const response = await getProductsApi({ limit: 10, active: false });
                setProducts(response.products);
            } else {
                const response = await lookForApi(lookForValue);
                setProducts(response.data);
            }
        }; fetchData();
    }, [lookForValue]);

    return (
        <div>
            <GetProductsData
                products={products}
                handleChangePage={handleChangePage}
                handleInputChange={handleInputChange}
                lookForValue={lookForValue}
            />
        </div>
    );
};

export default GetProducts;