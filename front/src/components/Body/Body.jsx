import Header from "../Header/Header";
import Products from "./Products/Products";
import { useEffect, useState } from "react";
import NewSale from "../news/NewsSale/NewSale.jsx";
import NewsMessage from "../news/NewsMessage/NewsMessage";
import { getSaleTrueApi } from '../../helpers/products/getSaleTrue.api.js';
import { getNewsIsActiveApi } from '../../helpers/news/getNewsIsActive.api.js';
import DateUpdate from "./DateUpdate/DateUpdate.jsx";

const Body = () => {

    const [newsMessage, setNewsMessage] = useState('');
    const [advert, setAdvert] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNewsIsActiveApi();
            console.log(response);
            if (response.status === 'success') {
                setNewsMessage('newsMessage');
                setAdvert(response.result);
            } else {
                const data = await getSaleTrueApi();
                if (data.status === 'success') {
                    setNewsMessage('newsSales');
                    setAdvert(data.result[0]);
                    if (data.result.length === 0) {
                        setNewsMessage('');
                    };
                };
            };
        }; fetchData();
    }, []);

    return (
        <div>
            <Header />
            <DateUpdate />
            {newsMessage === 'newsMessage' && <NewsMessage advert={advert} />}
            {newsMessage === 'newsSales' && <NewSale advert={advert} />}
            <Products />
        </div>
    );
};

export default Body;