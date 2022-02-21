import { useSelector, useDispatch } from "react-redux";
import RoomType from "./RoomType";

function RoomSelection() {
  const reservation = useSelector((state) => state.reservation.value);
  console.log(reservation);
  let {
    selectedHotelName,
    selectedHotel,
    startDate,
    endDate,
    adultGuest,
    childGuest,
  } = reservation;

  return (
    <>
      <section className="o-container">
        <div className="c-rooms__detail">
          <div className="c-rooms__detail--info">
            <h3>{selectedHotelName} </h3>
            <span> ({selectedHotel.city})</span>
          </div>
          <div className="c-rooms__detail--info">
            <p>Giriş Tarihi: </p>
            <span>{startDate}</span>
            <p>Çıkış Tarihi: </p>
            <span>{endDate}</span>
            <p>Yetişkin Sayısı: </p>
            <span>{adultGuest}</span>

            <p>Çocuk Sayısı: </p>
            <span>{childGuest ? childGuest : 0}</span>
          </div>
        </div>
      </section>
      <RoomType
        sectionName={"Oda Tipi Seçiniz"}
        selection={selectedHotel.room_type}
      />
      <RoomType
        sectionName={"Manzara Seçimi"}
        selection={selectedHotel.room_scenic}
      />
    </>
  );
}

export default RoomSelection;
