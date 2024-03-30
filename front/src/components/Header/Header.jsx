import './header.scss';

const Header = () => {

    return (
        <div className='header' id='home'>

            <div className='headerLeft'>

                <div className='headerTitle'>
                    <h1>La Colonial</h1>
                    <h2>Distribuidora</h2>
                </div>
                <p className='geaderParagrph'>
                    "Somos tu aliado en distribución: alimentos y productos de limpieza de calidad. En La Colonial, nos destacamos por la excelencia y la satisfacción del cliente. ¡Contáctanos para soluciones integrales que superan expectativas!"
                </p>

                <div className='headerPhone'>
                    <img src="phoneYelloow.png" alt="phone" />
                    <p>11-5943-7955</p>
                </div>
            </div>

            <img className='imgHeader' src="header.png" alt="header" />
        </div>
    );
};

export default Header;