import { Link, useNavigate } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { Wallet } from "react-bootstrap-icons";
import { shortenAddress } from "src/utils/constants";
import { useWalletContext } from "src/hooks";
import NavbarMain from "./main";

export default function AuthHeader() {
  const navigation = useNavigate();

  const { disconnectWallet } = useWalletContext();

  const onDisconnect = () => {
    try {
      navigation("/");
      disconnectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <NavbarMain>
        <Nav
          className="me-auto my-2 my-lg-0 gap-4"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/register-vehicle">Add Vehicle</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Nav>

        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <span>
            {shortenAddress("0x008eBFc38A0260187057bA5Bc26D37dc797e791f")}
          </span>
          <Button
            onClick={onDisconnect}
            className="d-flex align-items-center justify-content-center gap-2"
            variant="outline-secondary"
          >
            Sign Out&nbsp;
            <Wallet />
          </Button>
        </div>
      </NavbarMain>
    </>
  );
}
