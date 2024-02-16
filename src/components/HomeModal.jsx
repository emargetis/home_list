import splitAddress from "../utils/splitAddress";
import convertAcresToSQFT from "../utils/convertAcresToSQFT";

const HomeModal = ({ home, lots, combinations, onModalClose }) => {
  const lotIds = combinations
    .filter((combo) => combo.homePlanId === home.homePlanId)
    .map((combo) => combo.lotId);

  let filteredLots = lots.filter((lot) => lotIds.findIndex((lotId => lotId === lot.lotId)) !== -1);

  filteredLots = filteredLots.map((lot) => {
    return {
      ...lot,
      ...splitAddress(lot.address),
      ...convertAcresToSQFT(lot.acres)
    };
  })

  const handleModalClose = (e) => {
    e.preventDefault();
    onModalClose();
  }

  return (
    <div id="modal-container">
      <div className="screen" onClick={handleModalClose}></div>
      <div id="modal">
        <div className="modalContainer">
          <div className="selectedCardContainer">
            <div className="modalImageContainer">
              <img
                src={home.image}
                alt={home.name}
              />
            </div>
            <div className="modalInformationContainer">
              <div className="homeInfoContainer">
                <h3>{home.name}</h3>
                <p id="homeDetails">{home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft</p>
                <div className="tagsContainer">
                  {
                    home.tags.map((tag) => {
                      return <p key={tag} className="tags">{tag}</p>
                    })
                  }
                </div>
                <p className="description">
                  {home.description}
                </p>
              </div>
              <div>
                <button className="favoriteButton highlighted">
                  <img src="./src/assets/images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="compatibleOptionsContainer">
            <div id="compatibleOptionsTitle">
              <p>Compatible Lots</p>
            </div>
            <div className="compatibleOptionsList">
              {
                filteredLots.map((lot) => {
                  return (
                    <a key={lot.lotId} href={`/lots?lot=${lot.lotId}`}>
                      <div className="cardContainer">
                        <div className="cardImageContainer">
                          <img
                            src={lot.image}
                            alt={lot.street}
                          />
                          <div>
                            <button className="favoriteButton" id="false">
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
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeModal