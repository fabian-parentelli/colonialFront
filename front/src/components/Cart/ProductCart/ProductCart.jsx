import './productCart.scss';
import { useCartContext } from '../../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Count from '../Count/Count';
import SubTotal from '../SubTotal/SubTotal';

const ProductCart = () => {

    const { cart, removeItem } = useCartContext();
    
    return (
        <div className='productCart'>
            {cart && cart.map((prod) => (

                <div className='prodCrad' key={prod._id}>

                    <img src={prod.img.imgUrl} alt={prod.name} />

                    <div className='prodCartData'>

                        <div className='prodCartTitle' >
                            <div className='prodCartTitleIn'>
                                <p className='prCaName'>{prod.name}</p>
                                <p className='prCaDescription'>{prod.description}</p>
                            </div>
                            <DeleteIcon className='deleteIcon' onClick={() => removeItem(prod._id)} />
                        </div>

                        <div className='contQuantity'>
                            <p>${prod.price}</p>
                            <p>x{prod.minQuantity}{prod.type}</p>
                            <Count isQuantity={prod.quantity} id={prod._id} />
                            <SubTotal id={prod._id}/>
                        </div>

                        <div className='prodCartLine'></div>

                        <div className='prodCratUnderLine'>
                            <p>Los precios pueden estar sujetos a cambios sin previo aviso</p>
                            <p>Precio estimado en los productos al peso</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCart;