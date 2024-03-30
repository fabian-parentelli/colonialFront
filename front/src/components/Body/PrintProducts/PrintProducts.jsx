import './printProducts.scss';
import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SweetAlert from '../../../utils/SweetAlert/SwetAlert';

const PrintProducts = ({ getProducts }) => {

    const { addToCart, isInCart, updateQuantity } = useCartContext();
    const [isSweet, setIsSweet] = useState(false);

    const handleAddToCart = (prod) => {
        const isCart = isInCart(prod.id);
        if (isCart) {
            setIsSweet(true);
            updateQuantity(prod.id, isCart.quantity + 1);
        } else {
            setIsSweet(true);
            addToCart(prod);
        };
    };

    return (
        <div className='printProducts'>
            <div className='printProductsInside'>
                {getProducts && getProducts.docs.map(prod => (
                    prod.active && (
                        <div className='card' key={prod._id}>
                            <div className='cardInside'></div>
    
                            <FavoriteBorderIcon className='cardFavorit' />
                            <p className='cardPrice'>${prod.price}</p>
    
                            <div className='productCard'>
                                <img src={prod.img.imgUrl} alt={prod.name} />
                                <h4 className='cardName'>{prod.name}</h4>
                                <p className='cardDescriotion'>{prod.description}</p>
                                {prod.active === false
                                    ? <button className='btn-add' disabled>El Producto no esta activo</button>
                                    : <button className='btn-add' onClick={() => handleAddToCart(prod)}>
                                        Agregar {prod.minQuantity} {prod.type}
                                    </button>
                                }
                            </div>
                        </div>
                    )
                ))}
            </div>
            {isSweet && <SweetAlert onClose={() => setIsSweet(false)} />}
        </div>
    );    
};

export default PrintProducts;