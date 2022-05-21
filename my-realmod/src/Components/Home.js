import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { deleteAsync, listAsyn } from "../redux/actions/actionAcciones";
import "../style/listar.css";
import Editar from "./Editar";
import VerDetalle from "./VerDetalle";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const dispatch = useDispatch();
  const { acciones } = useSelector((store) => store.acciones);

  useEffect(() => {
    dispatch(listAsyn());
  }, []);

  //-----------------logou-------------------------------//
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  //-------------------editar modal-------------//
  const [modal, setModal] = useState(false); //indicarle al modal que se active o no
  const [modale, getModal] = useState(false); //indicarle al modal que se active o no
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);
  const [obtenerDatosModal, getObtenerDatosModal] = useState([]);

  const editar = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerPropiedades = acciones.find((t) => t.id === id);

    setModal(true);
    setEnviarDatosModal(traerPropiedades);
  };

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

  return (
    <div className="container-fluid divListar">
      <div className="container-logo">
        <center>
          <h9 className="our">PROPIETIE</h9>
        </center>
        <img
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652919244/product-realmod/zrjfnzznvwo9ebnprxxr.png"
          alt="logo"
        />
        <div className="ATRE">Featured Listings</div>
      </div>

      <center>
        <img
          className="banner"
          src="https://res.cloudinary.com/academiageek1/image/upload/v1652836090/product-realmod/header-f.png"
        />
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
                  <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652921111/product-realmod/ah2our7gc55nge6fj1wl.png" />
                  {f.pie}
                </Card.Text>
              </div>

              <Button
                className="editar"
                variant="success"
                onClick={() => editar(f.id)}
              >
                Editar
              </Button>
              <Button
                className="editar"
                variant="success"
                onClick={() => ver(f.id)}
              >
                VerDetalle
              </Button>
              <Button
                className="editar"
                variant="success"
                onClick={() => handleEliminar(f.id)}
              >
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
    </div>
  );
};

export default Home;
