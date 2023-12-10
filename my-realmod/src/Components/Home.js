/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { logoutAsync } from "../redux/actions/actionLogin";
import { deleteAsync, listAsync as listAsyncAcciones } from "../redux/actions/actionAcciones";
import { deleterAsync, listaAsync as listaAsyncFeactures } from "../redux/actions/actionFeactures";
import { deletAsync, listarAsync as listarAsyncAgentes } from "../redux/actions/actionAgentes";
import "../style/listar.css";
import Editar from "./Editar";
import EdiAgente from "./EdiAgente";
import Edit from "./Edit";
import VerDetalle from "./VerDetalle";
import VerAgente from "./VerAgente";
import { Navbar } from 'react-bootstrap';

import { Container } from 'react-bootstrap';


import { listAsyn as listAsync } from "../redux/actions/actionAcciones";
import { listaAsyn as listaAsync } from "../redux/actions/actionFeactures";
import { listarAsyn as listarAsync } from "../redux/actions/actionAgentes";




const Home = () => {
  const dispatch = useDispatch();
  const { acciones } = useSelector((store) => store.acciones);
  const { feactures } = useSelector((store) => store.feactures);
  const { agentes } = useSelector((store) => store.agentes);
  const navigate = useNavigate();
useEffect(() => {
  dispatch(listAsync());
  dispatch(listaAsync());
  dispatch(listarAsync());
}, [dispatch]);

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modale, getModal] = useState(false);
  const [modale1, getModal1] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);
  const [enviarDatosModal1, setEnviarDatosModal1] = useState([]);
  const [enviarDatosModal3, setEnviarDatosModal3] = useState([]);
  const [obtenerDatosModal, getObtenerDatosModal] = useState([]);
  const [obtenerDatosModal3, getObtenerDatosModal3] = useState([]);

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

  const handleEliminar3 = (id) => {
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
        dispatch(deletAsync(id));
        Swal.fire("Feactured Eliminada!");
      }
    });
  };

  const editar = (id) => {
    const traerPropiedades = acciones.find((t) => t.id === id);
    setModal(true);
    setEnviarDatosModal(traerPropiedades);
  };

  const editar1 = (id) => {
    const traerPropiedades1 = feactures.find((t) => t.id === id);
    setModal1(true);
    setEnviarDatosModal1(traerPropiedades1);
  };

  const editar3 = (id) => {
    const traerAgentes = agentes.find((ti) => ti.id === id);
    setModal3(true);
    setEnviarDatosModal3(traerAgentes);
  };

  const ver = (id) => {
    const obtenerPropiedades = acciones.find((t) => t.id === id);
    getModal(true);
    getObtenerDatosModal(obtenerPropiedades);
  };

  const verAgente = (id) => {
    const obtenerAgentes = agentes.find((t) => t.id === id);
    getModal1(true);
    getObtenerDatosModal3(obtenerAgentes);
  };

  const renderFeaturedListings = () => {
    return (
      <div className="divCards1">
        {feactures?.map((fi) => (
          <Card key={fi.id}>
            <Card.Img variant="top" src={fi.foto} />
            <Card.Body></Card.Body>
            {/* Agrega aquí el resto de tu código relacionado con feactures */}
          </Card>
        ))}
        {modal1 === true ? <Edit modal1={enviarDatosModal1} setModal1={setModal1} /> : ""}
      </div>
    );
  };

  const renderOurProperties = () => {
    return (
      <div className="divCards">
        {acciones.map((f) => (
          <Card key={f.id}>
            <Card.Img variant="top" src={f.foto} />
            <Card.Body>
              <Card.Title>{f.valor}</Card.Title>
              <div>
                <Card.Title>{f.categoria}</Card.Title>
              </div>
              <div>
                <Card.Title>{f.propiedad}</Card.Title>
              </div>
              {/* Agrega aquí el resto de tu código relacionado con acciones */}
            </Card.Body>
          </Card>
        ))}
        {modal === true ? <Editar modal={enviarDatosModal} setModal={setModal} /> : ""}
        {modale === true ? <VerDetalle modale={obtenerDatosModal} getModal={getModal} /> : ""}
      </div>
    );
  };

  const renderAgentProperties = () => {
    return (
      <div className="divCards3">
        {agentes?.map((fa) => (
          <Card key={fa.id}>
            <Card.Img variant="top" src={fa.foto} />
            <Card.Body>
              <Card.Title>{fa.nombre}</Card.Title>
              <div>
                <Card.Title>{fa.categoria}</Card.Title>
                <Card.Title>{fa.telefono}</Card.Title>
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653290381/product-realmod/j1b4jsy7ak0nxegwehgg.png"
                  alt=""
                />
              </div>
              {/* Agrega aquí el resto de tu código relacionado con agentes */}
            </Card.Body>
          </Card>
        ))}
        {modal3 === true ? <EdiAgente modal3={enviarDatosModal3} setModal3={setModal3} /> : ""}
        {modale1 === true ? (
          <VerAgente modale1={obtenerDatosModal3} getModal3={getModal1} />
        ) : (
          ""
        )}
      </div>
    );
  };

 return (
  <div className="container-fluid divListar">
    {/* Encabezado */}
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tu Logo Aquí</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Propiedades Destacadas</Nav.Link>
            <Nav.Link href="#our-properties">Nuestras Propiedades</Nav.Link>
            <Nav.Link href="#agent-properties">Propiedades de Agentes</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Contenido de las propiedades destacadas */}
    {renderFeaturedListings()}

    {/* Contenido de nuestras propiedades */}
    {renderOurProperties()}

    {/* Contenido de las propiedades de agentes */}
    {renderAgentProperties()}

    {/* Pie de página */}
    <footer className="text-center mt-4">
      <p>&copy; 2023 Tu Compañía. Todos los derechos reservados.</p>
    </footer>
  </div>
);

};

export default Home;
