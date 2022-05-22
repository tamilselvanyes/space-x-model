import { useState, useEffect } from "react";
import { API } from "./global";

export function HistoryPage() {
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
    let event_date = new Date(historyitem.event_date_unix * 1000).toString();
    return (
      <div className="history-item-div">
        <h1>{historyitem.title}</h1>
        <h4 className="event">Event Date: {event_date} </h4>
        <h3 className="details">Details:</h3>
        <p>{historyitem.details}</p>
        <div className="history-links">
          <a className="links" target="_blank" href={historyitem.links.article}>
            Article
          </a>
          <a className="links" target="_blank" href={historyitem.links.article}>
            Wikipedia
          </a>
        </div>
      </div>
    );
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
