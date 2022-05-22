import { useState, useEffect } from "react";
import { API } from "./global";
import "./css/launch.css";

export function LaunchesPage() {
  const [launchDetails, setLaunchDetails] = useState(null);

  function getLaunchDetails() {
    fetch(`${API}/launches`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setLaunchDetails(final_data));
  }

  useEffect(() => {
    getLaunchDetails();
  }, []);

  function ShowHistoryItem({ launchitem }) {
    let launch_date = new Date(launchitem.launch_date_unix * 1000).toString();
    return (
      <div className="launch-item-div">
        <div className="launch-info">
          <h1>{launchitem.mission_name}</h1>
          <h4 className="event">Launch Date: {launch_date} </h4>
          <h3 className="details">
            Rocket Name: {launchitem.rocket.rocket_name}
          </h3>
          <span>Rocket Type: {launchitem.rocket.rocket_type}</span>
        </div>

        <div
          className="launch-background-div"
          style={{
            backgroundImage: `url(${launchitem.links.mission_patch_small})`,
          }}
        ></div>
      </div>
    );
  }

  return (
    <section className="launch-section">
      <div className="main-launch-div">
        {launchDetails != null
          ? launchDetails.map((launchitem, index) => (
              <ShowHistoryItem key={index} launchitem={launchitem} />
            ))
          : ""}
      </div>
    </section>
  );
}
