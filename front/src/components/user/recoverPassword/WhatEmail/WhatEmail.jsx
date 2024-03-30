import './whatEmail.scss';
import { useState } from 'react';
import { whatEmilApi } from '../../../../helpers/users/whatEmail.api.js';
import Spineer from '../../../../utils/Spinner/Spinner';

const WhatEmail = () => {

    const [values, setValues] = useState({ email: '' });
    const [vewMessage, setVewMessage] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSpinner(true);
        const response = await whatEmilApi(values);
        if(response.status === 'success') {
            setIsSpinner(false)
            setVewMessage(true);
        };
    };

    return (
        <div className='whatEmail'>
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701888664/assets/ykl9vsrtlzidyttcouma.png" />
            <form id="formWhatEmail" onSubmit={handleSubmit}>
                <h2>Recupera tus contraseña</h2>
                <div className='whatEmailDiv'>
                    <label>Cual es tu email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Este campo debe de ser completado"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button className='btn-A btn' type='submit' disabled={isSpinner}>
                    {isSpinner ? <Spineer /> : 'Recuperar contraseña'}
                </button>
                {vewMessage && <p className='message'>Revisa tu correo electrónico</p>}
            </form>
        </div>
    );
};

export default WhatEmail;