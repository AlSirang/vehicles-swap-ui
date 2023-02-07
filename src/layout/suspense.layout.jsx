import Header from "components/header";
import React from "react";
import { Container } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";

export default function SuspenseLayout({ children }) {
  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Container fluid>{children}</Container>
      </React.Suspense>
    </>
  );
}

function Loading() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <ArrowClockwise className="loading-animaiton" size="60" />
      <h4>Loading...</h4>
    </div>
  );
}
