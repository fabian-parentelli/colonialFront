import { useEffect, useState } from 'react';
import RegisterData from './RegisterData';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';

const Register = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const { user, register, loading } = useLoginContext();

    const [values, setValues] = useState({
        name: '', lastName: '', email: '', password: '', phone: '', confirmPassword: '', address: ''
    });

    useEffect(() => {
        if (user.data && user.data.name) {
            setIsModalOpen(true);
            setMessage('Ye te encuentras registrado');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, []);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(values);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    useEffect(() => {
        if (user.registered) {
            setIsModalOpen(true);
            setMessage('Registro exitoso');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        };
        if (user.error) {
            setMessage(user.error);
            setIsModalOpen(true);
        };
    }, [user]);

    return (
        <div>
            <RegisterData
                values={values}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                isModalOpen={isModalOpen}
                message={message}
                closeModal={closeModal}
                loading={loading}
            />
        </div>
    );
};

export default Register;