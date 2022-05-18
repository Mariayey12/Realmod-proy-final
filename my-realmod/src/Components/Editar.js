import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { FileUp } from '../helpers/FileUp'
import Swal from 'sweetalert2';
import { Button, Form, Modal } from 'react-bootstrap';
import { editAsync } from '../redux/actions/actionAcciones';


const Editar = ({ modal, setModal }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        setModal(false)
    };

    const [values, handleInputChange] = useForm({
        creador: modal.creador,
        id: modal.id,
        categoria: modal.categoria,
        frase: modal.frase

    })

    const { creador, id, categoria, frase } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        //  console.log(values)
        dispatch(editAsync(id, values))

        console.log(values)
        handleClose()

    }

    let timerInterval;

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudinary a la foto
        FileUp(file)
            .then(resp => {

                Swal.fire({
                    title: 'Cargando Imagen!',
                    html: 'Espera <b></b> milisegundos.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })

                values.foto = resp

            })
            .catch(error => {
                console.warn(error)
            })

    }


    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Frase</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => handleSubmit()}>
                            <Form.Label>Creador</Form.Label>
                            <Form.Control type="text" name="creador" required placeholder="Nombre o Apodo del Creador" value={creador} onChange={handleInputChange} />

                            <Form.Label>Frase</Form.Label>
                            <Form.Control type="text" name="frase" required placeholder="Frase Motivacional" value={frase} onChange={handleInputChange} />

                            <Form.Label>Categoria</Form.Label>
                            <Form.Select aria-label="Default select example" name="categoria" onChange={handleInputChange} required>
                                <option>Categoria</option>
                                <option value="motivacion">motivacion</option>
                                <option value="afecto">afecto</option>
                                <option value="laboral">laboral</option>
                            </Form.Select>
                            
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" name="foto" required onChange={handleFileChange} />

                            <Button variant="secondary" className="btnCrud" onClick={() => handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" className="btnCrud" onClick={handleSubmit}>
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
}

export default Editar