import NavbarMain from "./main";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { Wallet } from "react-bootstrap-icons";
import { shortenAddress } from "src/utils/constants";
import { useWalletContext } from "src/hooks";

export default function AuthHeader() {
  const { disconnectWallet } = useWalletContext();
  const onDisconnect = () => {
    try {
      disconnectWallet();
    } catch (err) {}
  };
  return (
    <>
      <NavbarMain>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* TODO: add links */}
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
          <NavDropdown.Item onClick={onDisconnect}>Dashboard</NavDropdown.Item>
          <hr className="my-1" />
          <NavDropdown.Item onClick={onDisconnect}>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </NavbarMain>
    </>
  );
}
