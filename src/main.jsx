import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} errorElement={<NotFound />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

  </BrowserRouter>
);
