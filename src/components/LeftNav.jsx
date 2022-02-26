import yogaIcon from "../assets/img/yoga-icon.svg";
import swimmingIcon from "../assets/img/swimming-icon.svg";
import cyclingIcon from "../assets/img/cycling-icon.svg";
import dumbbellIcon from "../assets/img/dumbbell-icon.svg";

/**
 * Renders Left Navigation view
 * @Component
 */
function LeftNav() {
  return (
    <nav className="leftnav">
      <ul>
        <li><img src={yogaIcon} alt="Yoga"/></li>
        <li><img src={swimmingIcon} alt="Swimming"/></li>
        <li><img src={cyclingIcon} alt="Cycling"/></li>
        <li><img src={dumbbellIcon} alt="Dumbbell"/></li>
      </ul>

      <span>Copiryght, SportSee 2020</span>
    </nav>
  );
}

export default LeftNav;