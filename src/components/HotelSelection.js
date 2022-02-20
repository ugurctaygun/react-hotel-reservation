import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Api from "../helper/api";
import DatePicker from "./DatePicker";
import GuestNumberPicker from "./GuestNumberPicker";
import { useSelector } from "react-redux";

function HotelSelection() {
  const reservation = useSelector((state) => state.reservation.value);
  let [hotelList, setHotelList] = useState("");
  let [selectedHotel, setSelectedHotel] = useState();
  const api = useMemo(() => new Api(), []);
  const fetchHotel = useCallback(() => {
    api
      .getHotelList()
      .then((response) => setHotelList(response.data))
      .catch((err) => console.log(err));
  }, [api]);
  const fetchHotelDetails = (selectedID) => {
    api
      .getHotelDetails()
      .then((response) => {
        console.log(response.data);
        setSelectedHotel(
          Object.assign(
            ...response.data.filter((item) => item.hotel_id === +selectedID)
          )
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchHotel();
  }, [fetchHotel]);

  let handleHotelChange = (e) => {
    fetchHotelDetails(e.target.value);
    console.log(selectedHotel);
  };

  return (
    <section className="o-container">
      {hotelList ? (
        <div className="c-selection">
          <div className="o-input--search">
            <FontAwesomeIcon icon={faSearch} />
            <select className="o-input " onChange={handleHotelChange}>
              <option>Rezervasyon yapmak istediğiniz oteli seçiniz.</option>
              {hotelList.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.hotel_name}
                </option>
              ))}
            </select>
          </div>
          {selectedHotel && (
            <div className="o-input__container">
              <DatePicker
                label={"Giriş Tarihi"}
                htmlFor={"start-date"}
                name={"trip-start"}
              />
              <DatePicker
                label={"Çıkış Tarihi"}
                htmlFor={"checkout-date"}
                name={"trip-end"}
              />
              <GuestNumberPicker
                label={"Yetişkin Sayısı"}
                htmlFor={"adult-numder"}
                name={"adult-numder"}
                maxNumberAllowed={
                  selectedHotel.max_adult_size
                    ? selectedHotel.max_adult_size + 1
                    : 5
                }
                valid={true}
              />
              <GuestNumberPicker
                label={"Çocuk Sayısı"}
                htmlFor={"child-numder"}
                name={"child-numder"}
                valid={selectedHotel.child_status}
              />
            </div>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </section>
  );
}

export default HotelSelection;
