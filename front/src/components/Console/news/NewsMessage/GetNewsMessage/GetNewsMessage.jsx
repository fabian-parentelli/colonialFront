import moment from 'moment';
import './getNewsMessage.scss';
import { getAllNewsApi } from '../../../../../helpers/news/getAllNews.api.js';
import { updateNewsActiveApi } from '../../../../../helpers/news/updateNewsActive.api.js';

const GetNewsMessage = ({ newMess, setNewMess, setLoading }) => {

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updateNewsActiveApi(id);
        if(response.date) {
            const response = await getAllNewsApi();
            setNewMess(response.result);
            setLoading(false);
        };
    };

    return (
        <div className='getNewsMessage'>
            <h4>Anuncios existentes</h4>
            {newMess &&
                newMess.map((mess) => (
                    <div key={mess._id} className='getNMCont'>
                        <div className='getNMin'>
                            <p>{moment(mess.date).format('DD/MM/YYYY')}</p>
                            <p>{mess.title}</p>
                            <button onClick={() => handleActive(mess._id)}>
                                {mess.active ? 'Activo' : 'Desactivo' }
                            </button>
                        </div>
                        <p className='messageTxt'>{mess.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default GetNewsMessage;