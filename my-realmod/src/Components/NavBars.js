import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link,  useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import SearchIcon from "@material-ui/icons/Search";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import "../style/style.css";
import { useStateValue, user} from "./stateProvider/StateProvider";


const NavBars = () => {
  const [{basket, user}] = useStateValue();
  
  console.log(basket);
  //console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container  className="text" >
          <Navbar.Brand>
            <a className="navbar-brand" href="/">
              <img
                src="https://res.cloudinary.com/academiageek1/image/upload/v1650402340/amazona/amazon_PNG11_r0xjdu.png"
                alt="amazon logo"
                width="90"
              />
            </a>
          </Navbar.Brand>

          <img
            src="https://res.cloudinary.com/academiageek1/image/upload/v1650565396/amazona/jbbygcm0rjiexlxeab2u.png"
            alt="geolocalizacion"
            width="20"
            height="29"
            padding="15"
          />

         <h6 text="danger">Enviar a Colombia</h6>
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>

       

          <div className="header__nav">
            <Link to="/order" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne" >Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
          </div>
         


          <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
           {/*          <ShoppingBasketIcon/> */}
<img src="https://res.cloudinary.com/academiageek1/image/upload/v1650422798/amazona/section-3_kbrrao.png"  alt=""   width="80"/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            {/* basket icon with number*/}


          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link className="hom" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link  className="add" to="/add">Add</Link>
            </Nav.Link>

            <Nav.Link>
              <Link  className="list" to="/list">List</Link>
            </Nav.Link>
           
          </Nav>

          <Nav.Link  className="logout"  onClick={handleLogout}>Logout</Nav.Link>
        </Container>
      </Navbar>

      <div>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/academiageek1/image/upload/v1650402562/amazona/sub-menu_stvayl.png"
          alt=""
        />
      </div>
    </div>
  );
};

<div>
  <img
    src="https://res.cloudinary.com/academiageek1/image/upload/v1650402313/amazona/footer_wa2sua.png"
    alt="footer Amazon"
  />
</div>;
export default NavBars;
