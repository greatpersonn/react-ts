import Carousel from 'react-elastic-carousel';

import './slider.sass';

const Slider = ({ arr, type }: { arr: Array<string>, type: string }) => {
    return (
        <div className="slider__wrapper">
            <Carousel isRTL={false} itemsToShow={6} pagination={false}>
                {type === "size" ?
                    arr.map((item) => (
                        <p className='slider__item' key={item}>{item}</p>
                    ))
                : arr.map((item) => (
                        <div className='slider__item' key={item}></div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider;