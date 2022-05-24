import { useState, useEffect } from "react";
import { API } from "../global";
import "../css/launch.css";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function LaunchesPage() {
  const [launchDetails, setLaunchDetails] = useState(null);
  const history = useHistory();

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
      <div
        className="launch-item-div"
        onClick={() => history.push(`launches/${launchitem.flight_number}`)}
      >
        <div className="launch-info">
          <h1>{launchitem.mission_name}</h1>
          <h4 className="event">Launch Date: {launch_date} </h4>
          <h3 className="details">
            Rocket Name: {launchitem.rocket.rocket_name}
          </h3>
          <span className="type">
            Rocket Type: {launchitem.rocket.rocket_type}
          </span>
          <br></br>
          <button
            className="content_button"
            onClick={() => history.push(`launches/${launchitem.flight_number}`)}
          >
            <span className="text">READ MORE</span>
            <div className="hover"></div>
          </button>
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
      {launchDetails != null ? (
        <div className="main-launch-div">
          {launchDetails.map((launchitem, index) => (
            <ShowHistoryItem key={index} launchitem={launchitem} />
          ))}
        </div>
      ) : (
        <div className="loading">
          <Box>
            <CircularProgress size={60} color={"secondary"} />
          </Box>
        </div>
      )}
    </section>
  );
}
