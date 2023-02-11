import { ArrowClockwise } from "react-bootstrap-icons";

export function Loading() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <ArrowClockwise className="loading-animaiton" size="60" />
      <h4>Loading...</h4>
    </div>
  );
}
