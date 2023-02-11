import React from "react";
import { Container } from "react-bootstrap";
import Header from "components/header";
import { Loading } from "components/loading";
import {
  useCheckWalletConnection,
  useInitializePackages,
  useOnProviderChange,
} from "src/hooks";

export default function SuspenseLayout({ children }) {
  useInitializePackages();
  useCheckWalletConnection();
  useOnProviderChange();
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
