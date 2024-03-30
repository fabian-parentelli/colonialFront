import './getProductsData.scss';
import SearchIcon from '@mui/icons-material/Search';
import GetProductsTable from './GetProductsTable/GetProductsTable'

const GetProductsData = ({ products, handleChangePage, handleInputChange, lookForValue }) => {

    return (
        <div className='getProductsData'>
            <h2>Productos</h2>
            <div className='gtpContainer'>
                <div className='gtpFuntions'>
                    <p>Ver</p>
                    <p>Modificar</p>
                    <p>Activar</p>
                    
                    <div className='gtpSearch'>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder='Buscar'
                            name='lookfor'
                            value={lookForValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <GetProductsTable products={products} handleChangePage={handleChangePage} />
            </div>
        </div>
    );
};

export default GetProductsData;