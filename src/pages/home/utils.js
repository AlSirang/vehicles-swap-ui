import { getContractInstance, getRpcProvider } from "src/utils/utils.dapp";

export const loadData = async () => {
  try {
    const contractInstace = getContractInstance(getRpcProvider());
    const owners = await contractInstace.owners();

    const response = await Promise.all(
      owners.map((owner) => contractInstace.vehiclesOf(owner))
    );

    const vechiclesInfo = {};
    response.forEach((rawInfo, i) => {
      vechiclesInfo[[owners[i]]] = rawInfo;
    });
    return vechiclesInfo;
  } catch (err) {
    console.log(err);
  }
};
