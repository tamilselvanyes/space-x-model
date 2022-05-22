import "./App.css";
import "./css/reset.css";
import "./css/connectus.css";
import "./css/recent_launch.css";
import "./css/upcoming.css";
import "./css/navigation.css";
import "./css/mission.css";
import "./css/history.css";
import { ConnectOptions } from "./ConnectOptions";
import { RecentLaunch } from "./RecentLaunch";
import { UpcomingLaunches } from "./UpcomingLaunches";
import { NavigationBar } from "./NavigationBar";
import { OurMission } from "./OurMission";
import { Switch, Route, useHistory } from "react-router-dom";
import { HistoryPage } from "./HistoryPage";
import { LaunchesPage } from "./LaunchesPage";
import { LaunchDescription } from "./LaunchDescription";
import { RocketPage } from "./RocketPage";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/launches/:flight_number">
          <LaunchDescription />
        </Route>
        <Route path="/launches">
          <LaunchesPage />
        </Route>
        <Route path="/rockets">
          <RocketPage />
        </Route>
        <Route path="/about">
          <div>History</div>
        </Route>
        <Route exact path="/">
          <RecentLaunch />
          <UpcomingLaunches />
          <OurMission />
          <ConnectOptions />
        </Route>
      </Switch>
    </div>
  );
}
