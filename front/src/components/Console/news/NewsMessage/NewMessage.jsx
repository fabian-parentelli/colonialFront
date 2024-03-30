import './newMessage.scss';
import { useEffect, useState } from 'react';
import Load from '../../../../utils/Load.jsx';
import WriteMessage from './WriteMessage/WriteMessage';
import GetNewsMessage from './GetNewsMessage/GetNewsMessage';
import SnackbarAlert from '../../../../utils/SnackbarAlert.jsx';
import { getAllNewsApi } from '../../../../helpers/news/getAllNews.api.js';

const NewMessage = () => {

    const [newMess, setNewMess] = useState([]);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getAllNewsApi();
            if (response.status === 'success') {
                setNewMess(response.result);
            };
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='newMessage'>
            <h2>Anuncios</h2>
            <div className='newMessageDiv'>
                <WriteMessage setNewMess={setNewMess} setMessage={setMessage} setOpen={setOpen} setLoading={setLoading} />
                <GetNewsMessage newMess={newMess} setNewMess={setNewMess} setLoading={setLoading} />
            </div>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default NewMessage;