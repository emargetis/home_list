import { useSearchParams } from "react-router-dom"
import Lot from "./Lot";
import LotModal from "./LotModal";

const LotList = ({ homes, lots, combinations }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lotParamId = Number(searchParams.get("lot"));
  const lotForModal = lots.find((lot) => lot.lotId === lotParamId);

  const handleCardClick = (id) => {
    setSearchParams({ lot: id })
  }

  const handleModalClose = () => {
    setSearchParams({});
  }

  return (
    <>
      <div className="lotsContainer">
        <button className="button">Show Saved Lots</button>
        <div className="lotsList">
          {
            lots.map((lot) => {
              return <Lot key={lot.lotId} lot={lot} onCardClick={handleCardClick} />
            })
          }
        </div>
      </div>
      {
        lotForModal ? <LotModal lot={lotForModal} homes={homes} combinations={combinations} onModalClose={handleModalClose} /> : <></>
      }
    </>
  )
}

export default LotList;