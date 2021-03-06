import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../features/reservation";

function RoomType({
  sectionName,
  selection,
  cardTitle,
  image,
  totalDay,
  adultGuest,
  childGuest,
  price,
  type,
}) {
  const reservation = useSelector((state) => state.reservation.value);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    let container = e.target.parentElement.parentElement;
    let cards = container.children;
    Array.from(cards).forEach((element) =>
      element.classList.remove("c-rooms__card--active")
    );
    e.target.parentElement.classList.add("c-rooms__card--active");

    if (type === "room") {
      let selectedRoomTypePrice =
        reservation.selectedHotel.room_type[e.target.value - 1];
      dispatch(
        updateState({
          ...reservation,
          roomType: e.target.value,
          roomTypeName: e.target.id,
          roomPrice: selectedRoomTypePrice.price,
          totalPrice: selectedRoomTypePrice.price * totalDay,
        })
      );
    } else {
      let selectedViewPercent =
        reservation.selectedHotel.room_scenic[e.target.value - 1];
      dispatch(
        updateState({
          ...reservation,
          roomScenic: e.target.value,
          roomScenicName: e.target.id,
          priceRate: selectedViewPercent.price_rate,
        })
      );
    }
  };
  let activeClass = (index) => {
    if (type === "room") {
      if (+reservation.roomType === index + 1) {
        return "c-rooms__card c-rooms__card--active";
      } else {
        return "c-rooms__card";
      }
    } else {
      if (+reservation.roomScenic === index + 1) {
        return "c-rooms__card c-rooms__card--active";
      } else {
        return "c-rooms__card";
      }
    }
  };
  return (
    <section className="o-container">
      <div className="c-rooms__type">
        <h4>{sectionName}</h4>
        <div className="c-rooms__container">
          {selection.map((item, index) => (
            <div
              key={item.id}
              className={activeClass(index)}
              onChange={changeHandler}
            >
              <input
                type="radio"
                name={sectionName}
                id={item.title}
                value={index + 1}
              />
              {type ? (
                <label htmlFor={item.title}>
                  <p>{item.title}</p>
                  <img src={item.photo} alt={item.description} />
                  <div className="c-rooms__card--info">
                    <div className="c-rooms__card--column">
                      <span>{totalDay} G??n</span>
                      {adultGuest && <span>{adultGuest} Yeti??kin</span>}
                      {childGuest && <span>{childGuest} ??ocuk</span>}
                    </div>
                    <p>{item.price * totalDay} TL</p>
                  </div>
                </label>
              ) : (
                <label htmlFor={item.title}>
                  <p>{item.title}</p>
                  <img src={item.photo} alt={item.description} />
                  <div className="c-rooms__card--percent">
                    <p>Fiyat Etki Oran??</p>
                    <span>+%{item.price_rate}</span>
                  </div>
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomType;
