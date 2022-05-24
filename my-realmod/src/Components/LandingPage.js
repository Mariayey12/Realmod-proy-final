/* eslint-disable react-hooks/exhaustive-deps */
import logo from '../image/Logo.png';
import '../style/App.css';
import { Link, useNavigate } from "react-router-dom";
import '../style/landingPage.css'
import { useEffect } from 'react';

const LandingPage =()=> {
  const navigate =  useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate.push("/home");
    }, 5000);
  }, []);
  return (
    
    <div className="App">
  

      <header className="App-header">
        <img src={logo} className="App-logo container-logo" alt="logo" />
        <li className="item_nav">
              <Link to="/login"> Ir a la App</Link>
            </li>
      </header>
      
    </div >
    
  );
}

export default LandingPage;
