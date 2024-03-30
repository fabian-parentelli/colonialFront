import './customer.scss';
import Spineer from '../../../utils/Spinner/Spinner';

const Customer = ({ handleInputChange, handleSubmit, loading }) => {

    return (
        <form className='Customer' onSubmit={handleSubmit}>

            <p>Ingresa tus datos para terminar el pedido</p>

            <input
                type="text"
                name='name'
                onChange={handleInputChange}
                required
                placeholder='Nombre'
            />
            <input
                type="text"
                name='phone'
                onChange={handleInputChange}
                required
                placeholder='Telefono'
            />
            <input
                type="text"
                name='address'
                onChange={handleInputChange}
                required
                placeholder='Dirección'
            />
            <input
                type="text"
                name='email'
                onChange={handleInputChange}
                placeholder='emial -- -- ES OPCIONAL --  --'
            />

            <button className='btn-A' disabled={loading}>
                {loading ? <Spineer /> : 'Enviar pedido'}
            </button>
        </form>
    );
};

export default Customer;