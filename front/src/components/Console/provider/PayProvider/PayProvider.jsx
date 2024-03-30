import './payProvaider.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../../utils/Spinner/Spinner.jsx';
import { getProvByIdApi } from '../../../../helpers/providers/getProvById.api.js';
import { payProviderApi } from '../../../../helpers/providers/payProvider.api.js';

const PayProvider = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [provider, setProvider] = useState(null);
    const [pay, setPay] = useState({ amount: '', pay: 'ef' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await getProvByIdApi(id);
            setProvider(response.provider);
            setPay(prevPay => ({ ...prevPay, amount: response.provider.owe.credit }));
        };
        fetchData(id);
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await payProviderApi(id, pay)
        setTimeout(() => {
            navigate('/console')
            setLoading(false);
        }, 2000);
    };

    return (
        <div className='payProvider'>
            {provider &&
                <form onSubmit={handleSubmit}>
                    <h2>Pago a proveedor {provider.name}</h2>
                    {provider.owe.isOwe && <p>Tu saldo es de ${provider.owe.credit}</p>}

                    <div className='newProviderDiv'>
                        <label>Pago</label>
                        <input
                            type="text"
                            name="amount"
                            placeholder="Este campo debe ser completado"
                            value={pay.amount}
                            onChange={(e) => setPay({ ...pay, amount: e.target.value })}
                            required
                        />
                    </div>

                    <div className='updateProviderRadio'>
                        <div className='upProvRad'>
                            <label>Efectivo</label>
                            <input
                                type="radio"
                                name="pay"
                                value="ef"
                                checked={pay.pay === 'ef'}
                                onChange={(e) => setPay({ ...pay, pay: e.target.value })}
                            />
                        </div>
                        <div className='upProvRad'>
                            <label>Mercado Pago</label>
                            <input
                                type="radio"
                                name="pay"
                                value="mp"
                                checked={pay.pay === 'mp'}
                                onChange={(e) => setPay({ ...pay, pay: e.target.value })}
                            />
                        </div>
                    </div>
                    <button className="btn-A" type="submit" disabled={loading}>
                        {loading ? <Spinner /> : 'Modificar Proveedor'}
                    </button>
                </form>
            }
        </div>
    );
};

export default PayProvider;