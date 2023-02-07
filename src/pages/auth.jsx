import { Button } from "react-bootstrap";
import { Wallet } from "react-bootstrap-icons";

export default function SignIn() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="d-flex flex-column justify-content-center">
        <h3 className="d-flex justify-content-center ">Connect your wallet</h3>

        <Button
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
