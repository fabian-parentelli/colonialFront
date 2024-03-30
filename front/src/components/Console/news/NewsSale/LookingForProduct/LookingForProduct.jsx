import './lookingForProduct.scss';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { lookForApi } from '../../../../../helpers/products/lookForProduct.api.js';

const LookingForProduct = ({ setProducts }) => {

    const [lookForValue, setLookForValue] = useState('');

    const handleInputChange = (e) => { setLookForValue(e.target.value) };

    useEffect(() => {
        const fetchData = async () => {
            if(lookForValue) {
                const response = await lookForApi(lookForValue);
                setProducts(response.data);
            };
        }; fetchData();
    }, [lookForValue]);

    return (
        <div className='lookingForProduct'>
            <SearchIcon />
            <input
                type="text"
                placeholder='Buscar'
                name='lookfor'
                value={lookForValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default LookingForProduct;