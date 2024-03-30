import './updateProductData.scss';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Spineer from '../../../../utils/Spinner/Spinner';
import Modal from '../../../../utils/Modal/Modal';

const UpdateProductData = ({ handleChange, handleSubmit, isModalOpen, message, closeModal, loading, sel, formData }) => {

    return (
        <div className='updateProductData'>

            <div className='newPrTitle'>
                <SyncAltIcon />
                <h3>Modificar Productos</h3>
            </div>

            <hr />

            <form className='newPrSeccions' onSubmit={handleSubmit}>

                <div className='newPrLeft'>
                    <div className='newPrInputs'>
                        <label>Nombre</label>
                        <input type="text" value={formData.name} name='name' onChange={handleChange} required />
                    </div>
                    <div className='newPrInputs'>
                        <label>Descripción del producto</label>
                        <input type="text" value={formData.description} name='description' onChange={handleChange} required />
                    </div>

                    <div className='newPrInputs'>
                        <label>Cantidad mínima</label>
                        <input type="text" value={formData.minQuantity} name='minQuantity' onChange={handleChange} required />
                    </div>

                    <div className='newPrInputs'>
                        <label>Unidad de medida</label>
                        <select name="type" value={formData.type} onChange={handleChange} required>
                            <option value='' disabled={sel}>tipo</option>
                            <option value="un">Un</option>
                            <option value="kg">Kg</option>
                            <option value="lt">Lt</option>
                        </select>
                    </div>

                    <div className='newPrInputs'>
                        <label>Precio</label>
                        <input type="text" value={formData.price} name='price' onChange={handleChange} required />
                    </div>

                </div>

                <div className='newPrRight'>

                    <div className='newPrInputs'>
                        <label>Imagen</label>
                        <input type="file" name="file" accept="image/*" onChange={handleChange} />
                    </div>

                    <div className='newPrInputs'>
                        <label>Categoria</label>
                        <select name="category" value={formData.category} onChange={handleChange} required>
                            <option defaultValue="" disabled={sel}>categ.</option>
                            <option value="snacks">snack</option>
                            <option value="food">almacen</option>
                            <option value="stiff">fiambres</option>
                            <option value="cheese">quesos</option>
                            <option value="dairy">lacteos</option>
                            <option value="pickles">encurtidos</option>
                            <option value="sweets">dulces</option>
                            <option value="preserves">conservas</option>
                            <option value="perfumery">perfumeria</option>
                            <option value="cleanning">limpieza</option>
                        </select>
                    </div>

                    <button className="btn-A" type="submit" disabled={loading}>
                        {loading ? <Spineer /> : 'Modifica el producto'}
                    </button>
                </div>
            </form>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default UpdateProductData;