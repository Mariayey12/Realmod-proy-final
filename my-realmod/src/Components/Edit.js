/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { FileUp } from "../helpers/FileUp";
import Swal from "sweetalert2";
import { Button, Form, Modal } from "react-bootstrap";
import { editAsync } from "../redux/actions/actionFeactures";

const Edit = ({ modal1, setModal1 }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setModal1(false);
  };

  const [values, handleInputChange] = useForm({
    feactured: modal1.feactured,
    descripcion: modal1.descripcion,
    id: modal1.id,
  });

  const {  id, feactured,descripcion } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(values)
    dispatch(editAsync(id, values));
    console.log(values);
    handleClose();
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
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar feactured</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={() => handleSubmit()}>
              <Form.Label>Feactured</Form.Label>
              <Form.Control
                type="text"
                name="fecatured"
                required
                placeholder="Nombre de la feactured"
                value={feactured}
                onChange={handleInputChange}
              />
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name="foto"
                required
                onChange={handleFileChange}
              />
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
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Edit;