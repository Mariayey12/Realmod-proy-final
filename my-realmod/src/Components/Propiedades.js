import React from 'react'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import "../style/frases.css"
import { addFraseAsync } from '../redux/actions/actionAcciones';
import { FileUp } from '../helpers/FileUp';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { Links } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({

    creador: Yup.string().min(2, 'Nombre de Creador muy corto, ingresa un Creador mas largo').max(50, 'El Nombre de Creador excede el maximo de caracteres permitidos').required('El campo Creador es requerido'),
    categoria: Yup.string().min(3, 'Nombre de Categoria muy corto, ingresa una categoria mas larga').max(20, 'La categoria excede el maximo de caracteres permitidos').required('El campo Categoria es requerido'),
    frase: Yup.string().min(10, 'Frase muy corta, ingresa una Frase mas larga').max(400, 'La frase excede el maximo de caracteres permitidos').required('El campo frase es requerido')

});


const Propiedades = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        creador: '',
        categoria: '',
        frase: '',
        foto: '',
        id: uuid()

    })

    const { creador, categoria, frase, foto, id } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addFraseAsync(values))
        reset()
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
        <div className="container-fluid form">

            {/* <Link to="/listFrases">Ver FRASEs</Link> */}

            <h1>Agrega una frase de aliento</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Creador</Form.Label>
                    <Form.Control type="text" name="creador" required placeholder="Nombre del Producto" value={creador} onChange={handleInputChange} />

                    <Form.Label>Frase</Form.Label>
                    <Form.Control type="text" name="frase" required placeholder="Descripción del Producto" value={frase} onChange={handleInputChange} />

                    <Form.Label>Categoría</Form.Label>
                    <Form.Select aria-label="Default select example" name="categoria" onChange={handleInputChange}>
                        <option>Categoria</option>
                        <option value="motivacion">motivacion</option>
                        <option value="afecto">afecto</option>
                        <option value="laboral">laboral</option>
                    </Form.Select>

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" required onChange={handleFileChange} />

                </Form.Group>

                <button type="submit" className="btnLogin">Agregar Frase</button>
            </Form>
        </div >
    )
}

export default Propiedades