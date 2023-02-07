import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMain({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ height: 60 }}>
        <Container>
          <Link to="/">
            <Navbar.Brand role="h2">Vehicles Swap</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">{children}</Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
