import './newSale.scss';
import { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import SweetAlert from '../../../utils/SweetAlert/SwetAlert';

const NewSale = ({ advert }) => {

    const { addToCart, isInCart, updateQuantity } = useCartContext();
    const [isSweet, setIsSweet] = useState(false);

    const handleAddToCart = (prod) => {
        console.log(prod);
        const isCart = isInCart(prod._id);
        if (isCart) {
            setIsSweet(true);
            updateQuantity(prod._id, isCart.quantity + 1);
        } else {
            setIsSweet(true);
            addToCart(prod);
        };
    };

    return (
        <div className='newSale'>
            <div className='newSaleViolet'></div>
            <div className='newSaleYellow'>
                <h2>Producto</h2>
                <h3>Con descuento</h3>
            </div>
            {advert &&
                <div className='newSaleCont'>
                    <img src="saleOfertA.png" alt="oferA" className='saleOfertA' />
                    <div className='newSaleImg'>
                        <img src={advert.img.imgUrl} alt={advert.name} className='imgProduct' />
                    </div>
                    <img src="saleOfertA.png" alt="oferB" className='saleOfertB' />
                    <div className='textNewSale'>
                        <p className='nSName'>{advert.name}</p>
                        <p className='nSPrice'>Precio: ${advert.sale.priceSale}</p>
                        <button className='btn' onClick={() => handleAddToCart(advert)}>
                            Agregar {advert.minQuantity}
                        </button>
                    </div>
                </div>
            }
            {isSweet && <SweetAlert onClose={() => setIsSweet(false)} />}
        </div>
    );
};

export default NewSale;