import Action from "../atoms/Action";

import Share from '../../assets/images/share.png';
import Favorites from '../../assets/images/favorites.png';

import './rightside.sass';

const Rightside = () => {
    return (
        <div className="header__subtitle">
            <Action photo={Share} />
            <Action photo={Favorites} />
        </div>
    );
}

export default Rightside;