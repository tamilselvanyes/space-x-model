import "./App.css";
import "./css/reset.css";
import "./css/connectus.css";
import "./css/recent_launch.css";
import "./css/upcoming.css";
import "./css/navigation.css";
import "./css/mission.css";
import { ConnectOptions } from "./ConnectOptions";
import { RecentLaunch } from "./RecentLaunch";
import { UpcomingLaunches } from "./UpcomingLaunches";
import { NavigationBar } from "./NavigationBar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API } from "./global";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RecentLaunch />
      <UpcomingLaunches />
      <OurMission />
      <ConnectOptions />
    </div>
  );
}

function OurMission() {
  const [mission, setMission] = useState(null);
  function getMission() {
    fetch(`${API}/missions`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setMission(final_data);
      });
  }

  useEffect(() => {
    getMission();
  }, []);

  return (
    <section className="mission-section">
      <h2 className="mission-title">OUR MISSION</h2>
      <div className="mission-main-div">
        {mission !== null ? (
          mission.map((item, index) => (
            <ShowMission key={item.mission_id} mission={item} />
          ))
        ) : (
          <div>Currently all missions are completed</div>
        )}
      </div>
    </section>
  );
}

function ShowMission({ mission }) {
  return (
    <div>
      {mission !== null ? (
        <div className="mission-div">
          <h2>{mission.mission_name}</h2>
          <p>Manufacturer: {mission.manufacturers[0]}</p>
          <p>Follow our Mission</p>
          <div className="links-div">
            <a href={mission.twitter}>
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
            <div>
              <FontAwesomeIcon icon="check-square" />
              Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
