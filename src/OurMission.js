import { useState, useEffect } from "react";
import { API } from "./global";
import "./css/mission.css";

export function OurMission() {
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
      <h2 className="mission-title">OUR MISSIONS</h2>
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
          <ul className="links-div">
            <li className="anchor-links">
              <a target="_blank" className="anchor-text" href={mission.twitter}>
                Twitter
              </a>{" "}
            </li>
            <li className="anchor-links">
              <a target="_blank" className="anchor-text" href={mission.website}>
                Website
              </a>
            </li>
            <li className="anchor-links">
              <a
                target="_blank"
                className="anchor-text"
                href={mission.wikipedia}
              >
                Wikipedia
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
