import { useState, useEffect } from "react";
import { API } from "../global";
import "../css/launchdescription.css";
import { useParams } from "react-router-dom";

export function LaunchDescription() {
  const [rocketDetails, setRocketDetails] = useState(null);
  const { flight_number } = useParams();

  function getRocketDetails() {
    fetch(`${API}/launches/${flight_number}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setRocketDetails(final_data);
      });
  }

  useEffect(() => {
    getRocketDetails();
  }, []);

  let event_date = "";
  if (rocketDetails !== null) {
    event_date = new Date(rocketDetails.launch_date_unix * 1000).toString();
  }

  return (
    <section className="launch-description-section">
      {rocketDetails !== null ? (
        <div className="launch-description-main-div">
          <h1 className="main-title">{rocketDetails.mission_name}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${rocketDetails.links.youtube_id}`}
            width="100%"
            height="400"
            className="movie-video"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />{" "}
          <div className="rocket-details-main-div">
            <h3>Details:</h3>
            <p>{rocketDetails.details}</p>
            <p>
              <b>Launch Site: </b>
              {rocketDetails.launch_site.site_name_long}
            </p>

            <p>
              <b>Launch Date: </b>
              {event_date}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
