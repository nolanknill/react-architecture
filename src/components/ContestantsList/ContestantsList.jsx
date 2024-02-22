import "./ContestantsList.scss";
import ContestantNavItem from "../ContestantNavItem/ContestantNavItem";

function ContestantsList( { contestants, activeContestant, updateActiveContestant } ) {
    return (
        <ul className="contestants-list">
            {contestants.map((contestant) => {
                return (
                    <ContestantNavItem 
                        key={contestant.id}
                        contestant={contestant}
                        parentClass="contestants-list"
                        isActive={contestant.id === activeContestant.id}
                        updateActiveContestant={updateActiveContestant}
                        />
                )
            })}
        </ul>
    );
}

export default ContestantsList;