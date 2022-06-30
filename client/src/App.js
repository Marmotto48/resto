import "./App.css";
import ReservationResto from "./pages/Reservation/ReservationResto";
import ReservationCafe from "./pages/Reservation/ReservationCafe";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <ReservationResto />
      <ReservationCafe />
    </div>
  );
}

export default App;
