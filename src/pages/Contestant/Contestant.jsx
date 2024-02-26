import "./Contestant.scss";
import contestants from "../../data/contestants.json";
import { useParams } from "react-router-dom";

function Contestant() {
  const params = useParams();
  
  const foundContestant = contestants.find((contestant) => {
    return contestant.id === Number(params.contestantId)
  });

  if (!foundContestant) {
    return (
      <h2>Contestant not found</h2>
    )
  }

  const {
    name,
    age,
    rating,
    image_src: imageSrc,
    originalSeason,
    hometown,
    country,
  } = foundContestant;

  return (
    <article className="contestant">
      <h1>{name}</h1>
      <div>Original Season: {originalSeason}</div>
      <div>
        Hometown: {hometown}, {country}
      </div>
      <div>{age} years old</div>
      <div>Rating: {rating}</div>
      <img className="contestant__image" src={imageSrc} alt={name} />
    </article>
  );
}

export default Contestant;
