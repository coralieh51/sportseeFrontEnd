import logo from "../assets/img/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo SportSee" />
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  );
}

export default Header;
