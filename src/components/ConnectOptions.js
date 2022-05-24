import "../css/connectus.css";

export function ConnectOptions() {
  return (
    <section className="connect">
      <ul className="connect_list">
        <li>
          <a
            target="_blank"
            className="connect_list_item"
            href="https://www.spacex.com/"
          >
            SpaceX © 2022
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="connect_list_item"
            href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="connect_list_item"
            href="https://www.youtube.com/c/SpaceX"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="connect_list_item"
            href="https://www.instagram.com/spacex/"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="connect_list_item"
            href="https://www.linkedin.com/company/spacex/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" className="connect_list_item" href="#">
            Privacy Policy
          </a>
        </li>
      </ul>
    </section>
  );
}
