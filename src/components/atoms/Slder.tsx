import Carousel from 'react-elastic-carousel';

import './slider.sass';

const Slider = ({ arr, type, setFocus }: { arr: Array<string>, type: string, setFocus: Function }) => {


    return (
        <div className="slider__wrapper">
            <Carousel isRTL={false} itemsToShow={6} pagination={false}>
                {type === "size" ?
                    arr.map((item) => (
                        <p className='slider__item' key={item} onClick={() => { setFocus(false); }} >{item}</p>
                    ))
                : 
                    arr.map((item) => (
                        <div className='slider__item' key={item}>
                            <div className='item'>

                            </div>
                        </div>
                    ))}
            </Carousel>
        </div>
    )
}

export default Slider;