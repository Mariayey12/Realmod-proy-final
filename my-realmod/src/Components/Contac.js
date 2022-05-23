import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addContactoAsync } from "../redux/actions/actionContact";
import Swal from "sweetalert2";
import { useForm } from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import "../style/listar.css";
import '../style/App.css';

import '../style/landingPage.css'


const SignupSchema = Yup.object().shape({
nombre: Yup.string()
    .min(2, "Nombre de Agente muy corto, ingresa un Agente mas largo")
    .max(50, "El Nombre  excede el maximo de caracteres permitidos")
    .required("El campo Creador es requerido"),
  email: Yup.string()
    .min(3, "email  muy corto, ingresa otro email mas larga")
    .max(20, "el email excede el maximo de caracteres permitidos")
    .required("El campo Categoria es requerido"),
    descripcion: Yup.string()
    .min(10, "es muy corta, ingresa una palabra mas larga")
    .max(400, "La palabra excede el maximo de caracteres permitidos")
    .required("El campo es requerido"),
});
const Contact = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    descripcion: "",
    email: "",
   telefono:"",
    id: uuid(),
  });

  const {
    nombre,
    email,
    descripcion,
    telefono,
    id,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactoAsync(values));
    reset();
  };

  
  return (
    <div className="Contianer-contactUs section" id="contactUs">
    <div className="ilustration-container">
      <img src='https://res.cloudinary.com/academiageek1/image/upload/v1653215234/product-realmod/gg2ceqtjj5dhcfb5tln3.webp' alt="ilustration#3"/>
    </div>
    <div className="form-container">
      <h2 className="title form-title">Contacta con Nosotros...</h2>
      <Form onSubmit={handleSubmit} className="form-contactUs">
        <Form.Group className="mb-3 " controlId="formBasicEmail"></Form.Group>
        <Form.Label>Escribe tu Nombre</Form.Label>
        <Form.Control


type="text"
name="nombre"
required
placeholder="Nombre de Contacto"
value={nombre}
onChange={handleInputChange}
/>
  
<Form.Label>Escribe tu Email</Form.Label>

<Form.Control
type="text"
name="email"
required
placeholder="Correo Electronico"
value={email}
onChange={handleInputChange}
/>
<Form.Label>Escribe tu telefono Movil</Form.Label>
<Form.Control
type="text"
name="telefono"
required
placeholder="telefono"
value={telefono}
onChange={handleInputChange}
/>
<Form.Label>Descripcion</Form.Label>
<h2 className="title form-title">Como te podemos ayudar ...</h2>
<Form.Control


type="text"
name="descripcion"
required
placeholder="Decripcion de la Propiedad"
value={descripcion}
onChange={handleInputChange}
/>
<Link to="/login"> Ir a la App</Link>
{/* 
<Link to="/contacto">Ver</Link> */}

        <Button type="submit" className="btnLogin">
          Add
        </Button>
</Form>
    </div>
    </div>

  )
}

export default Contact