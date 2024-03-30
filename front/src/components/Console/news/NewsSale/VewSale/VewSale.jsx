import './vewSale.scss';
import { useEffect } from 'react';
import { getSaleTrueApi } from '../../../../../helpers/products/getSaleTrue.api.js';
import { updSaleActiveProApi } from '../../../../../helpers/products/updSaleActivePro.api.js';

const VewSale = ({ prodSale, setProdSale, setLoading }) => {

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getSaleTrueApi();
            if (response.status === 'success') {
                setProdSale(response.result);
                setLoading(false);
            };
        }; fetchData();
    }, []);

    const handleOnClick = async (e, productId) => {
        e.preventDefault();
        setLoading(true);
        const response = await updSaleActiveProApi(productId);
        if(response.status === 'success') {
            const data = await getSaleTrueApi();
            setProdSale(data.result); 
            setLoading(false);
        };
    };

    return (
        <div className='vewSale'>
            {prodSale &&
                prodSale.map(prod => (
                    <div key={prod._id} className='vewSaleDiv'>
                        <p>{prod.name}</p>
                        <p>{prod.description}</p>
                        <button onClick={(e) => handleOnClick(e, prod._id)}>Desactivar</button>
                    </div>
                )) 
            }
            <div className='line'></div>
        </div>
    );
};

export default VewSale;