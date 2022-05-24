import { stack as Menu } from "react-burger-menu";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";

export function HamburgerMenu() {
  const history = useHistory();
  return (
    <Menu right>
      <button className="menu-item" onClick={() => history.push("/home")}>
        Home
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />
      <button className="menu-item" onClick={() => history.push("/history")}>
        History
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button className="menu-item" onClick={() => history.push("/launches")}>
        Launches
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button className="menu-item" onClick={() => history.push("/rockets")}>
        Rockets
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button className="menu-item" onClick={() => history.push("/about")}>
        About
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />
    </Menu>
  );
}
