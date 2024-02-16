import { useSearchParams } from "react-router-dom"
import Home from "./Home";
import HomeModal from "./HomeModal";

const HomeList = ({ homes, lots, combinations }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const homeParamId = Number(searchParams.get("home"));
  const homeForModal = homes.find((home) => home.homePlanId === homeParamId);

  const handleCardClick = (id) => {
    setSearchParams({ home: id })
  }

  const handleModalClose = () => {
    setSearchParams({});
  }

  return (
    <>
      <div className="homesListContainer">
        <button className="button">Show Saved Homes</button>
        <div className="homesList">
          {
            homes.map((home) => {
              return <Home key={home.homePlanId} home={home} onCardClick={handleCardClick} />
            })
          }
        </div>
      </div>
      {
        homeForModal ? <HomeModal home={homeForModal} lots={lots} combinations={combinations} onModalClose={handleModalClose} /> : <></>
      }
    </>
  )
}

export default HomeList;