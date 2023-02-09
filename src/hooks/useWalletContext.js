import { useLayoutEffect } from "react";
import { ethers } from "ethers";
import { loadWeb3Packages, WalletUserContext } from "src/context";
import { ACCEPTED_CHAIN_ID } from "src/utils/constants";

export const useWalletContext = () => {
  const { dispatch, state } = WalletUserContext();

  const { isWalletConnected, web3Modal } = state;

  const getNetworkInfo = async (provider) => {
    if (!provider) return;

    const chainId = await provider.request({ method: "eth_chainId" });

    let isCorrectNetworkInfo = false;

    if (parseInt(chainId) === parseInt(ACCEPTED_CHAIN_ID))
      isCorrectNetworkInfo = true;

    dispatch({
      connectedChainId: chainId,
      isCorrectChain: isCorrectNetworkInfo,
    });

    // if (!isCorrectNetworkInfo) return await switchNetwork(provider);
  };

  /**
   * @dev it will popup web3 modal and gets user wallet address once they select provider.
   * @returns void
   */
  const walletConnect = async () => {
    if (!web3Modal || isWalletConnected) return;
    const provider = await web3Modal.connect();

    const ethersProvider = new ethers.providers.Web3Provider(provider, "any");

    const signer = ethersProvider.getSigner();
    const account = await signer.getAddress();

    dispatch({
      isWalletConnected: true,
      account,
      signer,
      provider,
      ethersProvider,
    });

    // on wallet connect success get network info
    getNetworkInfo(provider);
  };
  return { getNetworkInfo, walletConnect };
};

// loads web packages
export const useInitializePackages = () => {
  const { dispatch } = WalletUserContext();

  useLayoutEffect(() => {
    console.log("heheh");

    loadWeb3Packages().then((web3Modal) => {
      dispatch({
        web3Modal,
        web3PackagesLoaded: true,
      });
    });
  }, [dispatch]);
};
