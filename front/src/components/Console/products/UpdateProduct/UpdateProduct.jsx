import UpdateProductData from "./UpdateProductData";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getProductByIdApi } from '../../../../helpers/products/getProductById.api.js';
import { updateProductApi } from '../../../../helpers/products/updateProduct.api.js';

const UpdateProducts = () => {

    const { id } = useParams();
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

    useEffect(() => {
        const dataFetch = async (id) => {
            const response = await getProductByIdApi(id);
            setFormData({
                name: response.product.name || '',
                description: response.product.description || '',
                minQuantity: response.product.minQuantity || '',
                type: response.product.type || '',
                price: response.product.price || '',
                category: response.product.category || ''
            })
        }; dataFetch(id);
    }, []);

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
        const response = await updateProductApi(data, id);
        if(response.status === 'success') {
            setIsModalOpen(true);
            setMessage('Producto modificado correctamente');
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

        <UpdateProductData
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            isModalOpen={isModalOpen}
            message={message}
            closeModal={closeModal}
            sel={sel}
            formData={formData}
        />

    );
};

export default UpdateProducts;