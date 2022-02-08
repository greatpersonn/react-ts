import Cart from '../../assets/images/shopcart.png';
import './shopcart.sass';

const Shopcart = () => {
    return(
        <div className="shopcart__wrapper">
            <img src={Cart} alt={Cart} />
        </div> 
    );
}

export default Shopcart;