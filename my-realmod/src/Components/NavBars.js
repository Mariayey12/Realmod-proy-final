import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import logo from "../image/Logo.png";
import { logoutAsync } from "../redux/actions/actionLogin";
import { Form, NavDropdown} from "react-bootstrap";

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
              <Link to="/about">About</Link>
            </li>

            <li className="item_nav">
              <Link to="/verPropiedad"></Link>

          <NavDropdown title="Propetier" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Studio Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Apartments</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Villa</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Restaurant</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Comercial</NavDropdown.Item>
        </NavDropdown>
            </li> 
            <li className="item_nav">
              <Link to="/">Pages</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Blog</Link>
            </li>
            <li className="item_nav">
              <Link to="/contactano">Contac</Link>
            </li>
            <li className="item_nav">
              <Link to="/addFeactured">AddF</Link>
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
              <Link to="/addPropiedad"><img src="https://res.cloudinary.com/academiageek1/image/upload/v1652937849/product-realmod/bovqzsxqkvoed856y1hf.png" ></img></Link>
              
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
