import splitAddress from "../utils/splitAddress";
import convertAcresToSQFT from "../utils/convertAcresToSQFT";

const LotModal = ({ lot, homes, combinations, onModalClose }) => {
  lot = {
    ...lot,
    ...splitAddress(lot.address),
    ...convertAcresToSQFT(lot.acres)
  }

  const homeIds = combinations
    .filter((combo) => combo.lotId === lot.lotId)
    .map((combo) => combo.homePlanId);


  let filteredHomes = homes.filter((home) => homeIds.findIndex((homePlanId => homePlanId === home.homePlanId)) !== -1);

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
                src={lot.image}
                alt={lot.street}
              />
            </div>
            <div className="modalInformationContainer">
              <div className="lotInfoContainer">
                <h2>{lot.street}</h2>
                <p id="cityState">{lot.city}, {lot.state}</p>
                <p id="acreage">{lot.acres} acres - {lot.sqft} sqft</p>
                <p className="lotDescription">
                  {lot.description}
                </p>
              </div>
              <div>
                <button className="favoriteButton">
                  <img src="./src/assets/images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="compatibleOptionsContainer">
            <div id="compatibleOptionsTitle">
              <p>Compatible Homes</p>
            </div>
            <div className="compatibleOptionsList">
              {
                filteredHomes.map((home) => {
                  return (
                    <a key={home.id} href={`/homes?home=${home.homePlanId}`}>
                      <div className="cardContainer">
                        <div className="cardImageContainer">
                          <img
                            src={home.image}
                            alt={home.name}
                          />
                          <div>
                            <button className="favoriteButton highlighted">
                              <img src="./src/assets/images/heart.png" alt="heart icon" />
                            </button>
                          </div>
                        </div>
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

export default LotModal;