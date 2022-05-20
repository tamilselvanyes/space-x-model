import bg0 from "./bgimages/spacex-1.webp";
import bg1 from "./bgimages/spacex-2.webp";
import bg2 from "./bgimages/spacex-3.webp";
import bg3 from "./bgimages/spacex-4.webp";
import bg4 from "./bgimages/spacex-5.webp";
import { useEffect, useState } from "react";
import { API } from "./global";

export function RecentLaunch() {
  const [latestLaunch, setLatestLaunch] = useState(null);
  const [bgimage, setBgimage] = useState(bg2);
  function changeBackground() {
    const bgimages = [bg0, bg1, bg2, bg3, bg4];
    let bgnumber = Math.floor(Math.random() * 10);
    if (bgnumber > 4) {
      bgnumber = bgnumber - 5;
    }
    setBgimage(bgimages[bgnumber]);
  }

  useEffect(() => {
    setInterval(() => changeBackground(), 10000);
  }, []);

  useEffect(() => {
    getLatestLaunch();
  }, []);

  function getLatestLaunch() {
    console.log("Inside get");
    fetch(`${API}/launches/next`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setLatestLaunch(final_data));
  }

  return (
    <section class="recent_launch">
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        class="recent_launch bg"
      ></div>
      {latestLaunch != null ? (
        <div class="launch_content">
          <h1 class="launch_content_subheader">NEXT LAUNCH</h1>

          <h1 class="launch_content_header">{latestLaunch.mission_name}</h1>
          <p>Launch Date: {Date(latestLaunch.launch_date_unix)}</p>

          <button class="content_button">
            <span class="text">READ MORE</span>
            <div class="hover"></div>
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
