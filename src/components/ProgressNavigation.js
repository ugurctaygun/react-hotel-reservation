import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";
import { useState } from "react";

function ProgressNavigation() {
  const [error, setError] = useState(false);
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const { adultGuest, endDate, startDate, roomType, roomScenic } = reservation;
  const handleNextStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step + 1 }));
  };
  const handlePreviousStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step - 1 }));
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
            onClick={roomType && roomScenic ? handleNextStep : handleError}
            className="o-button o-button--primary o-button__continue"
          >
            Ödemeyi Tamamla
          </button>
        </div>
      </section>
    );
  }
}

export default ProgressNavigation;
