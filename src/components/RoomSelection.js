import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import RoomType from "./RoomType";

function RoomSelection() {
  let [totalDate, setTotalDate] = useState(0);
  const reservation = useSelector((state) => state.reservation.value);
  let {
    selectedHotelName,
    selectedHotel,
    startDate,
    endDate,
    adultGuest,
    childGuest,
  } = reservation;

  let getTotalStayDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setTotalDate(diffDays);
  };

  useEffect(() => {
    if (reservation.startDate) {
      getTotalStayDate(reservation.startDate, reservation.endDate);
    }
  }, [reservation.startDate, reservation.endDate]);

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
        totalDay={totalDate}
        type={"room"}
        adultGuest={adultGuest}
        childGuest={childGuest}
      />
      <RoomType
        sectionName={"Manzara Seçimi"}
        selection={selectedHotel.room_scenic}
      />
    </>
  );
}

export default RoomSelection;
