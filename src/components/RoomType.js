import { useState } from "react";

function RoomType({
  sectionName,
  selection,
  cardTitle,
  image,
  totalDay,
  guestNo,
  price,
}) {
  let [checked, setChecked] = useState(false);
  const changeHandler = (e) => {
    let container = e.target.parentElement.parentElement;
    let cards = container.children;
    Array.from(cards).forEach((element) =>
      element.classList.remove("c-rooms__card--active")
    );
    e.target.parentElement.classList.add("c-rooms__card--active");
    setChecked(e.target.id);
  };
  return (
    <section className="o-container">
      <div className="c-rooms__type">
        <h4>{sectionName}</h4>
        <div className="c-rooms__container">
          {selection.map((item) => (
            <div
              key={item.id}
              className="c-rooms__card"
              onChange={changeHandler}
            >
              <input type="radio" name={sectionName} id={item.title} />
              <label htmlFor={item.title}>
                <p>{item.title}</p>
                <img src={item.photo} alt={item.description} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomType;
