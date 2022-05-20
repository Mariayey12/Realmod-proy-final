import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/Logo.png";
import { logoutAsync } from "../redux/actions/actionLogin";

const NavBars = () => {
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
              <Link to="/home">Home</Link>
            </li>
            <li className="item_nav">
              <Link to="/">About</Link>
            </li>
            <li className="item_nav">
              <Link to="/addPropiedad">Property</Link>
            </li>
            <li className="item_nav">
              <Link to="/listPropiedad">Ver</Link>
            </li>
           {/*  <li className="item_nav">
              <Link to="/verPropiedad">Ver</Link>
            </li> */}
            <li className="item_nav">
              <Link to="/">Pages</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Blog</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Contac</Link>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937567/product-realmod/b0tzfhg9vd1t9dpvvmga.png" ></img>
            </li>

            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937731/product-realmod/p9uelt0rq6jgq7fxbfcp.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937735/product-realmod/brae3jujqaax6ctn4bxp.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652938146/product-realmod/utrauersmkgwwuirt5q5.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937849/product-realmod/bovqzsxqkvoed856y1hf.png" ></img>
            </li>

            <li className="item_nav" onClick={logout}>
              <a href="#">Cerrar</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;
