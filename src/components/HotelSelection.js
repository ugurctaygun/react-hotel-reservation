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
  }, [fetchHotel, reservation.selectedHotel]);

  let handleHotelChange = (e) => {
    fetchHotelDetails(e.target.value);
  };

  let handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(
      updateState({
        ...reservation,
        [name]: value,
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
              {reservation.selectedHotelName ? (
                <option>{reservation.selectedHotelName}</option>
              ) : (
                <option>Rezervasyon yapmak istedi??iniz oteli se??iniz.</option>
              )}

              {hotelList.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.hotel_name}
                </option>
              ))}
            </select>
          </div>
          {reservation.selectedHotelName && (
            <div className="o-input__container">
              <DatePicker
                label={"Giri?? Tarihi"}
                htmlFor={"start-date"}
                name={"startDate"}
                onChange={handleInputChange}
                value={reservation.startDate && reservation.startDate}
              />
              <DatePicker
                label={"????k???? Tarihi"}
                htmlFor={"checkout-date"}
                name={"endDate"}
                onChange={handleInputChange}
                value={reservation.endDate && reservation.endDate}
              />
              <GuestNumberPicker
                label={"Yeti??kin Say??s??"}
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
                label={"??ocuk Say??s??"}
                htmlFor={"child-numder"}
                name={"childGuest"}
                valid={reservation.selectedHotel.child_status}
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
