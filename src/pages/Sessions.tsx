import { SESSIONS as loadedSessions } from "../dummy-sessions.ts"; // normally, we would probably load that from a server
import SessionsList from "../components/Sessions/SessionList.tsx";

export default function SessionsPage() {
  if (!loadedSessions) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a deep dive into state
          mechanics - we got just the right session for you!
        </p>
      </header>

      <SessionsList sessions={loadedSessions} />
    </main>
  );
}
