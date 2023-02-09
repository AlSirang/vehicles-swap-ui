export const ACCEPTED_CHAIN_ID = "0x5"; // for testnet

export const TX_STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

export const shortenAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(-5)}`;
