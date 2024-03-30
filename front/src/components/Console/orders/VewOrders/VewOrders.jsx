import './vewOrders.scss';
import ReactToPrint from 'react-to-print';
import { useParams } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { useEffect, useRef, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { getOrderById } from '../../../../helpers/orders/getOrderById.api.js';

const VewOrders = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const componentRef = useRef();

    useEffect(() => {
        const dataFetch = async (id) => {
            const response = await getOrderById(id);
            setProduct(response);
        }; dataFetch(id);
    }, []);

    return (
        <div ref={componentRef} className='vewOrders'>
            <h2>Ver la orden de {product && product.customer.name}</h2>

            <div className='vewOrdersIn'>
                <div className='vewOrdersUp'>
                    <p><span className='bold'>N°: </span>{product && product._id}</p>
                    <p><span className='bold'>Fecha: </span> {product && product.date}</p>
                </div>

                <div className='vewOrderCustomer'>
                    <div className='vewOrderCustomerIn'>
                        <PersonIcon />
                        <p><span className='bold'>Nombre:</span> {product && product.customer.name}</p>
                    </div>
                    <div className='vewOrderCustomerIn'>
                        <PlaceIcon />
                        <p><span className='bold'>Dirección:</span> {product && product.customer.address}</p>
                    </div>
                    <div className='vewOrderCustomerIn'>
                        <LocalPhoneIcon />
                        <p><span className='bold'>Teléfono:</span> {product && product.customer.phone}</p>
                    </div>
                    {product && product.customer.email &&
                        <div className='vewOrderCustomerIn'>
                            <EmailIcon />
                            <p><span className='bold'>Email:</span> {product.customer.email}</p>
                        </div>
                    }
                </div>

                <div className='vewOrderCart'>
                    {product && product.cart.map(prod => (
                        <div key={prod._id} className='cardVewOrderCart'>
                            <ArrowRightIcon />
                            <p>{prod.product.name}</p>
                            <p><span className='bold'>{prod.quantity}</span> x {prod.product.minQuantity} {prod.product.type}</p>
                            <p>a ${prod.product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ReactToPrint
                trigger={() => <button className='btn-A btn-seen'>Imprimir</button>}
                content={() => componentRef.current}
            />
        </div>
    );
};

export default VewOrders;