import React from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Logo from "../images/HeaderLogo.png";

export default function Header() {
  return (
    <>
      <Navbar sticky="top" className="navbar" color="light" expand="md" light>
        <NavItem
          style={{
            marginLeft: "10%",
          }}
        >
          <img src={Logo} alt="Tom Stout" style={{ width: "200px" }} />
        </NavItem>
        <NavbarBrand
          href="/"
          style={{
            fontFamily: "Yellowtail",
            color: "blue",
            fontSize: "25px",
          }}
        >
          Photographer Extraordinaire!
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse
          navbar
          style={{
            justifyContent: "flex-end",
            marginRight: "10%",
          }}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/home"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/clients"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Clients
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/sessions"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Sessions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/calendar"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/projects"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/finances"
                style={{
                  fontFamily: "Montserrat",
                  color: "blue",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Finances
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
