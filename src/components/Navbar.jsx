import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-secondary shadow-sm mb-3">
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/grid" as={NavLink}>
          Container
        </Nav.Link>
        <Nav.Link to="/table" as={NavLink}>
          Table
        </Nav.Link>
        <Nav.Link to="/form" as={NavLink}>
          Form
        </Nav.Link>
      </Nav>
    </NavbarBs>
  );
}
export default Navbar;
