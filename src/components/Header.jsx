import {getUserInfos, getActivity} from "../services/getData";
import { useState, useEffect } from "react";

function Header() {
  const [userData, setUserInfos] = useState(null);
  useEffect(async () => {
    const Data = await getUserInfos();
    setUserInfos(Data);
  }, []);
  console.log(userData);

  if (userData === null) { return <div>Loading</div> }
  return (
    <header>
      <h1>
        Bonjour <span>{userData.userInfos.firstName}</span>
      </h1>
      <aside>Félicitations ! Vous avez explosé vos obectifs hier !</aside>
    </header>
  );
}

export default Header;
