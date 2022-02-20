import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Api from "../helper/api";

function HotelSelection() {
  let [hotelList, setHotelList] = useState("");
  let [selectedHotel, setSelectedHotel] = useState("");
  const api = new Api();
  const fetchHotel = () => {
    api
      .getHotelList()
      .then((response) => setHotelList(response.data))
      .catch((err) => console.log(err));
  };
  const fetchHotelDetails = (selectedID) => {
    api
      .getHotelDetails()
      .then((response) =>
        setSelectedHotel(
          response.data.filter((item) => item.hotel_id === +selectedID)
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  let handleHotelChange = (e) => {
    fetchHotelDetails(e.target.value);
  };

  if (selectedHotel) {
    console.log(selectedHotel);
  }

  return (
    <section className="o-container">
      {hotelList ? (
        <div className="c-selection">
          <div className="o-input--search">
            <FontAwesomeIcon icon={faSearch} />
            <select className="o-input " onChange={handleHotelChange}>
              <option disabled>
                Rezervasyon yapmak istediğiniz oteli seçiniz.
              </option>
              {hotelList.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.hotel_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </section>
  );
}

export default HotelSelection;
