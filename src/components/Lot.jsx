import splitAddress from "../utils/splitAddress";
import convertAcresToSQFT from "../utils/convertAcresToSQFT";

const Lot = ({ lot, onCardClick }) => {
  lot = {
    ...lot,
    ...splitAddress(lot.address),
    ...convertAcresToSQFT(lot.acres)
  }

  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(lot.lotId);
  }

  return (
    <a href={`/lots?lot=${lot.lotId}`} onClick={handleCardClick}>
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img
            src={lot.image}
            alt={lot.street}
          />
          <div>
            <button className="favoriteButton">
              <img src="./src/assets/images/heart.png" alt="heart icon" />
            </button>
          </div>
        </div>
        <div className="lotInfoContainer">
          <h2>{lot.street}</h2>
          <p id="cityState">{lot.city}, {lot.state}</p>
          <p id="acreage">{lot.acres} acres - {lot.sqft} sqft</p>
          <p className="lotDescription">
            {lot.description}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Lot