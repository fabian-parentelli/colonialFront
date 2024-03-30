import { useState } from 'react';
import NewProductData from './NewProductData';
import { useNavigate } from 'react-router-dom';
import { newProductsApi } from '../../../../helpers/products/newProduct.api';

const NewProducts = () => {

    const navigate = useNavigate();
    const [sel, setSel] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        minQuantity: '',
        type: '',
        price: '',
        File: null,
        category: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: files ? files[0] : value }));
        setSel(true);
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const data = new FormData();
        for (let key in formData) { data.append(key, formData[key]) };
        const response = await newProductsApi(data);
        if(response.data.status === 'success') {
            setIsModalOpen(true);
            setMessage('Producto agregado correctamente');
            setTimeout(() => { navigate('/console') }, 2000);
            setLoading(false);
        } else {
            setIsModalOpen(true);
            setMessage(response.error);
        };
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <NewProductData
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            isModalOpen={isModalOpen}
            message={message}
            closeModal={closeModal}
            sel={sel}
        />
    );
};

export default NewProducts;