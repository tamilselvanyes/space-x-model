import "./App.css";
import "./css/reset.css";
import "./css/footer.css";

export default function App() {
  return (
    <div className="App">
      <p>SpaceX</p>
      <FooterOptions />
    </div>
  );
}

function FooterOptions() {
  return (
    <footer className="footer">
      <ul className="footer_list">
        <li>
          <a class="footer_list_item" href="#">
            SpaceX © 2022
          </a>
        </li>
        <li>
          <a class="footer_list_item" href="#">
            Twitter
          </a>
        </li>
        <li>
          <a class="footer_list_item" href="#">
            Youtube
          </a>
        </li>
        <li>
          <a class="footer_list_item" href="#">
            Instagram
          </a>
        </li>
        <li>
          <a class="footer_list_item" href="#">
            Linkedin
          </a>
        </li>
        <li>
          <a class="footer_list_item" href="#">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
}
