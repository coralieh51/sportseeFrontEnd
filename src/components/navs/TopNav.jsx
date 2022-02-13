import logo from "../../assets/img/logo.svg";

function TopNav() {
  return (
    <nav>
      <img src={logo} alt="logo SportSee" />
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}

export default TopNav;
