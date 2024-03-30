import './updateProvider.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../../utils/Spinner/Spinner.jsx';
import { getProvByIdApi } from '../../../../helpers/providers/getProvById.api.js';
import { updateProviderApi } from '../../../../helpers/providers/updateProvider.api.js';

const UpdateProvider = () => {
    const { id } = useParams();
    const [provider, setProvider] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await getProvByIdApi(id);
            setProvider(response.provider)
        }; fetchData(id);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProvider(prevProvider => ({
            ...prevProvider,
            [name]: name === 'active' ? (value === 'true' ? true : false) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await updateProviderApi(provider)
        setTimeout(() => {
            navigate('/console')
            setLoading(false);
        }, 2000);
    };

    return (
        <div className='updateProvider'>
            {provider &&
                <div className='updateProviderIn'>
                    <h2>Editar los datos de {provider.name}</h2>
                    <form className="formRegister" onSubmit={handleSubmit}>

                        <div className='newProviderDiv'>
                            <label>Teléfono</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Este campo debe ser completado"
                                value={provider.phone}
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
                                value={provider.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='updateProviderRadio'>
                            <div className='upProvRad'>
                                <label>Activo</label>
                                <input
                                    type="radio"
                                    name="active"
                                    value="true"
                                    checked={provider.active === true}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='upProvRad'>
                                <label>Inactivo</label>
                                <input
                                    type="radio"
                                    name="active"
                                    value="false"
                                    checked={provider.active === false}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button className="btn-A" type="submit" disabled={loading}>
                            {loading ? <Spinner /> : 'Modificar Proveedor'}
                        </button>
                    </form>
                </div>
            }
        </div>
    );
};

export default UpdateProvider;