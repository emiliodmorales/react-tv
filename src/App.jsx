import { tvShows } from "./shows/data";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main></main>
    </>
  );
}
