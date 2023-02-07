import { Link } from "react-router-dom";
import NavbarMain from "./main";
import { Nav } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

export default function AuthHeader() {
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

        {/* <Link to="/auth">0x008eBFc38A0260187057bA5Bc26D37dc797e791f</Link> */}
      </NavbarMain>
    </>
  );
}
