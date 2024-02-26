import contestants from "../../data/contestants.json";
import "./Contestants.scss";
import ContestantNavItem from "../../components/ContestantNavItem/ContestantNavItem";

function Contestants() {
    return (
        <ul className="contestants">
            {contestants.map((contestant) => {
                return (
                    <ContestantNavItem 
                        key={contestant.id}
                        contestant={contestant}
                        />
                )
            })}
        </ul>
    );
}

export default Contestants;