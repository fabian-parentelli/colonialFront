import './dateUpdate.scss';
import { getUpDateApi } from '../../../helpers/upDate/getUpDate.api.js';
import { useEffect, useState } from 'react';

const DateUpdate = () => {

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

    return (
        <div className='dateUpdate'>
            {getDate &&
                <p>Última actualización {getDate}</p>
            }
        </div>
    );
};

export default DateUpdate;