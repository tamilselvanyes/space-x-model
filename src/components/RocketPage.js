import { useState, useEffect } from "react";
import bg2 from "../bgimages/spacex-3.webp";
import { API } from "../global";
import "../css/rocket.css";

export function RocketPage() {
  const [rocketDetails, setrocketDetails] = useState(null);

  function getrocketDetails() {
    fetch(`${API}/rockets`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setrocketDetails(final_data));
  }

  useEffect(() => {
    getrocketDetails();
  }, []);

  function ShowRocketItem({ rocketitem }) {
    let rocket_date = new Date(rocketitem.first_flight).toString();
    return (
      <section className="rocket-section">
        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className="recent_launch bg"
        ></div>
        <div className="main-rocket-div">
          <div className="rocket-item-div">
            <div className="rocket-info">
              <h2 className="rocket-title">
                Rocket Name: {rocketitem.rocket_name}
              </h2>
              <p className="details" style={{ width: "300px" }}>
                First Flight: {rocket_date}
              </p>
              <p className="details">
                Height: {rocketitem.height.meters}m, Diameter:{" "}
                {rocketitem.diameter.meters}m
              </p>
              <p className="details">Company: {rocketitem.company}</p>
              <p className="details">Country: {rocketitem.country}</p>
              <p className="details">
                Cost per Launch: ${rocketitem.success_rate_pct}
              </p>
              <p className="details">
                Success Percentage: ${rocketitem.cost_per_launch}
              </p>
            </div>
            <div className="engine-info">
              <h2 className="engine-title">Engine</h2>
              <p className="details">
                Number of Engine: {rocketitem.engines.number}
              </p>
              <p className="details">Engine Type: {rocketitem.engines.type}</p>
              <p className="details">
                Engine Version: {rocketitem.engines.version}
              </p>

              <p className="details">
                Fuel Capacity: {rocketitem.engines.fuel_amount_tons} Tonnes
              </p>
              <p className="details">
                Propellant: {rocketitem.engines.propellant_1}
              </p>
              <p className="details">
                Thrust Sea Level: {rocketitem.engines.thrust_sea_level.kN}kN
              </p>
              <p className="details">
                Thrust Vaccum: {rocketitem.engines.thrust_vacuum.kN}kN
              </p>
              <div className="links-div">
                <a
                  className="links"
                  rel="noreferrer"
                  target="_blank"
                  href={rocketitem.wikipedia}
                >
                  Wikipedia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="main-rocket-section">
      {rocketDetails != null
        ? rocketDetails.map((rocketitem, index) => (
            <ShowRocketItem key={index} rocketitem={rocketitem} />
          ))
        : ""}
    </section>
  );
}
