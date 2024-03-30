import './cart.scss';
import Customer from './Customer/Customer';
import { useEffect, useState } from 'react';
import Modal from '../../utils/Modal/Modal.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductCart from './ProductCart/ProductCart';
import { Link, useNavigate } from 'react-router-dom';
import Spineer from '../../utils/Spinner/Spinner.jsx';
import { useCartContext } from '../../context/CartContext';
import NumToString from '../../utils/NumToString/NumToString';
import { useLoginContext } from '../../context/LoginContext';
import { saveOrderApi } from '../../helpers/orders/saveOrders.api.js';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Cart = () => {

    const { user, isLogin } = useLoginContext();
    const { totalCart, cart, emptyCart } = useCartContext();
    const navigate = useNavigate();

    const [total, setTotal] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({ name: '', address: '', phone: '', email: '' });

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const order = {
            cart: cart,
            customer: user.isLogged ? user.data : values,
        };
        const response = await saveOrderApi(order);
        if (response.status === 'success') {
            setIsModalOpen(true);
            setMessage(response.message);
            setTimeout(() => { navigate('/') }, 2000);
        };
        setLoading(false);
        emptyCart();
    };

    useEffect(() => {
        isLogin();
        setTotal(totalCart());
    }, [cart]);

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div className='cart'>
            <div className='cartIn'>

                <div className='cartInBack'>

                    <Link to={'/'} className='backI'>
                        <KeyboardDoubleArrowLeftIcon />
                        <p>inicio</p>
                    </Link>

                    <div className='backI' onClick={emptyCart}>
                        <p>Eliminar compra</p>
                        <DeleteIcon />
                    </div>
                </div>

                <div className='cartBody'>
                    <ProductCart />

                    <div className='cartBLine'></div>

                    <div className='chekOut'>
                        <h2>Chekout</h2>
                        <p className='total'>Total ${total}</p>
                        <p><NumToString number={total} />.</p>
                        <hr />
                        {cart.length !== 0 ?
                            <div className='divCustomer'>
                                {user.data
                                    ? <div className='Customer'>
                                        <p>{user.data.name} todo listo para realizar tu pedido</p>
                                        <button onClick={handleSubmit} className='btn-A' disabled={loading}>
                                            {loading ? <Spineer /> : 'Enviar pedido'}
                                        </button>
                                    </div>
                                    : <Customer
                                        handleInputChange={handleInputChange}
                                        handleSubmit={handleSubmit}
                                        loading={loading}
                                    />
                                }
                            </div>
                            : <p>No hay productos para enviar pedido</p>
                        }
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default Cart;