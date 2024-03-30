import './unseenOrders.scss';
import SearchIcon from '@mui/icons-material/Search';
import UnseenOrdersData from './UnseenOrdersData/UnseenOrdersData';
import { getOrdersApi } from '../../../../helpers/orders/getOrders.api.js';
import { useState, useEffect } from 'react';

const UnseenOrders = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrdersApi({});
            setProducts(response)
        }; fetchData();
    }, [products]);

    const handleChangePage = async (page) => {
        const response = await getOrdersApi({ page: page });
        setProducts(response.products);
    };

    return (
        <div className='unseenOrders'>
            <h2>Pedidos sin ver</h2>
            <div className='gtpContainer'>
                <div className='gtpFuntions'>
                    <p>Ver</p>
                    <p>Modificar</p>
                    <p>Activar</p>

                    <div className='gtpSearch'>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder='Buscar'
                            name='lookfor'
                        />
                    </div>
                </div>
                {products && products.document && products.document.length > 0 
                    ? <UnseenOrdersData products={products} handleChangePage={handleChangePage} />
                    : 'No hay pedidos'
                }
            </div>
        </div>
    );
};

export default UnseenOrders;