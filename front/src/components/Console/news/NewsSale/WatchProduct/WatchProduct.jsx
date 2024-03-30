import './watchProducts.scss';
import { useState } from 'react';
import { getSaleTrueApi } from '../../../../../helpers/products/getSaleTrue.api.js';
import { updSaleProductApi } from '../../../../../helpers/products/updSaleProduct.api.js';

const WatchProducts = ({ products, setLoading, setProdSale }) => {

    const [sale, setSale] = useState({ active: true, priceSale: 0 });
    const handleInputChange = (e) => setSale({ ...sale, [e.target.name]: e.target.value });

    const handleSubmit = async (e, productId) => {
        e.preventDefault();
        setLoading(true);
        const response = await updSaleProductApi(sale, productId);
        if (response.status === 'success') {
            const result = await getSaleTrueApi();
            setProdSale(result.result);
            setLoading(false);
        };
    };

    return (
        <div className='watchProducts'>
            {products &&
                products.docs.map(pro => (
                    <form key={pro.id} onSubmit={(e) => handleSubmit(e, pro.id)}>
                        <p>{pro.name}</p>
                        <p>{pro.description}</p>
                        <input
                            type="text"
                            name='priceSale'
                            placeholder='$ precio de la oferta'
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit">
                            {pro.sale && pro.sale.active === false && 'activar'}
                        </button>
                    </form>
                ))
            }
        </div>
    );
};

export default WatchProducts;