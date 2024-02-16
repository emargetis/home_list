const Home = ({ home, onCardClick }) => {

  const handleCardClick = (e) => {
    e.preventDefault();
    onCardClick(home.homePlanId);
  }

  return (
    <a href={`/homes?home=${home.homePlanId}`} onClick={handleCardClick}>
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
}

export default Home;