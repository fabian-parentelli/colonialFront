import './vewProviders.scss';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllProviders } from "../../../../helpers/providers/getAllProviders.api";

const VewProviders = () => {

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setProviders(await getAllProviders());
        }; fetchData();
    }, []);

    return (
        <div className="vewProviders">
            <h2>Proveedores</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Activo</th>
                        <th>Crédito</th>
                        <th>Modificar</th>
                        <th>Pagar</th>
                    </tr>
                </thead>
                <tbody>
                    {providers && providers.providers.map((prov) => (
                        <tr key={prov._id}>
                            <td>{prov.name}</td>
                            <td>{prov.address}</td>
                            <td>{prov.active === true ? 'si' : 'no'}</td>
                            <td>$ {prov.owe.credit}</td>
                            <td className='tdLinkRprovider'>
                                {prov.owe.isOwe === true ? (
                                    <Link to={`/console/payprovider/${prov._id}`} className='linkProvider'>
                                        Pagar
                                    </Link>
                                ) : (
                                    <span className='linkProvider'>No hay saldo</span>
                                )}
                            </td>
                            <td>
                                <Link to={`/console/updateprovider/${prov._id}`} className='linkProvider'>
                                    modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewProviders;