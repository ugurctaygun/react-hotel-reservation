import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";
import { useState, useMemo } from "react";
import Api from "../helper/api";

function ProgressNavigation() {
  const api = useMemo(() => new Api(), []);
  const [error, setError] = useState(false);
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const {
    adultGuest,
    endDate,
    startDate,
    roomType,
    roomScenic,
    cardInfo,
    selectedHotel,
    childGuest,
    totalPrice,
  } = reservation;
  const finishOrder = (id) => {
    let orderJson = {
      hotel_id: selectedHotel.id,
      start_date: startDate,
      end_date: endDate,
      adult: adultGuest,
      child: childGuest,
      room_type: roomType,
      room_scenic: roomScenic,
      price: totalPrice,
      card_name: cardInfo.card_name,
      card_number: cardInfo.card_number,
      card_date_month: cardInfo.card_month,
      card_date_year: cardInfo.card_year,
      card_cvv: cardInfo.card_cvv,
    };
    api
      .postOrderDetails(orderJson)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const handleNextStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step + 1 }));
  };
  const handlePreviousStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step - 1 }));
  };
  const handlePayment = () => {
    finishOrder();
    dispatch(updateState({ ...reservation, step: reservation.step + 1 }));
  };
  const handleError = () => {
    setError(true);
    alert("Devam Etmek için bütün alanları doldurun");
  };

  if (reservation.step === 1) {
    return (
      <section className="o-container">
        <div className="c-progress c-progress__nav">
          <button
            onClick={
              adultGuest && endDate && startDate ? handleNextStep : handleError
            }
            className="o-button o-button--primary o-button__continue"
          >
            Kaydet ve Devam Et
          </button>
        </div>
      </section>
    );
  } else if (reservation.step === 2) {
    return (
      <section className="o-container">
        <div className="c-progress c-progress__nav">
          <button
            onClick={handlePreviousStep}
            className="o-button o-button--primary"
          >
            Geri
          </button>

          <button
            onClick={roomType && roomScenic ? handleNextStep : handleError}
            className="o-button o-button--primary o-button__continue"
          >
            Kaydet ve Devam Et
          </button>
        </div>
      </section>
    );
  } else if (reservation.step === 3) {
    return (
      <section className="o-container">
        <div className="c-progress c-progress__nav">
          <button
            onClick={handlePreviousStep}
            className="o-button o-button--primary"
          >
            Geri
          </button>

          <button
            className="o-button o-button--primary o-button__continue"
            onClick={() => {
              console.log(cardInfo);
              if (cardInfo) {
                cardInfo.card_cvv &&
                cardInfo.card_name &&
                cardInfo.card_number &&
                cardInfo.card_year &&
                cardInfo.card_month
                  ? handlePayment()
                  : handleError();
              } else {
                handleError();
              }
            }}
          >
            Ödemeyi Tamamla
          </button>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}

export default ProgressNavigation;
