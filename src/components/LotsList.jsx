const LotList = () => {
  return (
    <div className="lotsContainer">
      <button className="button">Show Saved Lots</button>
      <div className="lotsList">
        <a href="./lot-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/plot_images/1018314458"
                alt="123-example-ln"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./src/assets/images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="lotInfoContainer">
              <h2>123 Example Ln</h2>
              <p id="cityState">Charlotte, NC</p>
              <p id="acreage">1.6 acres - 69,696 sqft</p>
              <p className="lotDescription">
                This sprawling lot is located on the outskirts of Charlotte,
                with nearby boat access to Example Lake and a straight shot
                to downtown Charlotte via Example Highway.
              </p>
            </div>
          </div>
        </a>
        <a href="./lot-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/plot_images/1018937216"
                alt="123-sample-ln"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="lotInfoContainer">
              <h2>123 Sample Ln</h2>
              <p id="cityState">Raleigh, NC</p>
              <p id="acreage">0.7 acres - 30,492 sqft</p>
              <p className="lotDescription">
                This spacious lot is in the gorgeous Example Neighborhood,
                surrounded by historic landmarks such as The Cool Things
                Museum and The Very Old House.
              </p>
            </div>
          </div>
        </a>
        <a href="./lot-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/plot_images/1043665691"
                alt="123-test-ct"
              />
              <div>
                <button className="favoriteButton">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="lotInfoContainer">
              <h2>123 Test Ct</h2>
              <p id="cityState">Charlotte, NC</p>
              <p id="acreage">0.28 acres - 12,197 sqft</p>
              <p className="lotDescription">
                This cozy lot is directly next to downtown Charlotte - from
                your front yard you can walk to uptown. Be sure to check out
                The Average Bowling Alley or one of the plenty of
                restaurants nearby!
              </p>
            </div>
          </div>
        </a>
        <a href="./lot-modal.html">
          <div className="cardContainer">
            <div className="cardImageContainer">
              <img
                src="https://storage.googleapis.com/plot_images/1030870481"
                alt="123-far-far-away-st"
              />
              <div>
                <button className="favoriteButton highlighted">
                  <img src="./images/heart.png" alt="heart icon" />
                </button>
              </div>
            </div>
            <div className="lotInfoContainer">
              <h2>123 Far Far Away St</h2>
              <p id="cityState">Nowhere, NC</p>
              <p id="acreage">9.15 acres - 398,574 sqft</p>
              <p className="lotDescription">
                This gigantic lot is far from any major population center -
                in fact, you’ll probably never meet a single person out
                here! If you’re looking for solitude at a bargain, this is
                the perfect place for you. There’s absolutely nothing around
                except nature.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default LotList;