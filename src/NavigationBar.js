import logo from "./bgimages/spacex-logo.png";
import { useHistory } from "react-router-dom";

export function NavigationBar() {
  const history = useHistory();
  return (
    <section>
      <header className="header">
        <div className="header-background"></div>

        <div className="header_logo_nav">
          <div className="header_logo">
            <button onClick={() => history.push("/")}>
              <img src={logo} alt="SpaceX" />
            </button>
          </div>

          <nav className="header_navigation">
            <ul>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => history.push("/history")}
                >
                  History
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => history.push("/launches")}
                >
                  Launches
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => history.push("/rockets")}
                >
                  Rockets
                </button>
              </li>
              <li>
                <button
                  className="nav_link_button"
                  onClick={() => history.push("/about")}
                >
                  About
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
