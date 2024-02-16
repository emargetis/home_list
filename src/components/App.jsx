import { Routes, Route } from "react-router-dom";
import SideNav from "./SideNav";
import HomeList from "./HomeList";
import LotList from "./LotsList";
import { useState, useEffect } from 'react';
import { API } from "../services/apiClient";
import NotFound from "./NotFound"

function App() {
  const [homes, setHomes] = useState([]);
  const [lots, setLots] = useState([]);
  const [combinations, setCombinations] = useState([]);


  useEffect(() => {
    const fetchHomes = async () => {
      try {
        let data = await API.getHomePlans();
        setHomes(data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchLots = async () => {
      try {
        let data = await API.getLots();
        setLots(data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchCombinations = async () => {
      try {
        let data = await API.getCombinations();
        setCombinations(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchHomes();
    fetchLots();
    fetchCombinations();
  }, [])

  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/homes" element={<HomeList homes={homes} lots={lots} combinations={combinations} />} />
        <Route path="/lots" element={<LotList homes={homes} lots={lots} combinations={combinations} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
