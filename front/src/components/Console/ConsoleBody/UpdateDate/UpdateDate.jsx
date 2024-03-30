import './updateDate.scss';
import { useEffect, useState } from 'react';
import { getUpDateApi } from '../../../../helpers/upDate/getUpDate.api.js';
import { updateUpDateApi } from '../../../../helpers/upDate/updateUpDate.api.js';

const UpdateDate = () => {

    const [getDate, setGetDate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUpDateApi();
            if (response.status === 'success') {
                const hour = response.result[0].date;
                const data = new Date(hour).toLocaleString();
                setGetDate(data);
            };
        }; fetchData();
    }, []);

    const handleUpdate = async () => {
        const response = await updateUpDateApi();
        if(response.date) {
            const data = new Date(response.date).toLocaleString();
            setGetDate(data);
        };
    };

    return (
        <div className='updateDate'>
            <div className='updDateData'>
                <p>Última actualización</p>
                {getDate &&
                    <p>{getDate}</p>
                }
            </div>
            <button onClick={handleUpdate}>Actualizar</button>
        </div>
    );
};

export default UpdateDate;