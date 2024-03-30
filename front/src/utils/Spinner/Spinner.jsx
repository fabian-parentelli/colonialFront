import './spineer.scss';

const Spineer = () => {
    return (
        <div className='spineer-container'>
            <p>Cargando</p>
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    )
};

export default Spineer;