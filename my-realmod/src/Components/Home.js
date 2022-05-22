import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import { useEffect } from "react";
import { Button, Card, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { deleteAsync, listAsyn } from "../redux/actions/actionAcciones";
import { deleterAsync, listaAsyn } from "../redux/actions/actionFeactures";
import "../style/listar.css";
import Editar from "./Editar";
import Edit from "./Editar";
import VerDetalle from "./VerDetalle";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const dispatch = useDispatch();
  const { acciones } = useSelector((store) => store.acciones);

  const { feactures } = useSelector((store) => store.feactures);
  useEffect(() => {
    dispatch(listAsyn());
    dispatch(listaAsyn());
  }, []);

  //-----------------logou-------------------------------//
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  //-------------------editar modal-------------//
  const [modal, setModal] = useState(false); //indicarle al modal que se active o no
  const [modal1, setModal1] = useState(false); //indicarle al modal que se active o no
  const [modale, getModal] = useState(false); //indicarle al modal que se active o no
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);
  const [enviarDatosModal1, setEnviarDatosModal1] = useState([]);
  const [obtenerDatosModal, getObtenerDatosModal] = useState([]);

  //---------------------editar----------------------//
  const editar = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerPropiedades = acciones.find((t) => t.id === id);

    setModal(true);
    setEnviarDatosModal(traerPropiedades);
  };

  //---------------------editar----------------------//
  const editar1 = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerPropiedades1 = feactures.find((t) => t.id === id);

    setModal1(true);
    setEnviarDatosModal1(traerPropiedades1);
  };
  //---------------------ver----------------------//
  const ver = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const obtenerPropiedades = acciones.find((t) => t.id === id);
    getModal(true);
    getObtenerDatosModal(obtenerPropiedades);
  };

  //-------------------------eliminar------------------------//
  const handleEliminar = (id) => {
    Swal.fire({
      title: "Eliminar Propiedad?",
      text: "¿Desea eliminar esta propiedad?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAsync(id));

        Swal.fire("Propiedad Eliminada!");
      }
    });
  };

  const handleEliminar1 = (id) => {
    Swal.fire({
      title: "Eliminar Feactured?",
      text: "¿Desea eliminar esta feactured?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleterAsync(id));

        Swal.fire("Feactured Eliminada!");
      }
    });
  };

  return (
    <div className="container-fluid divListar">
      <div className="container-logo">
        <center>
          <h9 className="our">PROPERTIE</h9>
        </center>

        
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652919244/product-realmod/zrjfnzznvwo9ebnprxxr.png"
          alt="logo"
        />

        <div className="ATRE">Featured Listings</div>
      </div>
      <div className="divCards1">
        { feactures?.map((fi) => (
          <Card key={fi.id}>
            <Card.Img variant="top" src={fi.foto} />
            <Card.Body>
              
            </Card.Body>
          </Card>
        ))}
      </div>
      <center>

      <Navbar bg="light" expand="lg">
        
  <Container fluid>
    
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
      {/*   <Nav.Link href="#action2">Link</Nav.Link> */}
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <img
          className="banner"
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652836090/product-realmod/header-f.png"
        />


        <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </center>

      <div className="container-logo">
        <center>
          <h9 className="our">OUR PROPIETIE</h9>
        </center>
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652919244/product-realmod/zrjfnzznvwo9ebnprxxr.png"
          alt="logo"
        />
      </div>
      <div className="ATRE">Our Featured Properties</div>

      <div className="divCards">
        {acciones.map((f) => (
          <Card key={f.id}>
            <Card.Img variant="top" src={f.foto} />

            <Card.Body>
              <Card.Title>{f.valor}</Card.Title>
              <div>
                <Card.Title>{f.categoria} </Card.Title>
              </div>
              <div>
                <Card.Title>{f.propiedad}</Card.Title>
              </div>

              <Card.Text>
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652841210/product-realmod/mapa.png" />
                {f.localitation}{" "}
              </Card.Text>

              <div>
                <Card.Text>
                  <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652920898/product-realmod/sldrdabp6nogpdvejht2.png" />
                  {f.cama}
                </Card.Text>
              </div>

              <div>
                <Card.Text>
                  {" "}
                  <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652930257/product-realmod/vnluivy3h6mpinznu0ju.png" />
                  {f.baño}
                </Card.Text>
              </div>

              <div>
                <Card.Text>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png"
                    alt="Pie cuadrado"
                  />
                  {f.pie}
                </Card.Text>
              </div>

              <Button variant="success" onClick={() => editar(f.id)}>
                Editar
              </Button>
              <Button variant="success" onClick={() => ver(f.id)}>
                VerDetalle
              </Button>
              <Button variant="success" onClick={() => handleEliminar(f.id)}>
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {modal === true ? (
        <Editar modal={enviarDatosModal} setModal={setModal} />
      ) : (
        ""
      )}

      {modale === true ? (
        <VerDetalle modale={obtenerDatosModal} getModal={getModal} />
      ) : (
        ""
      )}

      {modal1 === true ? (
        <Edit modal1={enviarDatosModal1} setModal1={setModal1} />
      ) : (
        ""
      )}

      {modale === true ? (
        <VerDetalle modale={obtenerDatosModal} getModal={getModal} />
      ) : (
        ""
      )}

<div>

<img src="https://res.cloudinary.com/academiageek1/image/upload/v1652838929/product-realmod/Footer-1.png" alt="Footer" style={{ width: "60rem", margin: "auto" }} />
</div>

    </div>
  );
};

export default Home;
