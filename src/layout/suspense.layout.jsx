import React from "react";
import { Container } from "react-bootstrap";
import Header from "components/header";
import { Loading } from "components/loading";
import { useCheckWalletConnection, useInitializePackages } from "src/hooks";

export default function SuspenseLayout({ children }) {
  useInitializePackages();
  useCheckWalletConnection();
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
