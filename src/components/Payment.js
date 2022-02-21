import CreditCard from "./CreaditCard";
import OrderDetail from "./OrderDetail";

function Payment() {
  return (
    <section className="o-container">
      <div className="c-payment__container">
        <CreditCard />
        <OrderDetail />
      </div>
    </section>
  );
}

export default Payment;
