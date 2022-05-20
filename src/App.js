import "./App.css";
import "./css/reset.css";
import "./css/connectus.css";
import "./css/recent_launch.css";
import "./css/upcoming.css";
import "./css/navigation.css";
import { ConnectOptions } from "./ConnectOptions";
import { RecentLaunch } from "./RecentLaunch";
import { UpcomingLaunches } from "./UpcomingLaunches";
import { NavigationBar } from "./NavigationBar";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RecentLaunch />
      <UpcomingLaunches />
      <ConnectOptions />
    </div>
  );
}
