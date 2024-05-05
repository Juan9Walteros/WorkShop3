import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/Logo-PeakU.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

const NavBarPeakU = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dropdownShow, setDropdownShow] = useState(false);

  return (
    <>
      <Navbar className="NavBarPeakU bg-body-tertiary">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="..." />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <Nav.Link href="#Empleos">Empleos</Nav.Link>
            <Nav.Link href="#Bootcamp">Bootcamp</Nav.Link>
            <Nav.Link href="#About">Sobre nosotros</Nav.Link>
            <NavDropdown title="Para profesionales" id="basic-nav-dropdown">
              <NavDropdown.Item href="Profesionales">inicio</NavDropdown.Item>
              <NavDropdown.Item href="#Empleos">Empleos</NavDropdown.Item>
              <NavDropdown.Item href="#Cursos_retos">
                Cursos y retos
              </NavDropdown.Item>
              <NavDropdown.Item href="#Preguntas">Preguntas</NavDropdown.Item>
              <NavDropdown.Item href="#Profesores">Profesores</NavDropdown.Item>
              <NavDropdown.Item href="#Bootcamp">Bootcamp</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Para empresas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Inicio">Inicio</NavDropdown.Item>
              <NavDropdown.Item href="#PublicarEmpleo">
                Publicar empleo
              </NavDropdown.Item>
              <NavDropdown.Item href="#NuestroProceso">
                Nuestro proceso
              </NavDropdown.Item>
              <NavDropdown.Item href="#Precios">Precios</NavDropdown.Item>
              <NavDropdown.Item href="#PruebasOnline">
                Pruebas online
              </NavDropdown.Item>
              <NavDropdown.Item href="#Nomina">Nómina</NavDropdown.Item>
              <NavDropdown.Item href="#Blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#Comercial">Comercial</NavDropdown.Item>
              <NavDropdown.Item href="#CalculadoraDeSalario">
                Calculadora de salario
              </NavDropdown.Item>
            </NavDropdown>
            <div className="div1 order-2 d-flex align-items-center">
              <div className="mr-2">
                <Button
                  type="button"
                  className="btn btnNavBar btn-secondary d-inline-block btn-light"
                  onClick={handleShow}
                >
                  <i class="bi bi-bell"></i>
                </Button>
                <Offcanvas
                  className="offCanvas1"
                  show={show}
                  placement="end"
                  onHide={handleClose}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="offcanvasT">
                      Notificaciones
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>No tienes notificaciones.</Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="mr-2">
                <Dropdown
                  placement="right"
                  align="end"
                  show={dropdownShow}
                  onHide={() => setDropdownShow(false)}
                >
                  <Button
                    onClick={() => setDropdownShow(!dropdownShow)}
                    className="btnUser btn-light"
                    id="dropdown-button-drop-down"
                  >
                    <div className="UserD">
                      <div className="user1">
                        <i class="bi bi-person"></i>
                      </div>
                      <div className="UserD2">
                        <spam className="a text-secondary">Juan</spam>
                        <div className="txt2">
                          <spam className="b text-secondary">
                            <i class="bi bi-gem"></i>{" "}
                            <spam className="spa2">5232</spam>
                          </spam>
                        </div>
                      </div>
                    </div>
                  </Button>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Redimir</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Tu CV</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Ajustes</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      Cambiar contraseña
                      <Dropdown.Item href="#/action-6">
                        Cerrar sesión
                      </Dropdown.Item>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarPeakU;
