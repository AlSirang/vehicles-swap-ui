import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import NavbarMain from "./main";

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

        <Link to="/auth">
          Sign In <ArrowRight />
        </Link>
      </NavbarMain>
    </>
  );
}
