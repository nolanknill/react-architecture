import "./ContestantDetails.scss";

function ContestantDetails({ contestant }) {
  const {
    name,
    age,
    rating,
    image_src: imageSrc,
    originalSeason,
    hometown,
    country,
  } = contestant;

  return (
    <article className="contestant-details">
        <h1>{name}</h1>
        <div>Original Season: {originalSeason}</div>
        <div>Hometown: {hometown}, {country}</div>
        <div>{age} years old</div>
        <div>Rating: {rating}</div>
        <img className="contestant-details__image" src={imageSrc} alt={name} />
    </article>
  )
}

export default ContestantDetails;
