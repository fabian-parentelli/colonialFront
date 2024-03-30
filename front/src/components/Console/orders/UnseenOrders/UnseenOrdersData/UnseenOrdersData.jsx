import { useState } from 'react';
import './unseenOrdersData.scss';
import { Link, useNavigate } from 'react-router-dom';
import Pager from '../../../../../utils/Pager/Pager';
import Modal from '../../../../../utils/Modal/Modal.jsx'; 
import { setActiveOrder } from '../../../../../helpers/orders/setOrderActive.api.js';

const UnseenOrdersData = ({ products, handleChangePage }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSetActive = async (id) => {
        const response = await setActiveOrder(id);
        if (response.status === 'success') {
            setIsModalOpen(true);
            setMessage('Orden Inactiva');
            setIsModalOpen(false);
            setMessage(null);
        };
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div className='unseenOrdersData'>
            <table className='gtpTable'>
                <thead>
                    <tr>
                        <th>N°Pedido</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>activo</th>
                    </tr>
                </thead>
                <tbody>
                    {(products && products.document) && products.document.map(prod => (
                        <tr key={prod._id}>
                            <td>{prod._id}</td>
                            <td>{prod.customer.name}</td>
                            <td>{prod.date}</td>
                            <td style={{ color: prod.active ? 'black' : 'red' }}>{prod.active ? 'Pendiente' : 'Visto'}</td>
                            <td className='gtpButtoms'>
                                <Link className='btn-Unser' to={`/console/veworder/${prod._id}`}>
                                    Ver
                                </Link>

                                <button className='btn-Unser' onClick={() => handleSetActive(prod._id)}>
                                    {prod.active == false ? 'Pendiente' : 'Visto'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pager products={products} handleChangePage={handleChangePage} />
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default UnseenOrdersData;