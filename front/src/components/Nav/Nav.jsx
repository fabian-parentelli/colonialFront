import './nav.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../context/LoginContext';


const Nav = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { isLogin, user, logout } = useLoginContext();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        const dataFetch = async () => { await isLogin() }; dataFetch();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClassName = `nav ${scrolled ? 'colorVew' : 'transparent'}`;
    const navListClassName = `navList ${isMenuOpen ? 'navListOpen' : 'navListClosed'}`;

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        logout();
        toggleMenu();
    };

    return (
        <div className={navClassName}>
            <Link to={'/'}>
                <img className='logo' src='logo.png' alt="logo" />
            </Link>
            <div className={navListClassName}>
                {!user.logged && <Link to={'/login'} onClick={toggleMenu}>Iniciar sesión</Link>}
                <Link to={'/cart'} onClick={toggleMenu}>Carrito</Link>
                {user.logged && <Link to={"/"}><img onClick={handleLogout} className='door' src="door.png" alt="go" /></Link>}
            </div>
            <img className='menu' onClick={toggleMenu} src="menu.png" alt="menu" />
        </div>
    );
};

export default Nav;