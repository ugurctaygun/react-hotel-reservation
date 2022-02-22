import { useSelector } from "react-redux";

import { useState } from "react";

function OrderDetail() {
  const reservation = useSelector((state) => state.reservation.value);
  let {
    selectedHotelName,
    selectedHotel,
    startDate,
    endDate,
    adultGuest,
    childGuest,
    roomScenicName,
    roomTypeName,
    totalPrice,
    priceRate,
    roomPrice,
  } = reservation;
  let correctCode = "CODE100";
  const [coupon, setCoupon] = useState();
  const [discount, setDiscount] = useState();
  const couponButtonHandler = () => {
    if (coupon === correctCode) {
      setDiscount(100);
    } else {
      alert("Kupon Kodu geçersiz");
    }
  };
  const couponInputHandler = (e) => {
    setCoupon(e.target.value);
  };
  return (
    <div className="c-order">
      <div className="c-order--title">
        <h3>{selectedHotelName} </h3>
        <span> ({selectedHotel.city})</span>
      </div>
      <div className="c-order__details">
        <div className="c-order__details--container">
          <div className="c-order__details--section">
            <p>Giriş Tarihi</p>
            <span>{startDate}</span>
          </div>
          <div className="c-order__details--section">
            <p>Çıkış Tarihi</p>
            <span>{endDate}</span>
          </div>

          <div className="c-order__details--section">
            <p>Yetişkin</p>
            <span>{adultGuest}</span>
          </div>
          <div className="c-order__details--section">
            <p>Çocuk</p>
            <span>{childGuest}</span>
          </div>
          <div className="c-order__details--section">
            <p>Oda Tipi</p>
            <span>{roomTypeName}</span>
          </div>
          <div className="c-order__details--section">
            <p>Manzara</p>
            <span>{roomScenicName}</span>
          </div>
        </div>

        <div className="c-order__coupon">
          <input
            type="tel"
            placeholder="Kupon Kodu (CODE100)"
            onChange={couponInputHandler}
          />
          <button
            className="o-button o-button--primary"
            onClick={couponButtonHandler}
          >
            Kodu Kullan
          </button>
        </div>
        <div className="c-order__details--container">
          <div className="c-order__price">
            <div className="c-order__price--section">
              <p>Oda Fiyatı</p>
              <span>{roomPrice} TL</span>
            </div>
            <div className="c-order__price--section">
              <p>Fiyat Etki Oranı</p>
              <span>%{priceRate}</span>
            </div>
            <div className="c-order__price--section">
              <p>Konaklama</p>
              <span>{totalPrice} TL</span>
            </div>
            {discount && (
              <div className="c-order__price--section">
                <p>İndirim</p>
                <span>-100 TL</span>
              </div>
            )}

            <div className="c-order__details--section c-order__price--total">
              <p>TOPLAM TUTAR</p>

              <span>{discount ? +totalPrice - discount : totalPrice} TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
