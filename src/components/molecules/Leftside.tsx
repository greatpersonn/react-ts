import Name from "../atoms/Name";
import Price from "../atoms/Price";

import './leftside.sass';

const Leftside = ({ name, price }: { name: string, price: number }) => {
    return (
        <div className="header__title">
            <Price price={price} />
            <Name name={name} />
        </div>
    )
}

export default Leftside;