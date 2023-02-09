import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "components/errorBundary";
import SuspenseLayout from "./layout/suspense.layout";
import { WalletContextProvider } from "./context/wallet";
const Auth = React.lazy(() => import("pages/auth"));
const Home = React.lazy(() => import("pages/home"));
const RegisterVehicle = React.lazy(() => import("pages/registerVehicle"));

export default function App() {
  return (
    <WalletContextProvider>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route
              errorElement={<ErrorBoundary />}
              element={
                <SuspenseLayout>
                  <Outlet />
                </SuspenseLayout>
              }
            >
              <Route element={<Home />} path="/" />
              <Route element={<Auth />} path="/auth" />
              <Route element={<RegisterVehicle />} path="/register-vehicle" />
            </Route>
          )
        )}
      />
    </WalletContextProvider>
  );
}
