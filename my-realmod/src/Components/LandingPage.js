import logo from '../image/Logo.png';
import '../style/App.css';
import { Link } from "react-router-dom";
import '../style/landingPage.css'
const LandingPage =()=> {
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
