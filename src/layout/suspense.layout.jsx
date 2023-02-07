import Header from "components/header";
import React from "react";
import { Container } from "react-bootstrap";

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
  return <h2>🌀 Loading...</h2>;
}
