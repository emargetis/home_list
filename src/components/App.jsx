import { Routes, Route } from "react-router-dom";
import SideNav from "./SideNav";
import HomeList from "./HomeList";
import LotList from "./LotsList";
import { useState, useEffect } from 'react';
import { API } from "../services/apiClient";
import NotFound from "./NotFound"

function App() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        let data = await API.getHomePlans();
        setHomes(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchHomes();
  }, [])

  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/homes" element={<HomeList homes={homes} />} />
        <Route path="/lots" element={<LotList />} />
      </Routes>

    </div>
  )
}

export default App
