import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import Logo from "../images/TSP_Studio2.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="spoon">
        <img src={Logo} alt="TSP Studio" width="50%" />
      </div>

      <div className="Login">
        <h2
          style={{
            fontFamily: "Montserrat",
            textAlign: "center",
            fontColor: 'blue',
          }}
        >
          Please Login
        </h2>
        
        <Form className="loginform" onSubmit={handleSubmit}>
          <Form.Group
            size="lg"
            controlId="email"
            style={{ marginBottom: "3em" }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            size="lg"
            controlId="password"
            style={{ marginBottom: "3em" }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
