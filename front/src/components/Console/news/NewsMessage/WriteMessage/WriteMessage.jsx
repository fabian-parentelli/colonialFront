import './writeMessage.scss';
import { useState } from 'react';
import { createNewsApi } from '../../../../../helpers/news/createNews.api.js';
import { getAllNewsApi } from '../../../../../helpers/news/getAllNews.api.js';

const WriteMessage = ({ setNewMess, setMessage, setOpen, setLoading }) => {

    const [values, setValues] = useState({ title: '', description: '' });

    const handleInputChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value }) };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await createNewsApi(values);
        if (result.title) {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Mensaje creado' })
            setValues({ title: '', description: '' });
            const response = await getAllNewsApi();
            setNewMess(response.result);
            setLoading(false);
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    return (
        <div className='writeMessage'>
            <h3>nuevo mensaje</h3>
            <form onSubmit={handleSubmit} className='formWriteMessage'>
                <input onChange={handleInputChange} value={values.title || ''} type="text" name='title' placeholder='Titulo' required />
                <input onChange={handleInputChange} value={values.description || ''} className='txtA' type="text" name='description' placeholder='Descripción' required />
                <button className="btn" type="submit">Crear</button>
            </form>
        </div>
    );
};

export default WriteMessage;