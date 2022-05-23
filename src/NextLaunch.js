import { useState, useEffect } from "react";
import { API } from "./global";
import "./css/nextLaunch.css";
import { useHistory } from "react-router-dom";

export function NextLaunch() {
  const [latestLaunch, setLatestLaunch] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getLatestLaunch();
  }, []);

  function getLatestLaunch() {
    console.log("Inside get");
    fetch(`${API}/launches/next`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setLatestLaunch(final_data);
        console.log(final_data);
      });
  }
  if (latestLaunch !== null && latestLaunch !== undefined) {
    var date = new Date(latestLaunch.launch_date_unix * 1000).toString();
  }

  return (
    <section className="nextlaunch-section">
      {latestLaunch !== null ? (
        <div className="nextlaunch-main-div">
          <h1 className="main-title">{latestLaunch.mission_name}</h1>

          <div className="rocket-details-main-div">
            <h3>Details:</h3>
            <p>{latestLaunch.details}</p>
            <p>
              <b>Launch Site: </b>
              {latestLaunch.launch_site.site_name_long}
            </p>

            <p>
              <b>Launch Date: </b>
              {date}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
