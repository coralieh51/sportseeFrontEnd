import { useState, useEffect } from "react";
import { getUserInfos, getActivity, getAverageSessions, getPerformance } from "./services/getData";
import UserGreetings from "./components/UserGreetings";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import Nutrient from "./components/userData/Nutrient";
import calorieIcon from "./assets/img/calorieCount.svg";
import carbohydrateIcon from "./assets/img/carbohydrateCount.svg";
import lipidIcon from "./assets/img/lipidCount.svg";
import proteinIcon from "./assets/img/proteinCount.svg";
import BarGraphic from "./components/graphics/BarGraphic";
import LineGraphic from "./components/graphics/LineGraphic";
import RadarGraphic from "./components/graphics/RadarGraphic";
import RadialGraphic from "./components/graphics/RadialGraphic";

/**
 * Fetch all data user infos from getData.js file. If at least one of data 
 * @returns {Object} : HomePage with all user infos in graphics
 */

function App() {

  const [userData, setUserInfos] = useState(null);
  const [userActivity, setActivity] = useState(null);
  const [userAverageSession, setAverageSession] = useState(null);
  const [userPerformance, setPerformance] = useState(null);
  
  useEffect( () => {
    const getData = async () => {
      const Data = await getUserInfos();
      const AverageSession = await getAverageSessions();
      const Activity = await getActivity();
      const Performance = await getPerformance();
      setUserInfos(Data);
      setActivity(Activity);
      setAverageSession(AverageSession);
      setPerformance(Performance);
    } 
    getData()
  }, []);
  
  if (userData === null || userActivity === null || userAverageSession === null || userPerformance === null) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Header />
        <main>
          <UserGreetings name={userData.userInfos.firstName} />
          <section id="flex-wrapper">
            <LeftNav />
            <section id="graphics">
              <BarGraphic session={userActivity.sessions}/>
              <div id="bottomgraphicscontainer">
                <LineGraphic session={userAverageSession.sessions}/>
                <RadarGraphic performanceType={userPerformance.kind} performanceValues={userPerformance.data} />
                <RadialGraphic score={userData.score}/>
                </div>
            </section>
            <section id="nutrients">
              <Nutrient name="Calories" value={userData.keyData.calorieCount.toString()} icon={calorieIcon} unit="kCal"/>
              <Nutrient name="Protéines" value={userData.keyData.proteinCount.toString()} icon={proteinIcon} unit="g"/>
              <Nutrient name="Glucides" value={userData.keyData.carbohydrateCount.toString()} icon={carbohydrateIcon} unit="g"/>
              <Nutrient name="Lipides" value={userData.keyData.lipidCount.toString()} icon={lipidIcon} unit="g"/>
            </section>
          </section>
        </main>
    </>
  );
}

export default App;