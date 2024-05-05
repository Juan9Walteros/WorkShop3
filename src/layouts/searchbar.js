import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  return (
    <>
      <Navbar className="NavBarSearch bg-blue py-3 justify-content-between">
        <Container className="Cont1 container-fluid">
          <Container className="Cont2">
            <Row>
              <Col lg="6">
                <Form inline className="form1">
                  <InputGroup>
                    <InputGroup.Text>
                      <i class="bi bi-search"></i>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Busca por cargo, salario, ubicación o empresa"
                      aria-label="Username"
                      className=""
                    />
                  </InputGroup>
                </Form>
              </Col>
              <Col>
                <Form inline>
                  <Row>
                    <div className="d-flex justify-content-end">
                      <Col xs="2">
                        <Button
                          variant="outline-light"
                          className="rounded-pill btn-sm"
                          onClick={handleShow}
                        >
                          Área <i class="bi bi-caret-down-fill"></i>
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton className="ModalH">
                            <Modal.Title className="modalT">
                              Elige el área de trabajo
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Comercio Exterior
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Contabilidad y Finanzas
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Diseño
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Docencia
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Logística y Transporte
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Marketing
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Otro
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Reclutamiento
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Recursos Humanos
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Servicio Al Cliente
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Tecnología
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  type="checkbox"
                                  value=""
                                  id="defaultCheckbox"
                                  checked={false}
                                />{" "}
                                Ventas
                              </label>
                            </div>
                          </Modal.Body>

                          <Modal.Footer>
                            <div className="ModalF">
                              <Button
                                variant="outline-secondary"
                                onClick={handleClose}
                              >
                                Cerrar
                              </Button>
                              <Button className="btnF2" onClick={handleClose}>
                                Aplicar
                              </Button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </Col>

                      <Col xs="2">
                        <Button
                          variant="outline-light"
                          className="btn btn-sm rounded-pill"
                          onClick={handleShow1}
                        >
                          Cargo <i class="bi bi-caret-down-fill"></i>
                        </Button>
                        <Modal show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton className="ModalH">
                            <Modal.Title className="modalT">
                              Elige uno o más cargos
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Lo sentimos, Estamos trabajando para ti.
                          </Modal.Body>
                          <Modal.Footer>
                            <div className="ModalF">
                              <Button
                                variant="outline-secondary"
                                onClick={handleClose}
                              >
                                Cerrar
                              </Button>
                              <Button className="btnF2" onClick={handleClose}>
                                Aplicar
                              </Button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </Col>

                      <Col xs="2">
                        <Button
                          variant="outline-light"
                          className="rounded-pill btn-sm "
                          onClick={handleShow2}
                        >
                          Salario <i class="bi bi-caret-down-fill"></i>
                        </Button>
                        <Modal show={show2} onHide={handleClose2}>
                          <Modal.Header closeButton className="ModalH">
                            <Modal.Title className="modalT">
                              Rango salarial
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Lo sentimos, Estamos trabajando para ti.
                          </Modal.Body>
                          <Modal.Footer>
                            <div className="ModalF">
                              <Button
                                variant="outline-secondary"
                                onClick={handleClose}
                              >
                                Cerrar
                              </Button>
                              <Button className="btnF2" onClick={handleClose}>
                                Aplicar
                              </Button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </Col>
                      <Col xs="2">
                        <Button
                          variant="outline-light"
                          className="btnU rounded-pill btn-sm "
                          onClick={handleShow2}
                        >
                          Ubicación <i class="bi bi-caret-down-fill"></i>
                        </Button>

                        <Modal show={show3} onHide={handleClose3}>
                          <Modal.Header closeButton className="ModalH">
                            <Modal.Title className="modalT">
                              Elige un ubicación
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Lo sentimos, Estamos trabajando para ti.
                          </Modal.Body>
                          <Modal.Footer>
                            <div className="ModalF">
                              <Button
                                variant="outline-secondary"
                                onClick={handleClose}
                              >
                                Cerrar
                              </Button>
                              <Button className="btnF2" onClick={handleClose}>
                                Aplicar
                              </Button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </Col>
                    </div>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default SearchBar;
