import { useSelector, useDispatch } from "react-redux";

function RoomSelection() {
  const reservation = useSelector((state) => state.reservation.value);
  let selectedHotelName = reservation.selectedHotelName;
  let selectedHotelData = reservation.selectedHotel;
  return (
    <section className="o-container">
      <div className="c-rooms">
        {selectedHotelName}
        <span> ({selectedHotelData.city})</span>
      </div>
    </section>
  );
}

export default RoomSelection;
