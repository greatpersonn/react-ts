import './action.sass';

const Action = ({ photo }: { photo: string }) => {
    return (
        <div className="subtitle-action">
            <img src={photo} alt={photo} />
        </div>  
    )
}

export default Action;