import './console.scss';
import Fields from './Fields/Fields';
import { Route, Routes } from 'react-router-dom';
import NewProducts from './products/NewProducts/NewProducts';
import GetProducts from './products/GetProducts/GetProducts';
import UpdateProducts from './products/UpdateProduct/UpdateProduct';
import UnseenOrders from './orders/UnseenOrders/UnseenOrders';
import VewOrders from './orders/VewOrders/VewOrders';
import HistoryOrders from './orders/HistoryOrders/HistoryOrders';
import NewProvider from './provider/NewProvider/NewProvider';
import VewProviders from './provider/VewProviders/VewProviders';
import UpdateProvider from './provider/UpdateProvider/UpdateProvider';
import PayProvaider from './provider/PayProvider/PayProvider';
import NewMessage from './news/NewsMessage/NewMessage';
import NewsSale from './news/NewsSale/NewsSale';
import ConsoleBody from './ConsoleBody/ConsoleBody';

const Console = () => {

    return (
        <div className='console'>
            <div className='consoleContainer'>
                <h2>Consola</h2>
                <Fields title={'Productos'} category={[{ name: 'ver', path: 'getproduct' }, { name: 'crear', path: 'newproduct' }]} />
                <Fields title={'Clientes'} category={[{ name: 'ver', path: '' }, { name: 'crear', path: '' }, { name: 'modificar', path: '' }]} />
                <Fields title={'Proveedores'} category={[{ name: 'ver', path: 'vewproviders' }, { name: 'crear', path: 'newprovider' }]} />
                <Fields title={'C. Corriente'} category={[{ name: 'proveedores', path: '' }, { name: 'clientes', path: '' }]} />
                <Fields title={'Pedidos'} category={[{ name: 'sin ver', path: 'unseenorders' }, { name: 'historicos', path: 'historyorders' }]} />
                <Fields title={'Anuncios'} category={[{ name: 'mensajes', path: 'newsMessage' }, { name: 'ofertas', path: 'newsSale' }]} />
            </div>
            <Routes>
                <Route path='/newproduct' element={<NewProducts />} />
                <Route path='/getproduct' element={<GetProducts />} />
                <Route path='/updateproduct/:id' element={<UpdateProducts />} />
                <Route path='/unseenorders' element={<UnseenOrders />} />
                <Route path='/veworder/:id' element={<VewOrders />} />
                <Route path='/historyorders' element={<HistoryOrders />} />
                <Route path='/newprovider' element={<NewProvider />} />
                <Route path='/vewproviders' element={<VewProviders />} />
                <Route path='/updateprovider/:id' element={<UpdateProvider />} />
                <Route path='/payprovider/:id' element={<PayProvaider />} />
                <Route path='/newsMessage' element={<NewMessage />} />
                <Route path='/newsSale' element={<NewsSale />} />
                <Route path='/' element={<ConsoleBody />} />
            </Routes>
        </div>
    );
};

export default Console;