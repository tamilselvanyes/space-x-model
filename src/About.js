import { useState, useEffect } from "react";
import { API } from "./global";
import { useHistory } from "react-router-dom";
import bg from "./bgimages/spacex-5.webp";

import "./css/about.css";

export function About() {
  const [aboutDetails, setAboutDetails] = useState(null);
  const history = useHistory();

  function getAboutDetails() {
    fetch(`${API}/info`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setAboutDetails(final_data));
  }

  useEffect(() => {
    getAboutDetails();
  }, []);
  return (
    <section className="about-section">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="about-section bg"
      ></div>
      {aboutDetails != null ? (
        <div className="about_content">
          <p className="details">{aboutDetails.summary}</p>
          <p className="employee">Founder and CEO: Elon Musk</p>
          <p className="employee">Number of Employees: 7000</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
