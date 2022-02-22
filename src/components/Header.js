import { useDispatch } from "react-redux";
import { updateState } from "../features/reservation";

function Header() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      updateState({
        step: 1,
        selectedHotel: {},
        selectedHotelName: "",
        startDate: "",
        endDate: "",
        adultGuest: "",
        childGuest: "",
        roomType: "",
        roomTypeName: "",
        roomScenic: "",
        roomScenicName: "",
        totalPrice: "",
        priceRate: "",
        roomPrice: "",
      })
    );
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <h1>Otel</h1>
          <h5>Rezervasyon Sistemi</h5>
        </div>
        <button className="o-button" onClick={clickHandler}>
          Yeni Rezervasyon Yapın
        </button>
      </nav>
    </header>
  );
}

export default Header;
