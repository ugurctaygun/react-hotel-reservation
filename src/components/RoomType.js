function RoomType({
  sectionName,
  selection,
  cardTitle,
  image,
  totalDay,
  guestNo,
  price,
}) {
  const changeHandler = (e) => {
    let container = e.target.parentElement.parentElement;
    let cards = container.children;
    Array.from(cards).forEach((element) =>
      element.classList.remove("c-rooms__card--active")
    );
    e.target.parentElement.classList.add("c-rooms__card--active");
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
                <span>{totalDay} Gün</span>
                <span>{guestNo}</span>
                <p>Price: {item.price * totalDay}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomType;
