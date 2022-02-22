import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import OrderDetail from "./OrderDetail";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../features/reservation";
function Result() {
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const newReservation = () => {
    dispatch(
      updateState({
        step: 1,
        selectedHotel: {},
        selectedHotelName: "",
        startDate: "",
        endDate: "",
        adultGuest: "",
        childGuest: "",
        roomType: "",
        roomTypeName: "",
        roomScenic: "",
        roomScenicName: "",
        totalPrice: "",
        priceRate: "",
        roomPrice: "",
      })
    );
  };
  const updateReservation = () => {
    dispatch(updateState({ ...reservation, step: 1 }));
  };
  return (
    <section className="o-container">
      <div className="c-result">
        <div className="c-result__header">
          <FontAwesomeIcon icon={faCheckCircle} />
          <p>Rezervasyon kaydınız başarıyla alınmıştır.</p>
          <span>
            Rezervasyon özetiniz aşağıdaki gibidir.Rezervasyon kaydınızda
            değişiklik veya yeni rezervasyon kaydı yapmak için aşağıdaki
            linkleri kullanabilirsiniz.
          </span>
          <div className="c-result__buttons">
            <button
              className="o-button o-button--primary"
              onClick={newReservation}
            >
              Yeni Rezervasyon Yap
            </button>
            <button
              className="o-button o-button--primary"
              onClick={updateReservation}
            >
              Rezervasyonu Güncelle
            </button>
          </div>
        </div>
        <div className="c-result__receipt">
          <OrderDetail result={true} />
        </div>
      </div>
    </section>
  );
}

export default Result;
