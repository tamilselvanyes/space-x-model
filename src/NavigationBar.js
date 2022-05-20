import logo from "./bgimages/spacex-logo.png";

export function NavigationBar() {
  return (
    <section>
      <header className="header">
        <div className="header-background"></div>

        <div className="header_logo_nav">
          <div className="header_logo">
            <button>
              <img src={logo} alt="SpaceX" />
            </button>
          </div>

          <nav className="header_navigation">
            <ul>
              <li>
                <button className="nav_link_button">History</button>
              </li>
              <li>
                <button className="nav_link_button">Launches</button>
              </li>
              <li>
                <button className="nav_link_button">Rockets</button>
              </li>
              <li>
                <button className="nav_link_button">About</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
