import './footer.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footerUp'>

                <div className='footerL'>

                    <div className='footerName'>
                        <img src="logo.png" alt="logo" />
                        <h5>La Colonial</h5>
                    </div>

                    <p className='footerP'> 
                        Distribuidora La Colonial, brindando lo mejor desde el 2017. Amplia variedad de productos: almacén, fiambres, quesos, lácteos, snacks, encurtidos, dulces, conservas, perfumería y limpieza. ¡Gracias por preferirnos y confiar en nuestra calidad!.
                    </p>

                    <div className='footerPhone'>
                        <PhoneIcon />
                        <p>+54 9 11 5943-7655</p>
                    </div>
                </div>

                <div className='footbetween'>
                    <h6>Secciones</h6>

                    <div className='footBetLine'></div>

                    <a href='#home' className='footBetList'>
                        <HomeIcon />
                        <p>Inicio</p>
                    </a>

                    <a href='#products' className='footBetList'>
                        <MenuBookIcon />
                        <p>Nuestros Produtcos</p>
                    </a>

                    <a className='footBetList'>
                        <FormatListNumberedIcon />
                        <p>Contacto</p>
                    </a>

                    <a className='footBetList'>
                        <PrivacyTipIcon />
                        <p>Políticas de privacidad</p>
                    </a>
                </div>

                <div className='footerR'>

                    <div className='footLDiv'>
                        <EmailIcon />
                        <p>email</p>
                    </div>

                    <div className='footLDiv'>
                        <PhoneIcon />
                        <p>Whatsapp</p>
                    </div>

                    <div className='footLDiv'>
                        <PlaceIcon />
                        <p>Villa Luzuriaga</p>
                    </div>

                    <p>Buenos Aires - Argentina</p>
                </div>
            </div>

            <div className='maxdev'>
                <a href='https://maxdev.com.ar/' target="_blank">Pagina desarrollada por <strong>Maxdev</strong></a>
                <img className='logomaxdev' src="logomaxdev.png" alt="maxdev" />
            </div>
        </div>
    );
};

export default Footer;