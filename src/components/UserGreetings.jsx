import propTypes from "prop-types";

/**
 * Renders user's greetings
 * @Component
 * @param {String} name user's firstname
 */
function UserGreetings({name}) {

  return (
    <div className="user-greetings">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <aside>Félicitations ! Vous avez explosé vos obectifs hier !</aside>
    </div>
  );
}

export default UserGreetings;

UserGreetings.propTypes = {
  name : propTypes.string
} 