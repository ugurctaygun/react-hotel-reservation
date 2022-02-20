import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faBed,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Progress() {
  const reservation = useSelector((state) => state.reservation.value);
  return (
    <section className="o-container">
      <div className="c-progress">
        <div
          className={
            "c-progress__step " +
            (reservation.step === 1 && "c-progress__step--active")
          }
        >
          <FontAwesomeIcon icon={faHotel} />
          <p>Otel ve Tarih Seçimi</p>
        </div>
        <div
          className={
            "c-progress__step " +
            (reservation.step === 2 && "c-progress__step--active")
          }
        >
          <FontAwesomeIcon icon={faBed} />
          <p>Oda Tipi ve Manzara seçimi</p>{" "}
        </div>
        <div
          className={
            "c-progress__step " +
            (reservation.step === 3 && "c-progress__step--active")
          }
        >
          <FontAwesomeIcon icon={faCreditCard} />
          <p>Önizleme ve Ödeme İşlemleri</p>
        </div>
      </div>
    </section>
  );
}

export default Progress;
