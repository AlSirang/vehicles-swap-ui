import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMain({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ minHeight: 60 }} fixed="top">
        <Container>
          <Link to="/">
            <Navbar.Brand role="h2">TitleBlock</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">{children}</Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: 60 }} />
    </>
  );
}
