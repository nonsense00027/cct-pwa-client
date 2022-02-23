import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/theme.css";
import Routing from "./components/routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/output.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [namePage, setNamePage] = useState("Home");
  let winPath = window.location.pathname;

  const getNamePage = () => {
    switch (winPath) {
      case "/":
        return "Home";
      case "/clinic":
        return "Clinic";
      case "/login":
        return "Login";
      default:
        return "Home";
    }
  };

  console.log(winPath);

  return (
    <div>
      <Header />
      {getNamePage()}
      <Footer />
    </div>
  );
}

export default App;
