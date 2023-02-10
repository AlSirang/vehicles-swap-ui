import { Link, useNavigate } from "react-router-dom";
import { Button, Nav, NavDropdown } from "react-bootstrap";
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
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/register-vehicle">Add Vehicle</Link>
        </Nav>

        <NavDropdown
          title={
            <>
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center justify-content-center gap-2"
              >
                {shortenAddress("0x008eBFc38A0260187057bA5Bc26D37dc797e791f")}
                <Wallet />
              </Button>
            </>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            <Link to="/dashboard" className="a-no-style">
              Dashboard
            </Link>
          </NavDropdown.Item>
          <hr className="my-1" />
          <NavDropdown.Item onClick={onDisconnect}>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </NavbarMain>
    </>
  );
}
