import './newsMessage.scss';

const NewsMessage = ({ advert }) => {

    return (
        <div className='newsMessage'>
            {advert &&
                <>
                    <h2>{advert.title}</h2>
                    <p>{advert.description}</p>
                </>
            }
        </div>
    );
};

export default NewsMessage;