import { useEffect, useState } from 'react';
import './navFind.scss';
import SearchIcon from '@mui/icons-material/Search';

const NavFind = ({ handleFindCatgory, handleInputChange, lookForValue }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div className='navFind' id='products'>
            <div className='navSearch'>
                <SearchIcon className='nfIcon' />
                <input
                    type="text"
                    placeholder='Buscar'
                    name='lookfor'
                    value={lookForValue}
                    onChange={handleInputChange}
                />
            </div>

            <p className='nfInput' onClick={handleToggle}>Filtrar por Categoria</p>

            <div className={`nfCategory ${isOpen && 'nfOpen'}`}>

                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('snacks'); }}>
                    <img src="snack.png" alt="snacks" />
                    <p>Snacks</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('food'); }}>
                    <img src="food.png" alt="food" />
                    <p>Almacén</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('stiff'); }}>
                    <img src="jamon.png" alt="stiff" />
                    <p>Embutidos</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('cheese'); }}>
                    <img src="queso.png" alt="cheese" />
                    <p>Quesos</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('dairy'); }}>
                    <img src="lacteos.png" alt="dairy" />
                    <p>Lácteos</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('pickles'); }}>
                    <img src="olivos.png" alt="pickles" />
                    <p>Encurtidos</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('sweets'); }}>
                    <img src="dulce.png" alt="sweets" />
                    <p>Dulces</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('preserves'); }}>
                    <img src="latas.png" alt="preserves" />
                    <p>Conservas</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('perfumery'); }}>
                    <img src="desodorante.png" alt="perfumery" />
                    <p>Perfumería</p>
                </div>
                <div className='nfCatIns' onClick={() => { handleToggle(); handleFindCatgory('cleanning'); }}>
                    <img src="limpieza.png" alt="cleaning" />
                    <p>Limpieza</p>
                </div>
            </div>
        </div>
    );
};

export default NavFind;