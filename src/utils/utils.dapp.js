import { ethers } from "ethers";
import { contractConfigs } from "./contract.configs";

export const getRpcProvider = () => {
  const RPC_URL =
    "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
  return new ethers.providers.JsonRpcProvider(RPC_URL);
};

export const getContractInstance = (provider) => {
  return new ethers.Contract(
    contractConfigs.address,
    contractConfigs.abi,
    provider
  );
};
