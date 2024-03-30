import Swal from 'sweetalert2';
import { useEffect } from 'react';

const SweetAlert = ({ onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); 
        }, 2000); 

        return () => clearTimeout(timer); 
    }, [onClose]);

    Swal.fire({
        title: 'Agregado al carrito',
        icon: 'success',
        position: 'bottom-end',
        timerProgressBar: true, 
        showConfirmButton: false, 
        toast: true, 
        timer: 2000 
    });

    return null; 
};

export default SweetAlert;