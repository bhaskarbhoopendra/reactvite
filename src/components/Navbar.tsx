import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const localUser: any = localStorage.getItem("authorisedUser");
  const parsedLocalUser = JSON.parse(localUser);
  console.log({ parsedLocalUser });

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <NavbarBs className="bg-light shadow-sm">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/backend" as={NavLink}>
            Backend
          </Nav.Link>
          {parsedLocalUser && (
            <>
              <Nav.Link onClick={handleLogout} to="/backend" as={NavLink}>
                Logout
              </Nav.Link>
            </>
          )}
          {!parsedLocalUser && (
            <>
              <Nav.Link to="/signup" as={NavLink}>
                Signup
              </Nav.Link>
              <Nav.Link to="/login" as={NavLink}>
                Login
              </Nav.Link>
            </>
          )}
        </Nav>

        <Button
          variant="outline-primary rounded-circle"
          style={{ position: "relative", height: "3rem", width: "3rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
          </svg>
          <div
            className="bg-danger rounded-circle"
            style={{
              position: "absolute",
              height: "1.5rem",
              width: "1.5rem",
              color: "white",
              transform: "translate(50%,-20%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
