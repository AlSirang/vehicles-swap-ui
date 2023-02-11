import { Loading } from "components/loading";
import VehicleInfo from "components/vehiclesInfo";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { initialState, loadData } from "./utlis";

export default function Dashboard() {
  const { wallet } = useParams();

  const [{ error, isLoading, vehiclesOf }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );
  useEffect(() => {
    if (wallet) {
      dispatch({ isLoading: true });
      loadData(wallet)
        .then((vehiclesOf) => {
          dispatch({ vehiclesOf });
          dispatch({ error: "No Vehicles Registered" });
        })
        .catch((err) => {
          dispatch({ error: err.message || err });
        })
        .finally(() => {
          dispatch({ isLoading: false });
        });
    }
  }, [wallet]);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Boolean(error) && <h3>{error}</h3>}

      {!isLoading && vehiclesOf.length > 0 && (
        <VehicleInfo vehiclesOf={vehiclesOf} clickable />
      )}
    </>
  );
}
