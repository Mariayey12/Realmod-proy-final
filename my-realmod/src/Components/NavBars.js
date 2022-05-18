import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/Logo.png";
import { logoutAsync } from "../redux/actions/actionLogin";


const NavBars= () => {
  //-----------------logou-------------------------------//
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  return (
    <div className="container-Nav">
      <nav className="nav-item">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container-item_nav">
          <ul className="list-nav">
            <li className="item_nav">
              <Link to="/addPropie"> Agregar Propiedades</Link>
            </li>
            <li className="item_nav">
              <Link to="/listPropies">Ver Propiedades</Link>
            </li>
            <li className="item_nav" onClick={logout}>
              <a href="#">Cerrar Sesion</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;

