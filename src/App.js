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
import { useState, useEffect } from "react";
import { API } from "./global";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/launches">
          <div>History</div>
        </Route>
        <Route path="/rockets">
          <div>History</div>
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

function HistoryPage() {
  const [historyDetails, setHistoryDetails] = useState(null);

  function getHistoryDetails() {
    fetch(`${API}/history`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setHistoryDetails(final_data));
  }

  useEffect(() => {
    getHistoryDetails();
  }, []);

  function ShowHistoryItem({ historyitem }) {
    return <div className="history-item-div">Showing Items</div>;
  }
  return (
    <section className="history-section">
      <div className="main-history-div">
        {historyDetails != null
          ? historyDetails.map((historyitem) => (
              <ShowHistoryItem historyitem={historyitem} />
            ))
          : ""}
      </div>
    </section>
  );
}
