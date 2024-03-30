import './newPassword.scss';
import { useState } from 'react';
import Modal from '../../../../utils/Modal/Modal';
import Spineer from '../../../../utils/Spinner/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { newPasswordApi } from '../../../../helpers/users/newPassword.api.js';

const NewPassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [values, setValues] = useState({ password: '', passConfirm: '' });
    const [isSpinner, setIsSpinner] = useState(false);

    const navigate = useNavigate();
    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const { token } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSpinner(true);

        if (values.password === values.passConfirm) {
            const response = await newPasswordApi(token, values);
            if (response.error) {
                setIsModalOpen(true);
                setMessage(response.error);
            };
            if (response.data.status === 'success') {
                setIsModalOpen(true);
                setMessage('Contraseña creada correctamente');
                setTimeout(() => { navigate('/login') }, 2000);
            }
            setIsSpinner(false);
        } else {
            setIsModalOpen(true);
            setMessage('Las contraseñas no son iguales');
        };
        setIsSpinner(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div className='newPassword'>
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701886855/assets/iqh35dcjmeihh5d5qagi.png" />
            <form id="formRecPass" onSubmit={handleSubmit}>
                <h2>Recupera tu contraseña</h2>
                <div className='newPassDiv'>
                    <label>Nueva Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Este campo debe de ser completado"
                        value={values.password || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='newPassDiv'>
                    <label>Repite la contraseña</label>
                    <input
                        type="password"
                        name="passConfirm"
                        placeholder="Este campo debe de ser completado"
                        value={values.passConfirm || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button className='btn-A btn' type='submit' disabled={isSpinner}>
                    {isSpinner ? <Spineer /> : 'Recuperar contraseña'}
                </button>
            </form>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default NewPassword;