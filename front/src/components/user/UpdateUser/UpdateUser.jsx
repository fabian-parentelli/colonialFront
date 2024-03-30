import { useLoginContext } from '../../../context/LoginContext';
import { useEffect, useState } from 'react';
import UpdateUserData from './UpdateUserData';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const { user, updateUser, loading } = useLoginContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [values, setValues] = useState({ name: '', lastName: '', email: '', phone: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (user.data) {
            setValues({
                name: user.data.name || '',
                lastName: user.data.lastName || '',
                email: user.data.email || '',
                phone: user.data.phone || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true)
        setMessage('Datos actualizados');
        updateUser(values);
            setTimeout(() => {
                navigate('/');
            }, 2000);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <UpdateUserData
            loading={loading}
            isModalOpen={isModalOpen}
            values={values}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            message={message}
            closeModal={closeModal}
        />
    );
};

export default UpdateUser;