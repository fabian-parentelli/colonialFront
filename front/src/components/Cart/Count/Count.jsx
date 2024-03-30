import { useState, useEffect } from 'react';
import { useCartContext } from '../../../context/CartContext';
import './count.scss';

const Count = ({ isQuantity, id }) => {

    const { updateQuantity } = useCartContext();
    const [count, setCount] = useState(isQuantity || 1);

    const handelLess = () => count > 1 && setCount(count - 1);
    const handleAdd = () => setCount(count + 1);

    useEffect(() => {
        updateQuantity(id, count);
    }, [count]);

    return (
        <div className='count'>
            <p className={count > 1 ? 'add' : 'addFile'} onClick={handelLess} disabled={count <= 1} >-</p>
            <p>{count && count}</p>
            <p className='add' onClick={handleAdd}>+</p>
        </div>
    );
};

export default Count;