import './oredrUser.scss';
import { useEffect, useState } from 'react';
import { getOrdersApi } from '../../helpers/orders/getOrders.api.js';
import VewOrderUser from './VewOrderUser/VewOrderUser.jsx';

const OredrUser = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrdersApi({ active: false });
            setProducts(response);
        }; fetchData();
    }, []);

    const handleChangePage = async (page) => {
        const response = await getOrdersApi({ page: page, active: false });
        setProducts(response);
    };

    return (
        <div className='oredrUser'>
            <h2>Tus pedidos</h2>
            <div className='orderUserIn'>
                {products && products.document && products.document.length > 0
                    ? <VewOrderUser products={products} handleChangePage={handleChangePage} />
                    : 'No hay pedidos'
                }
            </div>
        </div>
    );
};

export default OredrUser;