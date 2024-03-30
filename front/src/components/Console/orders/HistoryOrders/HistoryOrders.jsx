import './historyOrders.scss';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { getOrdersApi } from '../../../../helpers/orders/getOrders.api.js';
import UnseenOrdersData from '../UnseenOrders/UnseenOrdersData/UnseenOrdersData';

const HistoryOrders = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrdersApi({ active: false });
            setProducts(response)
        }; fetchData();
    }, []);

    const handleChangePage = async (page) => {
        const response = await getOrdersApi({ page: page, active: false });
        setProducts(response);
    };

    return (
        <div className='historyOrders'>
            <h2>Historicos</h2>
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

export default HistoryOrders;