import bg0 from "./bgimages/spacex-1.webp";
import bg1 from "./bgimages/spacex-2.webp";
import bg2 from "./bgimages/spacex-3.webp";
import bg3 from "./bgimages/spacex-4.webp";
import bg4 from "./bgimages/spacex-5.webp";
import { useEffect, useState } from "react";

export function RecentLaunch() {
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

  return (
    <section class="recent_launch">
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        class="recent_launch bg"
      ></div>
      <div class="launch_content">
        <h4 class="launch_content_subheader">LATEST LAUNCH</h4>

        <h1 class="launch_content_header">
          Double Asteroid Redirection Test (DART) Mission
        </h1>

        <button class="content_button">
          <span class="text">READ MORE</span>
          <div class="hover"></div>
        </button>
      </div>
    </section>
  );
}
