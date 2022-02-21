import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";
import { useState } from "react";

function ProgressNavigation() {
  const [error, setError] = useState(false);
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const { adultGuest, endDate, startDate } = reservation;
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
  return (
    <section className="o-container">
      <div className="c-progress c-progress__nav">
        {reservation.step > 1 && (
          <button
            onClick={handlePreviousStep}
            className="o-button o-button--primary"
          >
            Geri
          </button>
        )}
        {adultGuest && endDate && startDate ? (
          <button
            onClick={handleNextStep}
            className="o-button o-button--primary o-button__continue"
          >
            Kaydet ve Devam Et
          </button>
        ) : (
          <>
            <button
              onClick={handleError}
              className="o-button o-button--primary o-button__continue"
            >
              Kaydet ve Devam Et
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default ProgressNavigation;
