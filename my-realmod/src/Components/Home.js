import React from 'react'
import { useDispatch, useSelecto, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin'
import { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleteAsync, listAsyn } from '../redux/actions/actionAcciones'
import "../styles/listar.css"
import Editar from './Editar';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Home = () => {

  const dispatch = useDispatch()
  const { acciones } = useSelector(store => store.acciones)

  useEffect(() => {
    dispatch(listAsyn())
  }, [])



  //-----------------logou-------------------------------//
  const navigate = useNavigate()

  const logout = () => {
    dispatch(logoutAsync())
    navigate("/login")
  }


  //-------------------editar modal-------------//
  const [modal, setModal] = useState(false) //indicarle al modal que se active o no 
  const [enviarDatosModal, setEnviarDatosModal] = useState([])

  const editar = (id) => {
    //--------t= conseguir los datos de ese objeto con ese id--------------//
    const traerFrases = acciones.find(t => t.id === id)

    setModal(true)
    setEnviarDatosModal(traerFrases)

  }


  //-------------------------eliminar------------------------//
  const handleEliminar = (id) => {

    Swal.fire({
      title: 'Eliminar Producto?',
      text: "¿Desea eliminar este producto?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        dispatch(deleteAsync(id))

        Swal.fire(
          'Producto Eliminado!'
        )
      }
    })
  }



  return (
    <div className="container-fluid divListar">

      {/* <button onClick={logout}>Cerrar Sesion</button>
      <Link to="/addFrases">AGREGAR FRASE</Link> */}

      <div className="ATRE">Atrévete a Vivir</div>

      <div className="divCards">
        {

          acciones.map(f => (
            <Card key={f.id}>
              <Card.Img variant="top" src={f.foto} />
              <Card.Body>
                <Card.Title>{f.creador}</Card.Title>
                <Card.Text>
                  {f.frase}
                </Card.Text>
                <Button variant="warning" onClick={() => editar(f.id)}>Editar</Button>
                <Button variant="warning" onClick={() => handleEliminar(f.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          ))

        }
    </div>
      {

    modal === true ? <Editar modal={enviarDatosModal} setModal={setModal} /> : ''
  }

    </div >

  )
}

export default Home