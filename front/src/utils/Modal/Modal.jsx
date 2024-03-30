import ReactModal from 'react-modal';
import './modal.scss';

const Modal = ({ isOpen, onClose, message }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={message}
            className="custom-modal"
            overlayClassName="custom-modal-overlay"
        >
            <div className="modal-content">
                <p className='pModal'>{message}</p>
                <button className="btn-A" onClick={onClose}>Cerrar</button>
            </div>
        </ReactModal>
    );
};

export default Modal;