import Slider from '../atoms/Slder';
import Leftside from '../molecules/Leftside';
import Rightside from '../molecules/Rightside';

import { ArrayColor, ArraySize } from '../../data/data';

import './card.sass';

const Card = ({name, price}: {name: string, price: number}) => {

    return(
        <div className="card__container">
            <div className="card__header">
                <Leftside name={name} price={price}/>
                <Rightside />
            </div>
            <div className="card__footer">
                <Slider arr={ArrayColor} type={'color'} />
                <Slider arr={ArraySize} type={'size'} />
            </div>
        </div>
    );
}


export default Card;
