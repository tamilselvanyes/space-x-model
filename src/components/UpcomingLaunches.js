import { API } from "../global";
import "../css/upcoming.css";
import { useEffect, useState } from "react";

export function UpcomingLaunches() {
  const [event, setEvent] = useState(null);

  function getUpcomingLaunches() {
    fetch(`${API}/launches/upcoming`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setEvent(final_data);
      });
  }

  useEffect(() => {
    getUpcomingLaunches();
  }, []);

  return (
    <section className="upcoming-section">
      <h2 className="upcoming-title">Upcoming Launches</h2>
      <div className="upcoming-main-div">
        {event !== null ? (
          event.map((item, index) => (
            <ShowUpcomingLaunches key={item.mission_name} item={item} />
          ))
        ) : (
          <div>No upcoming Launches</div>
        )}
      </div>
    </section>
  );

  function ShowUpcomingLaunches({ item }) {
    const [rocketDetails, setRocketDetails] = useState(null);

    function getRocketDetails() {
      fetch(`${API}/rockets/${item.rocket.rocket_id}`, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((final_data) => {
          setRocketDetails(final_data);
        });
    }

    useEffect(() => {
      getRocketDetails();
    }, [item]);

    return (
      <div>
        {rocketDetails !== null ? (
          <div className="upcoming-div">
            <div className="upcoming-rocket-images">
              <h2>{item.mission_name}</h2>
              <p>Launch Data: {Date(item.launch_date_unix)}</p>
              <div className="rocketimg_div">
                <img
                  className="rocketimg"
                  alt="rocketimage"
                  src={rocketDetails.flickr_images[0]}
                />
                <div>
                  <span className="launch-site">
                    Launch Site: {item.launch_site.site_name_long}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
