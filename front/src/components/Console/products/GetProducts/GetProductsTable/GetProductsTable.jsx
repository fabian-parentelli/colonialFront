import { useState } from 'react';
import './getProductsTable.scss';
import Pager from '../../../../../utils/Pager/Pager';
import { setActiveApi } from '../../../../../helpers/products/setActive.api.js';
import Modal from '../../../../../utils/Modal/Modal.jsx';
import { Link } from 'react-router-dom';

const GetProductsTable = ({ products, handleChangePage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSetActive = async (id) => {
        const response = await setActiveApi(id);
        if (response.data.status === 'success') {
            setIsModalOpen(true);
            setMessage('Activaste/desactivaste correctamente');
            setTimeout(() => {
                setIsModalOpen(false);
                setMessage(null);
                handleChangePage();
            }, 2000);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div className='getProductsTable'>
            <table className='gtpTable'>
                <thead>
                    <tr>
                        <th>producto</th>
                        <th>perecio</th>
                        <th>catgeoria</th>
                        <th>activo</th>
                    </tr>
                </thead>
                <tbody>
                    {(products && products.docs) && products.docs.map(prod => (
                        <tr key={prod._id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.category}</td>
                            <td style={{ color: prod.active ? 'black' : 'red' }}>{prod.active ? 'activo' : 'inactivo'}</td>
                            <td className='gtpButtoms'>
                                
                                <Link to={`/console/updateproduct/${prod._id}`}>
                                    <button id={prod._id}>Modificar</button>
                                </Link>

                                <button id={prod._id} onClick={() => handleSetActive(prod._id)} >
                                    {prod.active == false ? 'activar' : 'desactivar'}
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

export default GetProductsTable;
