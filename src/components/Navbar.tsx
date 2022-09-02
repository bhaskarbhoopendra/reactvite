import { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar as NavbarBs, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {

  const [searchMe, setSearchMe] = useState("");

  const handleChange = (e:any) => {
    if (e.target.id === "searchMe") {
      setSearchMe(e.target.value);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(searchMe);
  };
  return (
    <NavbarBs className="bg-light shadow-sm">
      {/* <Container> */}
      <Container>
      <Row >
        <Col xs={1} sm={1} lg={1}> </Col>
      
            <Col xs={3} sm={4} lg={5} className="me-2">
             <Row> 
              <Col>
              <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Control id="searchMe" placeholder="Search anything"
          onChange={(e) => handleChange(e)} />
          </Form>
            </Col>
            <Col>
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Search</button>
        </Col>
        
        </Row>
        </Col>
        <Col xs={3} sm={4} lg={5}>
        <Nav >
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
          <Nav.Link to="/signup" as={NavLink}>
            Signup
          </Nav.Link>
        </Nav>
        </Col>
        </Row>
      {/* </Container> */}
<Col xs={1} sm={1} lg={1}>
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
        </Col>
      </Container>
       
    </NavbarBs>
  );
}
