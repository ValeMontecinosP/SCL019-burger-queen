import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Breakfast from './components/Breakfast';
import DailyMenu from './components/DailyMenu';
import Kitchen from "./components/Kitchen";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Menu">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="breakfast" element={<Breakfast />} />
        <Route path="dailymenu" element={<DailyMenu />} />
        <Route path="kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

export default App;
