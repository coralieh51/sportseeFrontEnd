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
