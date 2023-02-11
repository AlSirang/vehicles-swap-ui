import VehicleInfo from "components/vehiclesInfo";
import { useEffect, useReducer } from "react";
import { initialState, loadData } from "./utils";
import "src/styles/home.css";
import { Loading } from "components/loading";

export default function Home() {
  const [{ error, isLoading, vehiclesOf }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );
  useEffect(() => {
    dispatch({ isLoading: true });

    loadData()
      .then((vehiclesOf) => {
        dispatch({ vehiclesOf });
      })
      .catch((err) => {
        dispatch({ error: err.message || err });
      })
      .finally(() => {
        dispatch({ isLoading: false });
      });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && Boolean(error) && <h3>{error}</h3>}

      {Object.keys(vehiclesOf).map((key) => {
        if (!isLoading && vehiclesOf[key].length > 0)
          return (
            <VehicleInfo key={key} wallet={key} vehiclesOf={vehiclesOf[key]} />
          );

        return null;
      })}
    </>
  );
}
