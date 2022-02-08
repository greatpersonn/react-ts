import { useState } from 'react';

import Slider from '../atoms/Slder';
import Leftside from '../molecules/Leftside';
import Rightside from '../molecules/Rightside';
import Shopcart from '../atoms/Shopcart';

import { ArrayColor, ArraySize } from '../../data/data';

import './card.sass';

const Card = ({ name, price, stock }: { name: string, price: number, stock: boolean }) => {
    const [isFocus, setFocus] = useState<boolean>(true);

    return (
        <div className={stock ? "card__container" : "out-stock"}>
            {
                stock ?
                    <>
                        <div className="card__header">
                            <Leftside name={name} price={price} />
                            <Rightside />
                        </div>
                        <div className="card__footer">
                            <Slider arr={ArrayColor} type={'color'} setFocus={setFocus} />
                            <div className={isFocus ? "size__wrapper" : "focus-size__wrapper"}>
                                <Slider arr={ArraySize} type={'size'} setFocus={setFocus} />
                                {isFocus && <Shopcart />}
                            </div>
                        </div>
                    </>

                    :
                    <>
                        <div className="card__header">
                            <Leftside name={name} price={price} />
                        </div>
                        <div className="stock__wrapper">
                            <p>Out of stock</p>
                        </div>
                    </>
            }
        </div>
    );
}


export default Card;
