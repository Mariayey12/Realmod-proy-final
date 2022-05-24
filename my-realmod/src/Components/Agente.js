/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import "../style/Propiedad.css";
import { addAgenteAsync } from "../redux/actions/actionAgentes";
import { FileUp } from "../helpers/FileUp";
import Swal from "sweetalert2";
import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Nombre de Agente muy corto, ingresa un Agente mas largo")
    .max(50, "El Nombre de Agente excede el maximo de caracteres permitidos")
    .required("El campo Creador es requerido"),
  categoria: Yup.string()
    .min(3, "Nombre de Categoria muy corto, ingresa una categoria mas larga")
    .max(20, "La categoria excede el maximo de caracteres permitidos")
    .required("El campo Categoria es requerido"),
  telefono: Yup.string()
    .min(10, "es muy corta, ingresa un numero mas larga")
    .max(400, "La  excede el maximo de caracteres permitidos")
    .required("El campo es requerido"),
});

const Agentes = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    categoria: "",
    telefono: "",
    foto: "",
    id: uuid(),
  });

  const { nombre, categoria, telefono, foto, id } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAgenteAsync(values));
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
      <h1>Agente</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Agente</Form.Label>

          <Form.Control
            type="text"
            name="nombre"
            required
            placeholder="Nombre de Agente"
            value={nombre}
            onChange={handleInputChange}
          />
          <Form.Label>Telefono</Form.Label>

          <Form.Control
            type="text"
            name="telefono"
            required
            placeholder="Telefono movil"
            value={telefono}
            onChange={handleInputChange}
          />

          <Form.Label>Categoría</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="categoria"
            onChange={handleInputChange}
          >
            <option>Categorias</option>
            <option value="Sweet Home">Sweet Home</option>
            <option value="Marl Street">Marl Street</option>
            <option value="Eco Bulider">Eco Bulider</option>
           
          </Form.Select>
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
              <Link to="/listAgente">Agente</Link>
            </li> 
      </Form>
    </div>
  );
};

export default Agentes;
