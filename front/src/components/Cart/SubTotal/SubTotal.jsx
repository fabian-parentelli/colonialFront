import './subTotal.scss';
import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";

const SubTotal = ({ id }) => {

    const { cart, totalProduct } = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(totalProduct(id));
    }, [cart]);

    return (
        <div className="subTotal">
            <p>sub-total </p>
            <span>${total}</span>
        </div>
    );
};

export default SubTotal;