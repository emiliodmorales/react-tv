import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  if (!show) {
    return <p>Select a show to see details</p>;
  }

  const [selectedEpisode, setSelectedEpisode] = useState();
  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      ></EpisodeList>
      <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
    </div>
  );
}
