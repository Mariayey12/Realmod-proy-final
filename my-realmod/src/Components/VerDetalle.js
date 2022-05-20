import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";
import { Button, Card, Modal } from "react-bootstrap";
import { verAsync } from "../redux/actions/actionAcciones";

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
    kingsize: modale.kingsize,
    juegos: modale.juegos

  });

  const {
    id,
    foto,
    propiedad,
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
    kingsize,
    juegos

  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(values)
    dispatch(verAsync(id, values));

    console.log(values);
    handleClose();
  };

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Our Featured Properties</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img variant="top" src={foto} />

            <Card.Title>{categoria} </Card.Title>
            <Card.Title>{propiedad}</Card.Title>

            <Card.Title>{valor}</Card.Title>
            <Card.Title>{opcion}</Card.Title>
            <Card.Title>{tipo}</Card.Title>

            <Card.Text>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652841210/product-realmod/mapa.png" />
              {localitation}{" "}
            </Card.Text>
            <h1> Caracteristicas</h1>

            <div>
              <Card.Text>
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652920898/product-realmod/sldrdabp6nogpdvejht2.png" />
                {cama}
              </Card.Text>
            </div>

            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652930257/product-realmod/vnluivy3h6mpinznu0ju.png" />
                {baño}
              </Card.Text>
            </div>

            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {pie}
              </Card.Text>
            </div>

            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {parqueadero}
              </Card.Text>
            </div>

            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {piscina}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {seguridad}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {libreria}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {medicina}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {kingsize}
              </Card.Text>
            </div>
            <div>
              <Card.Text>
                {" "}
                <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                {juegos}
              </Card.Text>
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
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default VerDetalle;
