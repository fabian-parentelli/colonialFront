import './login.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../../utils/Modal/Modal';
import Spinner from '../../../utils/Spinner/Spinner';
import { useLoginContext } from '../../../context/LoginContext';

const Login = () => {

    const { user, login, loading } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    useEffect(() => {
        if (user.logged) {
            setIsModalOpen(true);
            setMessage('Login exitoso');
            setTimeout(() => { navigate('/') }, 2000);
        };
        if (user.error) {
            setMessage(user.error);
            setIsModalOpen(true);
        };
    }, [user]);

    return (
        <div className='login'>

            <form className='formLogin' onSubmit={handleSubmit}>
                <h2>Iniciar sesión en <span>La Colonial</span></h2>

                <div className='loginInputs'>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Este campo debe ser completado"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='loginInputs'>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Este campo debe ser completado"
                        value={values.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type='submit' className='btn-A' disabled={loading}>
                {loading ? <Spinner />  : 'Iniciar sesión'}
                </button>

                <div className='butDivLogin'>
                    <Link className='btn btn-B' to={'/register'}>Registrate</Link>
                    <Link className='btn btn-C' to={'/what_email'}>Recuperar contraseña</Link>
                </div>

            </form>
            <img className='imgLogin' src="login.png" alt="login" />
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default Login;