import { stack as Menu } from "react-burger-menu";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { context } from "./App";

export function HamburgerMenu({ open, setOpen }) {
  const history = useHistory();
  const [currentTab, setCurrentTab] = [
    useContext(context)[0],
    useContext(context)[1],
  ];

  return (
    <Menu right isOpen={open} onStateChange={(state) => setOpen(state.isOpen)}>
      <button
        className="menu-item"
        onClick={() => {
          history.push("/home");
          setOpen(false);
          setCurrentTab("home");
        }}
        style={{
          color: currentTab === "home" ? "aqua" : "white",
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
          setCurrentTab("history");
        }}
        style={{
          color: currentTab === "history" ? "aqua" : "white",
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
          setCurrentTab("launches");
        }}
        style={{
          color: currentTab === "launches" ? "aqua" : "white",
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
          setCurrentTab("rockets");
        }}
        style={{
          color: currentTab === "rockets" ? "aqua" : "white",
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
          setCurrentTab("about");
        }}
        style={{
          color: currentTab === "about" ? "aqua" : "white",
        }}
      >
        About
      </button>
      <Divider sx={{ backgroundColor: "HoneyDew" }} />
    </Menu>
  );
}
