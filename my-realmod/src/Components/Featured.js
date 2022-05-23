import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import "../style/Propiedad.css";
import { addFeacturedAsync } from "../redux/actions/actionFeactures";
import { FileUp } from "../helpers/FileUp";
import Swal from "sweetalert2";
import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  descripcion: Yup.string()
    .min(
      2,
      "Nombre de la  descripcion muy corto, ingresa una descripcion mas largo"
    )
    .max(
      50,
      "El Nombre de la descripcion excede el maximo de caracteres permitidos"
    )
    .required("El campo  es requerido"),
  feactured: Yup.string()
    .min(10, "es muy corta, ingresa una palabra mas larga")
    .max(400, "La palabra excede el maximo de caracteres permitidos")
    .required("El campo  es requerido"),
});

const Feactures = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    descripcion: "",
    feactured: "",
    foto: "",
    id: uuid(),
  });

  const { feactured, descripcion, foto, id } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeacturedAsync(values));
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
      <h1>Add Feactured</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Feactured</Form.Label>
          <Form.Control
            type="text"
            name="feactured"
            required
            placeholder="Nombre de la Feactured"
            value={feactured}
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
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="foto"
            required
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button type="submit" className="btnLogin">
          Add
        </Button>
        <li className="item_nav">
              <Link to="/listFeactured">Listings</Link>
            </li>
      </Form>
    </div>
  );
};

export default Feactures;
