import Leftside from '../molecules/Leftside';
import Rightside from '../molecules/Rightside';

import './card.sass';

const Card = ({name, price}: {name: string, price: number}) => { 
    return(
        <div className="card__container">
            <div className="card__header">
                <Leftside name={name} price={price}/>
                <Rightside />
            </div>
            <div className="card__footer">
                
            </div>
        </div>
    );
}


export default Card;
