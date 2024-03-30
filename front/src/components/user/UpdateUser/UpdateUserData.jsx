import './updateUserData.scss';
import Modal from '../../../utils/Modal/Modal';
import Spinner from '../../../utils/Spinner/Spinner';

const UpdateUserData = ({ 
    loading, isModalOpen, values, handleInputChange, handleSubmit, closeModal, message  }) => {

    return (
        <div className='updateUserData'>

            <div className="register">
                <h2>Actualiza tus datos</h2>

                <form className="formRegister"
                onSubmit={handleSubmit}
                >

                    <div className="subDiv">
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="name"
                                value={values.name || ''}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="lastName"
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
                                value={values.phone || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='butDiv'>
                        <button className="btn-A" type="submit" disabled={loading}>
                            {loading ? <Spinner /> : 'Actualizar'}
                        </button>
                    </div>

                </form>
            </div>
            <img className='updateUserImg' src="updateUser.png" alt="img" />
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default UpdateUserData;