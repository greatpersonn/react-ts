import './name.sass';

const Name = ({ name }: { name: string }) => {
    return (
        <div className="title-name">
            {name}
        </div>
    )
}

export default Name;