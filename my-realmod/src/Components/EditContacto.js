import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { FileUp } from "../helpers/FileUp";
import Swal from "sweetalert2";
import { Button, Form, Modal } from "react-bootstrap";
import { editAsync } from "../redux/actions/actionAcciones";

const Edi = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setModal(false);
  };

  const [values, handleInputChange] = useForm({
    propiedad: modal.propiedad,
    id: modal.id,
    categoria: modal.categoria,
    localitation: modal.localitation,
    cama: modal.cama,
    baño: modal.baño,
    pie: modal.pie,

  });

  // eslint-disable-next-line no-unused-vars
  const {  id, propiedad ,categoria,localitation,cama,baño,pie } = values;

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
            <Modal.Title>Editar Propiedad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={() => handleSubmit()}>
              <Form.Label>Propiedad</Form.Label>
              <Form.Control
                type="text"
                name="propiedad"
                required
                placeholder="Nombre de la Propiedad"
                value={propiedad}
                onChange={handleInputChange}
              />

              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="categoria"
                onChange={handleInputChange}
                required
              >
                <option>Categoria</option>
                <option value="studio">Studio Home</option>
                <option value="apartamento">Apartments</option>
                <option value="villa">Villa</option>
                <option value="restaurant">Restaurant</option>
                <option value="comercial">Comercial</option>
              </Form.Select>
              <div>
            <Form.Label>Localitation</Form.Label>
            <Form.Control
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
              placeholder="Baño"
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

export default Edi;
