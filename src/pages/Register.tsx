import { useState } from "react"
import axios from "axios"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    if (e.target.id === "firstname") {
      setFirstName(e.target.value)
    }
    if (e.target.id === "lastname") {
      setLastName(e.target.value)
    }
    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
    if (e.target.id === "phonenumber") {
      setPhoneNumber(e.target.value)
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
      console.log({ firstName, lastName, email, password, phoneNumber });
      axios.post("http://localhost:5000/auth/register", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password
    })
    navigate('/', {replace:true})
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phonenumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}