/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { Button, Card, Modal } from "react-bootstrap";
import { verAsync } from "../redux/actions/actionAcciones";
import "../style/detalle.css";
const VerAgente = ({ modale1, getModal1 }) => {
  const dispatch = useDispatch();
  const [show, getShow] = useState(true);

  const handleClose = () => {
    getShow(false);
    getModal1(false);
  };

  const [values] = useForm({
    foto: modale1.foto,
    nombre: modale1.nombre,
    categoria: modale1.valor,
    experiencia: modale1.experiencia,
    edad: modale1.edad,
    id: modale1.id,
    descripcion: modale1.descripcion,
    localitation: modale1.localitation,
  });

  const {
    id,
    foto,
    nombre,
    categoria,
    experiencia,
    edad,
    descripcion,
    localitation,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(values)
    dispatch(verAsync(id, values));

    console.log(values);
    handleClose();
  };

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
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Our Featured Properties</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalt">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: foto,
                },
                largeImage: {
                  width: 1200,
                  height: 1800,
                },
              }}
            />
            <Card.Title background-color="primary">{categoria} </Card.Title>
            <Card.Title>{nombre}</Card.Title>
            <Card.Title>
              <img
                src="https://res.cloudinary.com/academiageek1/image/upload/v1653077739/product-realmod/cv8yzmocblauxiyclyz3.png"
                width="35"
                alt="valor del inmueble"
              />
              {edad}
            </Card.Title>
            <Card.Title>{edad}</Card.Title>{" "}
            <Card.Text>
              <img
                src="https://res.cloudinary.com/academiageek1/image/upload/v1652841210/product-realmod/mapa.png"
                alt="localitation"
                width="59"
              />
              {localitation}{" "}
              <div>
                <h6>Geolocation</h6>
                <p>Latitude: {state.latitude}</p>
                <p>longitude: {state.longitude}</p>

                <Link
                  to={{
                    pathname: "/map",

                    state,
                  }}
                >
                  See marker
                </Link>
              </div>
            </Card.Text>
            <h1> Caracteristicas</h1>
            <h1>Descripcion</h1>
            <div>
              <Card.Text> {descripcion}</Card.Text>
            </div>
            {/*  <Button
              variant="secondary"
              className="btnCrud"
              onClick={() => handleClose}
            >
              Close
            </Button> */}
            <Button
              type="submit"
              variant="primary"
              className="btnCrud"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
            <li className="item_nav">
              <Link to="/"> </Link>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
            </li>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default VerAgente;
