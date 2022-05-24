import logo from "../bgimages/spacex-logo.png";
import { useHistory } from "react-router-dom";
import { HamburgerMenu } from "./Hamburger_Slider";
import { TouchDetector } from "./TouchDetector";
import "../css/hamburger.css";
import { useContext } from "react";
import { context } from "./App";
import { useState } from "react";

export function NavigationBar() {
  const history = useHistory();
  const [currentTab, setCurrentTab] = [
    useContext(context)[0],
    useContext(context)[1],
  ];

  const [open, setOpen] = useState(false);
  return (
    <section>
      <header className="header">
        <div className="header-background"></div>

        <div className="header_logo_nav">
          <div className="header_logo">
            <button
              onClick={() => {
                history.push("/");
                setCurrentTab("home");
              }}
            >
              <img src={logo} alt="SpaceX" />
            </button>
          </div>

          <nav className="header_navigation">
            <ul>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => {
                    history.push("/history");
                    setCurrentTab("history");
                  }}
                  style={{
                    color: currentTab === "history" ? "aqua" : "white",
                  }}
                >
                  History
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => {
                    history.push("/launches");
                    setCurrentTab("launches");
                  }}
                  style={{
                    color: currentTab === "launches" ? "aqua" : "white",
                  }}
                >
                  Launches
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => {
                    history.push("/rockets");
                    setCurrentTab("rockets");
                  }}
                  style={{
                    color: currentTab === "rockets" ? "aqua" : "white",
                  }}
                >
                  Rockets
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => {
                    history.push("/about");
                    setCurrentTab("about");
                  }}
                  style={{
                    color: currentTab === "about" ? "aqua" : "white",
                  }}
                >
                  About
                </button>
              </li>
            </ul>
          </nav>
          <TouchDetector open={open} setOpen={setOpen}>
            <HamburgerMenu open={open} setOpen={setOpen} />
          </TouchDetector>
        </div>
      </header>
    </section>
  );
}
