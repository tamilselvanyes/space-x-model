import { stack as Menu } from "react-burger-menu";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";

export function HamburgerMenu({ open, setOpen }) {
  const history = useHistory();

  return (
    <Menu right isOpen={open} onStateChange={(state) => setOpen(state.isOpen)}>
      <button
        className="menu-item"
        onClick={() => {
          history.push("/home");
          setOpen(false);
        }}
      >
        Home
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />
      <button
        className="menu-item"
        onClick={() => {
          history.push("/history");
          setOpen(false);
        }}
      >
        History
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button
        className="menu-item"
        onClick={() => {
          history.push("/launches");
          setOpen(false);
        }}
      >
        Launches
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button
        className="menu-item"
        onClick={() => {
          history.push("/rockets");
          setOpen(false);
        }}
      >
        Rockets
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />

      <button
        className="menu-item"
        onClick={() => {
          history.push("/about");
          setOpen(false);
        }}
      >
        About
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />
    </Menu>
  );
}
