import './pager.scss';

const Pager = ({ products, handleChangePage }) => {

    return (
        <div className='pager'>

            {products && products.hasPrevPage === true && 
                <p className='gtppagerNextPage'
                    onClick={()=>handleChangePage(products.prevPage)}
                >
                    {products.prevPage}
                </p>
            }

            {products && products.page && <p className='gtppagerActualPage'>{products.page}</p>}

            {products && products.hasNextPage === true &&
                <p className='gtppagerNextPage'
                    onClick={() => handleChangePage(products.nextPage)}
                >
                    {products.nextPage}
                </p>
            }
        </div>
    );
};

export default Pager;