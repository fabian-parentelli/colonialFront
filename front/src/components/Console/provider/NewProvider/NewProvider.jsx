import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewProviderData from "./NewProviderData";
import { newProviderApi } from "../../../../helpers/providers/newProvider.api";

const NewProvider = () => {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [values, setValues] = useState({ name: '', address: '', phone: '' });

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newProviderApi(values);
        if (response.status === 'success') {
            setIsModalOpen(true);
            setMessage('Proveedor agregado exitosamente');
            setTimeout(() => { navigate('/console') }, 2000);
        } else {
            setIsModalOpen(true);
            setMessage(response.error);
        };
        setLoading(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div >
           <NewProviderData 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isModalOpen={isModalOpen}
                loading={loading}
                message={message}
                values={values}
                closeModal={closeModal}
            />
        </div>
    );
};

export default NewProvider;