import { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function CreaditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
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
  let years = [2022, 2023, 2024, 2025];

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  return (
    <div className="c-payment__credit">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form className="c-payment__form">
        <p className="c-payment__form--title">Kredi Kart Bilgileri</p>
        <div className="c-payment__form--section">
          <label>Kartın Üzerindeki İsim</label>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />
        </div>
        <div className="c-payment__form--section">
          <label>Kart Son kullanım Tarihi</label>
          <div className="c-payment__form--section-expiration">
            <select>
              {months.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select>
              {years.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        /> */}
        </div>
        <div className="c-payment__form--section">
          <label>CVV</label>
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
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
