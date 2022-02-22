import { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";

function CreaditCard() {
  const reservation = useSelector((state) => state.reservation.value);

  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let years = ["2022", "2023", "2024", "2025"];

  useEffect(() => {
    ref.current.focus();
  }, []);

  let changeHandler = async () => {
    let cardInfo = {
      card_name: name,
      card_number: number,
      card_cvv: cvc,
      card_month: month,
      card_year: year,
    };
    dispatch(
      updateState({
        ...reservation,
        cardInfo: cardInfo,
      })
    );
  };

  const ref = useRef(null);
  return (
    <div className="c-payment__credit">
      <Cards number={number} name={name} cvc={cvc} focused={focus} expiry="" />
      <form className="c-payment__form" onChange={changeHandler}>
        <p className="c-payment__form--title">Kredi Kart Bilgileri</p>
        <div className="c-payment__form--section">
          <label>Kartın Üzerindeki İsim</label>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            pattern="[A-Za-z]{3}"
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div className="c-payment__form--section">
          <label>Kartın Numarası</label>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            pattern="[0-9]"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />
        </div>
        <div className="c-payment__form--section">
          <label>Kart Son kullanım Tarihi</label>
          <div className="c-payment__form--section-expiration">
            <select onChange={(e) => setMonth(e.target.value)}>
              {months.map((item) => (
                <option
                  onChange={(e) => setMonth(e.target.value)}
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              ))}
            </select>
            <select onChange={(e) => setYear(e.target.value)}>
              {years.map((item) => (
                <option
                  onChange={(e) => setYear(e.target.value)}
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="c-payment__form--section">
          <label>CVV</label>
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
      </form>
    </div>
  );
}

export default CreaditCard;
