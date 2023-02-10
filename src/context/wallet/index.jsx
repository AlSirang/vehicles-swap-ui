import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  isWalletStatusSynced: false,
  account: null,
  isWalletConnected: false,
  connectedChainId: null,
  isCorrectChain: false,
  web3Modal: null,
  web3PackagesLoaded: false,
  singer: null,
  provider: null,
  ethersProvider: null,
};

const WalletContext = createContext(initialState);

export const WalletContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
};

export const WalletUserContext = () => useContext(WalletContext);
