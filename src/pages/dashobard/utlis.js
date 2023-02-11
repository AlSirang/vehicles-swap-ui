import { ethers } from "ethers";
import { getContractInstance, getRpcProvider } from "src/utils/utils.dapp";

export const initialState = {
  vehiclesOf: [],
  isLoading: false,
  error: null,
};

export const loadData = async (owner) => {
  try {
    const contractInstace = getContractInstance(getRpcProvider());
    const response = await contractInstace.vehiclesOf(owner);
    return response.filter(
      ({ ownerOf }) => ownerOf !== ethers.constants.AddressZero
    );
  } catch (err) {
    console.log(err);
  }
};
