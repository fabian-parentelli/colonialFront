import './newProviderData.scss';
import Modal from '../../../../utils/Modal/Modal';
import Spineer from '../../../../utils/Spinner/Spinner';

const NewProviderData = ({ handleInputChange, handleSubmit, isModalOpen, loading, message, values, closeModal }) => {

    return (
        <div className='newProviderData'>

            <div className="register">
                <h2>Nuevo proveedor</h2>

                <form className="formRegister" onSubmit={handleSubmit}>

                    <div className='newProviderDiv'>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Este campo debe ser completado"
                            value={values.name || ''}
                            onChange={handleInputChange}
                            required />
                    </div>

                    <div className='newProviderDiv'>
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

                    <div className='newProviderDiv'>
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

                    <button className="btn-A" type="submit" disabled={loading}>
                        {loading ? <Spineer /> : 'Agregar proveedor'}
                    </button>
                </form>
            </div>

            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default NewProviderData;