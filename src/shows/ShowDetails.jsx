import { useState } from "react";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails(show) {
  if (!show) {
    return <p>Select a show to see details</p>;
  }
  const [selectedEpisode] = useState();
  return <div className="show-details"></div>;
}
