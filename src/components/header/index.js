import AuthHeader from "./auth.header";
import UserHeader from "./user.header";

export default function Header() {
  // if wallet is connected
  if (false) return <UserHeader />;
  return <AuthHeader />;
}
