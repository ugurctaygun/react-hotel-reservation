import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";

function ProgressNavigation() {
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const handleNextStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step + 1 }));
  };
  const handlePreviousStep = () => {
    dispatch(updateState({ ...reservation, step: reservation.step - 1 }));
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
        <button
          onClick={handleNextStep}
          className="o-button o-button--primary o-button__continue"
        >
          Kaydet ve Devam Et
        </button>
      </div>
    </section>
  );
}

export default ProgressNavigation;
