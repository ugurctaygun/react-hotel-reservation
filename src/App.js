import Header from "./components/Header";
import Progress from "./components/Progress";
import ProgressNavigation from "./components/ProgressNavigation";
import HotelSelection from "./components/HotelSelection";
import RoomSelection from "./components/RoomSelection";
import { useSelector } from "react-redux";

function App() {
  const reservation = useSelector((state) => state.reservation.value);
  console.log(reservation);
  return (
    <div className="App">
      <Header />
      {reservation.step < 4 && <Progress />}
      {reservation.step === 1 && <HotelSelection />}
      {reservation.step === 2 && <RoomSelection />}
      <ProgressNavigation />
    </div>
  );
}

export default App;
