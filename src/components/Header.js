// import "../styles/components/header.scss";
// import "../styles/objects/button.scss";

function Header() {
  return (
    <header>
      <nav className="naviga">
        <div class="nav__logo">
          <h1>Otel</h1>
          <h5>Rezervasyon Sistemi</h5>
        </div>
        <button className="o-button">Yeni Rezervasyon Yapın</button>
      </nav>
    </header>
  );
}

export default Header;
