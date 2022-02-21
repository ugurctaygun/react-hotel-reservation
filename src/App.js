import Header from "./components/Header";
import Progress from "./components/Progress";
import ProgressNavigation from "./components/ProgressNavigation";
import HotelSelection from "./components/HotelSelection";
import RoomSelection from "./components/RoomSelection";
import { useSelector } from "react-redux";
import Payment from "./components/Payment";

function App() {
  const reservation = useSelector((state) => state.reservation.value);
  return (
    <div className="App">
      <Header />
      {reservation.step < 4 && <Progress />}
      {reservation.step === 1 && <HotelSelection />}
      {reservation.step === 2 && <RoomSelection />}
      {reservation.step === 3 && <Payment />}
      <ProgressNavigation />
    </div>
  );
}

export default App;
