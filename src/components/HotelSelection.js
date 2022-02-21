import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Api from "../helper/api";
import DatePicker from "./DatePicker";
import GuestNumberPicker from "./GuestNumberPicker";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";
import Loader from "./Loader";

function HotelSelection() {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation.value);
  console.log(reservation);
  let [hotelList, setHotelList] = useState();
  let [selectedHotel, setSelectedHotel] = useState();
  const api = useMemo(() => new Api(), []);
  const fetchHotel = useCallback(() => {
    api
      .getHotelList()
      .then((response) => {
        setHotelList(response.data);
      })
      .catch((err) => console.log(err));
  }, [api]);
  const fetchHotelDetails = (selectedID) => {
    api
      .getHotelDetails()
      .then((response) => {
        setSelectedHotel(
          Object.assign(
            ...response.data.filter((item) => item.hotel_id === +selectedID)
          )
        );
        dispatch(
          updateState({
            ...reservation,
            selectedHotelName: hotelList.filter(
              (item) => item.id === selectedID
            )[0].hotel_name,
            selectedHotel: Object.assign(
              ...response.data.filter((item) => item.hotel_id === +selectedID)
            ),
          })
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchHotel();
    if (reservation.selectedHotel) {
      setSelectedHotel(reservation.selectedHotel);
    }
  }, [fetchHotel]);

  let handleHotelChange = (e) => {
    fetchHotelDetails(e.target.value);
  };

  let handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(
      updateState({
        ...reservation,
        [e.target.name]: value,
      })
    );
  };

  return (
    <section className="o-container">
      {hotelList ? (
        <div className="c-selection">
          <div className="o-input--search">
            <FontAwesomeIcon icon={faSearch} />
            <select className="o-input " onChange={handleHotelChange}>
              {reservation.selectedHotel ? (
                <option>{reservation.selectedHotelName}.</option>
              ) : (
                <option>Rezervasyon yapmak istediğiniz oteli seçiniz.</option>
              )}

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
                name={"startDate"}
                onChange={handleInputChange}
                value={reservation.startDate && reservation.startDate}
              />
              <DatePicker
                label={"Çıkış Tarihi"}
                htmlFor={"checkout-date"}
                name={"endDate"}
                onChange={handleInputChange}
                value={reservation.endDate && reservation.endDate}
              />
              <GuestNumberPicker
                label={"Yetişkin Sayısı"}
                htmlFor={"adult-numder"}
                name={"adultGuest"}
                maxNumberAllowed={
                  selectedHotel.max_adult_size
                    ? selectedHotel.max_adult_size + 1
                    : 5
                }
                valid={true}
                onChange={handleInputChange}
                value={reservation.adultGuest && reservation.adultGuest}
              />
              <GuestNumberPicker
                label={"Çocuk Sayısı"}
                htmlFor={"child-numder"}
                name={"childGuest"}
                valid={selectedHotel.child_status}
                onChange={handleInputChange}
                value={reservation.childGuest && reservation.childGuest}
              />
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default HotelSelection;
