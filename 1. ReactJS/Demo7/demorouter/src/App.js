import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AccountPage from "./Pages/AccountPage";
import VTI from "./Pages/VTI";

function App() {
  return (
    <div class="container">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div class="navbar-header">
            <li>
              <Link to={"/VTI"}>VTI Academy</Link>
            </li>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/account"}>Account Management</Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/VTI" element={<VTI />} />
      </Routes>
    </div>
  );
}

export default App;
