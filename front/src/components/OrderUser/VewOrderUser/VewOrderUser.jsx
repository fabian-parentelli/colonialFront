import { useState } from 'react';
import './vewOrderUser.scss';
import { Link } from 'react-router-dom';
import Pager from '../../../utils/Pager/Pager.jsx';
import Modal from '../../../utils/Modal/Modal.jsx'; 

const VewOrderUser = ({ products, handleChangePage }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };


    return (
        <div className='vewOrderUser'>
            <table className='gtpTable'>
                <thead>
                    <tr>
                        <th>N°Pedido</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Estado</th>
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

                                <Link className='btn-Unser' to={`/veworderuserid/${prod._id}`}>
                                    Ver
                                </Link>
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

export default VewOrderUser;