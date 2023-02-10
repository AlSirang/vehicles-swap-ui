import { ErrorResponse } from "@remix-run/router";
import { useEffect } from "react";
import { WalletUserContext } from "src/context";

export default function AuthLayout(props) {
  const { state } = WalletUserContext();
  const { isWalletStatusSynced, isWalletConnected } = state;

  useEffect(() => {
    isWalletStatusSynced &&
      !isWalletConnected &&
      (() => {
        throw new ErrorResponse(401);
      })();
  }, [isWalletStatusSynced, isWalletConnected]);
  return <div {...props} />;
}
