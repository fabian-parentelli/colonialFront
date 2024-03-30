import './newsSale.scss';
import { useState } from 'react';
import VewSale from './VewSale/VewSale';
import Load from '../../../../utils/Load';
import WatchProducts from './WatchProduct/WatchProduct';
import LookingForProduct from './LookingForProduct/LookingForProduct';

const NewsSale = () => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prodSale, setProdSale] = useState(null);
    
    return (
        <div className='newsSale'>
            <h2>Productos en Oferta</h2>
            <div className='line'></div>
            <div className='divLooking'>
                <label>Buscar producto</label>
                <LookingForProduct setProducts={setProducts} />
            </div>
            <WatchProducts products={products} setLoading={setLoading} setProdSale={setProdSale} />
            <VewSale prodSale={prodSale} setProdSale={setProdSale} setLoading={setLoading} />
            <Load loading={loading} />
        </div>
    );
};

export default NewsSale;