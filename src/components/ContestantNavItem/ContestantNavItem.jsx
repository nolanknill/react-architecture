import "./ContestantNavItem.scss";

function ContestantNavItem({ contestant, isActive, updateActiveContestant }) {
    let className = "contestant-nav-item";
    if (isActive) {
        className += " contestant-nav-item--selected";
    }

    const handleClick = () => {
        updateActiveContestant(contestant.id);
    }

    return (
        <li onClick={handleClick} className={className}>
            <img className="contestant-nav-item__image" src={contestant.image_src} alt={contestant.name} /> {contestant.name}
        </li>
    );
}

export default ContestantNavItem;