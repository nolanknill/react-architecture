import "./ContestantNavItem.scss";
import { Link } from "react-router-dom";

function ContestantNavItem({ contestant }) {
    return (
        <li className="contestant-nav-item">
            <Link className="contestant-nav-item__link" to={`/contestants/${contestant.id}`}>
                <img className="contestant-nav-item__image" src={contestant.image_src} alt={contestant.name} /> {contestant.name}
            </Link>
        </li>
    );
}

export default ContestantNavItem;