/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import "../style/Propiedad.css";
import { addPropiedadAsync } from "../redux/actions/actionAcciones";
import { FileUp } from "../helpers/FileUp";
import Swal from "sweetalert2";
import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  descripcion: Yup.string()
    .min(2, "Nombre de Agente muy corto, ingresa un Agente mas largo")
    .max(50, "El Nombre de Agente excede el maximo de caracteres permitidos")
    .required("El campo Creador es requerido"),
  categoria: Yup.string()
    .min(3, "Nombre de Categoria muy corto, ingresa una categoria mas larga")
    .max(20, "La categoria excede el maximo de caracteres permitidos")
    .required("El campo Categoria es requerido"),
  propiedad: Yup.string()
    .min(10, "es muy corta, ingresa una palabra mas larga")
    .max(400, "La palabra excede el maximo de caracteres permitidos")
    .required("El campo frase es requerido"),
});

const Propiedades = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    valor: "",
    propiedad: "",
    categoria: "",
    localitation: "",
    cama: "",
    baño: "",
    pie: "",
    foto: "",
    id: uuid(),
  });

  const {
    valor,
    propiedad,
    descripcion,
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
    foto,
    id,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPropiedadAsync(values));
    reset();
  };

  let timerInterval;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudinary a la foto
    FileUp(file)
      .then((resp) => {
        Swal.fire({
          title: "Cargando Imagen!",
          html: "Espera <b></b> milisegundos.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });

        values.foto = resp;
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="container-fluid form">
      
      <h1>Property</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Propiedad</Form.Label>

          <Form.Control


            type="text"
            name="propiedad"
            required
            placeholder="Nombre de la Propiedad"
            value={propiedad}
            onChange={handleInputChange}
          />
              <Form.Label>Descripcion</Form.Label>

<Form.Control


  type="text"
  name="descripcion"
  required
  placeholder="Decripcion de la Propiedad"
  value={descripcion}
  onChange={handleInputChange}
/>
          <Form.Label>Valor</Form.Label>

          <Form.Control
            type="text"
            name="valor"
            required
            placeholder="Valor de la propiedad"
            value={valor}
            onChange={handleInputChange}
          />
          <Form.Label>Opcione</Form.Label>

          <Form.Control
            type="text"
            name="opcion"
            required
            placeholder="Opcion de la Propiedad"
            value={opcion}
            onChange={handleInputChange}
          />
          <Form.Label>Tipo de Casa</Form.Label>

          <Form.Control
            type="text"
            name="tipo"
            required
            placeholder="Tipo de Propiedad "
            value={tipo}
            onChange={handleInputChange}
          />
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="categoria"
            onChange={handleInputChange}
          >
            <option>Categorias</option>
            <option value="studio">Studio Home</option>
            <option value="apartamento">Apartments</option>
            <option value="villa">Villa</option>
            <option value="restaurant">Restaurant</option>
            <option value="Comercial">Comercial</option>
          </Form.Select>
          <div>
            <Form.Label>Localitation</Form.Label>

            <Form.Control
            className="control"
              type="text"
              name="localitation"
              required
              placeholder="Localitation"
              value={localitation}
              onChange={handleInputChange}
              
            />
          </div>
          <div>
            <Form.Label>Beds</Form.Label>

            <Form.Control
              type="text"
              name="cama"
              required
              placeholder="Cama"
              value={cama}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Form.Label>Baths</Form.Label>
            <Form.Control
              type="text"
              name="baño"
              required
              placeholder="baño"
              value={baño}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Form.Label>Sqft</Form.Label>
            <Form.Control
              type="text"
              name="pie"
              required
              placeholder="pie"
              value={pie}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Parking lot</Form.Label>
            <Form.Control
              type="text"
              name="parqueadero"
              required
              placeholder="parqueadero"
              value={parqueadero}
              onChange={handleInputChange}
            />{" "}
          </div>
          <div>
            <Form.Label>swimming pool</Form.Label>
            <Form.Control
              type="text"
              name="piscina"
              required
              placeholder="piscina"
              value={piscina}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Private security</Form.Label>
            <Form.Control
              type="text"
              name="seguridad"
              required
              placeholder="seguridad"
              value={seguridad}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Library Area</Form.Label>
            <Form.Control
              type="text"
              name="libreria"
              required
              placeholder="Area de Libreia"
              value={libreria}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Medicine Area</Form.Label>
            <Form.Control
              type="text"
              name="medicina"
              required
              placeholder="Area de Medicina"
              value={medicina}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Kingsize beds</Form.Label>
            <Form.Control
              type="text"
              name="Kingsize"
              required
              placeholder="Camas Kingsize"
              value={Kingsize}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div>
            <Form.Label>Children's play area</Form.Label>
            <Form.Control
              type="text"
              name="juegos"
              required
              placeholder="juegos"
              value={juegos}
              onChange={handleInputChange}
            />{" "}
          </div>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="foto"
            required
            onChange={handleFileChange}
          />
        </Form.Group>
        <Link to="/listPropiedad">Ver</Link>
        <Button type="submit" className="btnLogin">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default Propiedades;
