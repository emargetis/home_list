import Home from "./Home";

const HomeList = ({ homes }) => {
  return (
    <div className="homesListContainer">
      <button className="button">Show Saved Homes</button>
      <div className="homesList">
        {
          homes.map((home) => {
            return <Home key={home.homePlanId} home={home}></Home>
          })
        }
      </div>
    </div>
  )
}

export default HomeList;