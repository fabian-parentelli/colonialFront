import './registerData.scss';
import { Link } from 'react-router-dom';
import Modal from '../../../utils/Modal/Modal';
import Spineer from '../../../utils/Spinner/Spinner';

const RegisterData = ({ values = {},
    handleSubmit, handleInputChange, isModalOpen, message, closeModal, loading }) => {

    return (
        <div className='registerData'>

            <div className="register">
                <h2>Registrate en <span>Pasarela</span></h2>

                <form className="formRegister" onSubmit={handleSubmit}>

                    <div className="subDiv">
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Este campo debe ser completado"
                                value={values.name || ''}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Este campo debe ser completado"
                                onChange={handleInputChange}
                                value={values.lastName || ''}
                                required />
                        </div>
                    </div>

                    <div className="subDiv">
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Este campo debe ser completado"
                                value={values.email || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Teléfono</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Este campo debe ser completado"
                                value={values.phone || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="subDiv">
                        <div>
                            <label>Direccion</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Este campo debe ser completado"
                                value={values.address || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="subDiv">
                        <div>
                            <label>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Este campo debe ser completado"
                                value={values.password || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Este campo debe ser completado"
                                value={values.confirmPassword || ''}
                                onChange={handleInputChange}
                                required />
                        </div>
                    </div>

                    <div className='butDiv'>
                        
                        <button className="btn-A" type="submit" disabled={loading}>
                            {loading ? <Spineer />  : 'Registrate'}
                        </button>

                        <Link className='btn btn-B' to={'/login'}>Iniciar sesión</Link>
                    </div>
                </form>
            </div>
            <img src="register.png" alt="img" />
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default RegisterData;