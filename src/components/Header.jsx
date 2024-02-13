import logo from "../assets/img/bezhbarmak-logo.jpg";

function Header() {
  return (
    <div className="container">
      <img src={logo} id="logo" />
      <div>
        <h3 id="title">REACT BEZHBARMAK</h3>
        <p id="title-two">самый вкусный бежбармак во вселенной</p>
      </div>
    </div>
  );
}

export default Header;
