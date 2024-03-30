import './products.scss';
import NavFind from '../NavFind/NavFind';
import { useEffect, useState } from 'react';
import { getProductsApi } from '../../../helpers/products/getProducts.api.js';
import { lookForApi } from '../../../helpers/products/lookForProduct.api.js';
import PrintProducts from '../PrintProducts/PrintProducts.jsx';
import Pager from '../../../utils/Pager/Pager.jsx';

const Products = () => {

    const [getProducts, setGetProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductsApi({});
            setGetProducts(data.products);
        }; fetchData();
    }, []);

    const handleChangePage = async (page) => {
        const response = await getProductsApi({ page: page });
        setGetProducts(response.products);
    };

    const handleFindCatgory = async (category) => {
        const response = await getProductsApi({ limit: 100, category: category });
        setGetProducts(response.products);
    };

    // buscador
    const [lookForValue, setLookForValue] = useState('');

    const handleInputChange = (e) => { setLookForValue(e.target.value) };

    useEffect(() => {
        const fetchData = async () => {
            if (!lookForValue) {
                const data = await getProductsApi({});
                setGetProducts(data.products);
            } else {
                const response = await lookForApi(lookForValue);
                setGetProducts(response.data);
            }
        }; fetchData();
    }, [lookForValue]);

    return (
        <div className='products'>
            <NavFind
                handleFindCatgory={handleFindCatgory}
                handleInputChange={handleInputChange}
                lookForValue={lookForValue}
            />
            <PrintProducts getProducts={getProducts} />
            <Pager products={getProducts} handleChangePage={handleChangePage} />
        </div>
    );
};

export default Products;