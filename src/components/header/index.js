import { WalletUserContext } from "src/context";
import AuthHeader from "./auth.header";
import UserHeader from "./user.header";

export default function Header() {
  const { state } = WalletUserContext();
  const { isWalletConnected } = state;

  if (isWalletConnected) return <UserHeader />;
  return <AuthHeader />;
}
