import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="Contianer-contactUs section" id="contactUs">
    <div className="ilustration-container">
      <img src='https://res.cloudinary.com/academiageek1/image/upload/v1653215234/product-realmod/gg2ceqtjj5dhcfb5tln3.webp' alt="ilustration#3"/>
    </div>
    <div className="form-container">
      <h2 className="title form-title">Contacta con Nosotros...</h2>
      <form className="form-contactUs">
        <label htmlFor="inputNombre">
          <input type="text" placeholder="nombre" id="inputNombre" />
        </label>
        <label htmlFor="inputEmail">
          <input type="email" placeholder="Email" id="inputEmail" />
        </label>
        <label htmlFor="inputTel">
          <input
            type="number"
            placeholder="Celular - Movil"
            id="inputTel"
          />
        </label>
        <label htmlFor="inputTel">
          <textarea placeholder="¿Como podemos Ayudarte...?" />
        </label>
        <button type="button">Contactanos</button>
        <button type="button">
        <li className="item_nav">
              <Link to="/login"> Ir a la App</Link>
            </li>
        
        </button>

      </form>
    </div>
  </div>

  )
}

export default Contact