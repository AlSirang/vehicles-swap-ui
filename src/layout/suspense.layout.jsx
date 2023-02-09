import Header from "components/header";
import React from "react";
import { Container } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";
import { useInitializePackages } from "src/hooks/useWalletContext";

export default function SuspenseLayout({ children }) {
  useInitializePackages();
  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Container fluid className="layout-container">
          {children}
        </Container>
      </React.Suspense>
    </>
  );
}

function Loading() {
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
