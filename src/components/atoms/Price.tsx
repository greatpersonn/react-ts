import './price.sass';

const Price = ({ price }: { price: number }) => {
    return(
        <div className="title-price">
            ${price}
        </div>
    )
}

export default Price;