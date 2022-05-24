import "../App.css";
import "../css/reset.css";
import "../css/navigation.css";
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
import { About } from "./About";
import { NextLaunch } from "./NextLaunch";

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
        <Route path="/nextLaunch">
          <NextLaunch />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <RecentLaunch />
          <UpcomingLaunches />
          <OurMission />
          <ConnectOptions />
        </Route>

        <Route exact path="/home">
          <RecentLaunch />
          <UpcomingLaunches />
          <OurMission />
          <ConnectOptions />
        </Route>
      </Switch>
    </div>
  );
}
