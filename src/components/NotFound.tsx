import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Pokemon Not Found</h2>
      <p>
        Go back to
        <b>
          <Link to="/"> Home</Link>
        </b>
      </p>
    </>
  );
}
