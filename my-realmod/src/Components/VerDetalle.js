/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { Button, Card, Modal } from "react-bootstrap";
import { verAsync } from "../redux/actions/actionAcciones";
import "../style/detalle.css";
const VerDetalle = ({ modale, getModal }) => {
  const dispatch = useDispatch();
  const [show, getShow] = useState(true);

  const handleClose = () => {
    getShow(false);
    getModal(false);
  };

  const [values] = useForm({
    foto: modale.foto,
    propiedad: modale.propiedad,
    valor: modale.valor,
    opcion: modale.opcion,
    tipo: modale.tipo,
    id: modale.id,
    categoria: modale.categoria,
    localitation: modale.localitation,
    cama: modale.cama,
    baño: modale.baño,
    pie: modale.pie,
    parqueadero: modale.parqueadero,
    piscina: modale.piscina,
    seguridad: modale.seguridad,
    libreria: modale.libreria,
    medicina: modale.medicina,
    Kingsize: modale.Kingsize,
    juegos: modale.juegos,
    descripcion: modale.descripcion,
  });

  const {
    id,
    foto,
    propiedad,
    descripcion,
    valor,
    opcion,
    tipo,
    categoria,
    localitation,
    cama,
    baño,
    pie,
    parqueadero,
    piscina,
    seguridad,
    libreria,
    medicina,
    Kingsize,
    juegos,
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
            <Card.Title>{propiedad}</Card.Title>
            <Card.Title>
              <img
                src="https://res.cloudinary.com/academiageek1/image/upload/v1653077739/product-realmod/cv8yzmocblauxiyclyz3.png"
                width="35"
                alt="valor del inmueble"
              />
              {valor}
            </Card.Title>
            <Card.Title>{opcion}</Card.Title>{" "}
            <Card.Title>
              {" "}
              <img
                src="https://res.cloudinary.com/academiageek1/image/upload/v1653077726/product-realmod/sgzfxppmmfthkl5agnz6.png"
                width="59"
                text-aling="center"
                alt="inteligente"
              />
              Casa {tipo}
            </Card.Title>
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
            <div>
              <Card.Text>
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1652920898/product-realmod/sldrdabp6nogpdvejht2.png"
                  alt="cama"
                  width="40"
                  text-align="center"
                  margin="auto"
                />
                {cama}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1652930257/product-realmod/vnluivy3h6mpinznu0ju.png"
                  alt="baño"
                  width="40"
                  text-align="right"
                  margin="auto"
                />
                {baño}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png"
                  alt="pie cuadrado"
                />
                {pie}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653078190/product-realmod/xhb0qzrqj8hnoe2vk9xy.png"
                  width="39"
                  margin="auto"
                  text-align="center"
                  alt="parqueadero"
                />
                {parqueadero}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653077730/product-realmod/dctorkkqldy1fkpwsuwu.png"
                  width="59"
                  alt="piscina"
                />
                {piscina}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653081249/product-realmod/gkvku83m1y40qfadufvj.png"
                  width="39"
                  alt="area de seguridad"
                />
                {seguridad}
              </Card.Text>
            </div>
            <div>
              <p>
                {" "}
                <b>
                  {" "}
                  <Card.Text>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/academiageek1/image/upload/v1653078238/product-realmod/b0cgibqxkhr9kimxguea.png"
                      width="49"
                      alt="area de libreria"
                      margin-right="40"
                    />
                    {libreria}
                  </Card.Text>
                </b>{" "}
              </p>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653077702/product-realmod/sjzm4aftr4aqsgilxpio.png"
                  width="59"
                  alt="area de medicina"
                />
                {medicina}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653078242/product-realmod/nlkf3cqgx4u03zovlceo.png "
                  width="59"
                  alt="camas Kingsize"
                />
                {Kingsize}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img
                  src="https://res.cloudinary.com/academiageek1/image/upload/v1653078187/product-realmod/jgfdb6baguxwhhynxswf.png"
                  width="39"
                  alt="zona de juegos para niño"
                />
                {juegos}
              </Card.Text>
            </div>
            <h1>Descripcion</h1>
            <div>
              <Card.Text> {descripcion}</Card.Text>
            </div>
              <Button
              variant="secondary"
              className="btnCrud"
              onClick={() => handleClose}
            >
              Close
            </Button> 
            <Button
              type="submit"
              variant="primary"
              className="btnCrud"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
            <Button onClick={() => propiedad}>
              {" "}
             
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652938146/product-realmod/utrauersmkgwwuirt5q5.png"></img>
              Add to Cart</Button>
              <li className="item_nav">
                <Link to="/carrito"> </Link>
              </li>
            
            <Button><img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937731/product-realmod/p9uelt0rq6jgq7fxbfcp.png"></img>
              Add to Favorite{" "} </Button>
              
           
            <li className="item_nav">
              <Link to="/home"> </Link>
            </li>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default VerDetalle;
