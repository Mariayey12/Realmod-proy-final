/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { deleteAsync, listAsyn } from "../redux/actions/actionAcciones";
import { deleterAsync, listaAsyn } from "../redux/actions/actionFeactures";
import { deletAsync, listarAsyn } from "../redux/actions/actionAgentes";
import "../style/listar.css";
import Editar from "./Editar";
import EdiAgente from "./EdiAgente";
import Edit from "./Edit";
import VerDetalle from "./VerDetalle";
import VerAgente from "./VerAgente";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const dispatch = useDispatch();
  const { acciones } = useSelector((store) => store.acciones);
  const { feactures } = useSelector((store) => store.feactures);
  const { agentes } = useSelector((store) => store.agentes);
  useEffect(() => {
    dispatch(listAsyn());
    dispatch(listaAsyn());
    dispatch(listarAsyn());
  }, []);

  //-----------------logou-------------------------------//
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  //-------------------editar modal-------------//

  //indicarle al modal que se active o no(propiedade)
  const [modal, setModal] = useState(false);
  //indicarle al modal que se active o no(facture)
  const [modal1, setModal1] = useState(false);
  //indicarle al modal que se active o no(agente)
  const [modal3, setModal3] = useState(false);
  //indicarle al modal que se active o no (detalle propiedad)
  const [modale, getModal] = useState(false);
  //indicarle al modal que se active o no (detalle agente)
  const [modale1, getModal1] = useState(false);
  //(propiedad)
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);
  //(feacture)
  const [enviarDatosModal1, setEnviarDatosModal1] = useState([]);
  //(agente)
  const [enviarDatosModal3, setEnviarDatosModal3] = useState([]);

  //(detalle de propiedade)
  const [obtenerDatosModal, getObtenerDatosModal] = useState([]);

  //(detalle del agente)
  const [obtenerDatosModal3, getObtenerDatosModal3] = useState([]);

  //---------------------editarPropiedade----------------------//
  const editar = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerPropiedades = acciones.find((t) => t.id === id);
    setModal(true);
    setEnviarDatosModal(traerPropiedades);
  };

  //---------------------editarFeacture----------------------//
  const editar1 = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerPropiedades1 = feactures.find((t) => t.id === id);
    setModal1(true);
    setEnviarDatosModal1(traerPropiedades1);
  };

  //---------------------editarAgente----------------------//
  const editar3 = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerAgentes = agentes.find((ti) => ti.id === id);
    setModal3(true);
    setEnviarDatosModal3(traerAgentes);
  };

  //---------------------verDetalledePropiedad----------------------//
  const ver = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const obtenerPropiedades = acciones.find((t) => t.id === id);
    getModal(true);
    getObtenerDatosModal(obtenerPropiedades);
  };

  //---------------------verDetalledeAgente----------------------//
  const verAgente = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const obtenerAgentes = agentes.find((t) => t.id === id);
    getModal1(true);
    getObtenerDatosModal3(obtenerAgentes);
  };

  //-------------------------eliminarPropiedad------------------------//
  const handleEliminar = (id) => {
    Swal.fire({
      title: "Eliminar Propiedad?",
      text: "??Desea eliminar esta propiedad?",
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
      text: "??Desea eliminar esta feactured?",
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
  const handleEliminar3 = (id) => {
    Swal.fire({
      title: "Eliminar Feactured?",
      text: "??Desea eliminar esta feactured?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletAsync(id));

        Swal.fire("Feactured Eliminada!");
      }
    });
  };
  //----------Map para Geolocalizacion----------------//

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div className="container-fluid divListar">
      <center>
        <div className="container-logo1">
          <div className="container-logo3">
            <img
              className="banner"
              src="https://res.cloudinary.com/academiageek1/image/upload/v1652836090/product-realmod/header-f.png"
            />
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#Sell">Sell</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Buy">Buy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#REnt">Rent</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Enter keyword here ..."
                    className="me-10"
                    aria-label="Search"
                  />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-10 my-lg-0"
                    style={{ maxHeight: "70px" }}
                    navbarScroll
                  >
                    {/*   <Nav.Link href="#action2">Link</Nav.Link> */}
                    <NavDropdown
                      title="Select Localitation"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="#action3">
                        Loulsiana, California
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Downey, California
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Abilene, Kansas
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action6">
                        Poughhkee, NY
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Button variant="success">Search</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </center>

      <div className="container-logo">
        <center>
          <h9 className="our">PROPERTIES</h9>
        </center>
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652919244/product-realmod/zrjfnzznvwo9ebnprxxr.png"
          alt="logo"
        />
        <div className="ATRE">
          <h3>Featured Listings</h3>
        </div>
      </div>
      <div className="divCards1">
        {feactures?.map((fi) => (
          <Card key={fi.id}>
            <Card.Img variant="top" src={fi.foto} />
            <Card.Body></Card.Body>
            {/* <Button variant="success" onClick={() => editar1(fi.id)}>
                Edit
              </Button>
              <Button variant="success" onClick={() => handleEliminar1(fi.id)}>
                Eliminar
              </Button>  */}
          </Card>
        ))}

        {modal1 === true ? (
          <Edit modal1={enviarDatosModal1} setModal1={setModal1} />
        ) : (
          ""
        )}
      </div>

      <div className="container-logo">
        <center>
          <h9 className="our">OUR PROPERTIES</h9>
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
                  {f.ba??o}
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

      <div className="container-logo">
        <center>
          <h9 className="our"> PROPETIER</h9>
        </center>
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652919244/product-realmod/zrjfnzznvwo9ebnprxxr.png"
          alt="logo"
        />
      </div>
      <div className="ATRE">Experties is here</div>
      <div className="divCards3">
        {agentes?.map((fa) => (
          <Card key={fa.id}>
            <Card.Img variant="top" src={fa.foto} />

            <Card.Body>
              <Card.Title>{fa.nombre}</Card.Title>
              <div>
                <Card.Title>{fa.categoria} </Card.Title>

                <Card.Title>{fa.telefono}</Card.Title>
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653290381/product-realmod/j1b4jsy7ak0nxegwehgg.png"
                  alt=""
                />
              </div>

              <Button variant="success" onClick={() => editar3(fa.id)}>
                EdiAgente
              </Button>

              <Button variant="success" onClick={() => verAgente(fa.id)}>
                VerDetalle
              </Button>

              <Button variant="success" onClick={() => handleEliminar3(fa.id)}>
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {modal3 === true ? (
        <EdiAgente modal3={enviarDatosModal3} setModal3={setModal3} />
      ) : (
        ""
      )}

      {modale1 === true ? (
        <VerAgente modale1={obtenerDatosModal3} getModal3={getModal1} />
      ) : (
        ""
      )}

      <center>
        {" "}
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1653264045/product-realmod/acncrid28xjkqnqtwerk.png"
          alt="Footer"
          style={{ width: "90rem", margin: "auto" }}
        />
      </center>

      <div>
        <center>
          {" "}
          <img
            src="https://res.cloudinary.com/academiageek1/image/upload/v1652838942/product-realmod/Our-partners.png"
            alt="Footer"
            style={{ width: "90rem", margin: "auto" }}
          />
        </center>
      </div>

      <div>
        <center>
          <img
            src="https://res.cloudinary.com/academiageek1/image/upload/v1652838422/product-realmod/localizaci%C3%B3nproduc-realmod.png"
            alt="Footer"
            style={{ width: "90rem", margin: "auto" }}
          />
        </center>
      </div>

      <center>
        {" "}
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652838929/product-realmod/Footer-1.png"
          alt="Footer"
          style={{ width: "90rem", margin: "auto" }}
        />
      </center>
    </div>
  );
};

export default Home;
