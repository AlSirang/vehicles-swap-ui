import { useLayoutEffect, useRef } from "react";
import { loadWeb3Packages, WalletUserContext } from "src/context";
import { useWalletContext } from "./useWalletContext";

// checks the wallet connection status and update state if wallet is connected on page refresh
export const useCheckWalletConnection = () => {
  const hasBeenChecked = useRef(false);

  const { walletConnect } = useWalletContext();

  const { dispatch, state } = WalletUserContext();

  const { web3PackagesLoaded } = state;

  useLayoutEffect(() => {
    (() => {
      const isConnected = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");

      if (!isConnected) return dispatch({ isWalletStatusSynced: true });
      if (web3PackagesLoaded && !hasBeenChecked.current) {
        walletConnect();
        hasBeenChecked.current = true;
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3PackagesLoaded]);
};

// loads web packages
export const useInitializePackages = () => {
  const { dispatch } = WalletUserContext();

  useLayoutEffect(() => {
    loadWeb3Packages().then((web3Modal) => {
      dispatch({
        web3Modal,
        web3PackagesLoaded: true,
      });
    });
  }, [dispatch]);
};
