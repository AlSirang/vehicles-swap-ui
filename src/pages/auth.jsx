import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Wallet } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { WalletUserContext } from "src/context";
import { useWalletContext } from "src/hooks";

export default function SignIn() {
  const navigation = useNavigate();
  const { walletConnect } = useWalletContext();
  const { state } = WalletUserContext();

  const onWalletConnect = async () => {
    try {
      await walletConnect();
    } catch (err) {}
  };

  const { isWalletConnected } = state;
  useEffect(() => {
    isWalletConnected && navigation("/");
  }, [isWalletConnected, navigation]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="d-flex flex-column justify-content-center">
        <h3 className="d-flex justify-content-center ">Connect your wallet</h3>

        <Button
          onClick={onWalletConnect}
          variant="outline-dark"
          className="d-flex align-items-center justify-content-center gap-3 btn-lg my-3"
        >
          Connect Wallet <Wallet />
        </Button>

        <p>
          Do have a wallet?&nbsp;
          <a
            className="anchor"
            href="https://metamask.io/download"
            target="_blank"
            rel="noreferrer"
          >
            Click here
          </a>
          &nbsp;to learn more.
        </p>
      </div>
    </div>
  );
}
