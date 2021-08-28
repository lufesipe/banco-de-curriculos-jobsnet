import React from "react";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DescriptionHeader from "./components/DescriptionHeader/DescriptionHeader";

import recruitment from "./images/recruitment.jpg";
import logo from "./images/logo.png";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo JobsNET" />
        <Navbar />
      </header>
      <div className="main-container">
        <aside className="left-container">
          <DescriptionHeader />
          <img src={recruitment} alt="Ilustração curriculos" />
          {/* <a href="https://br.freepik.com/vetores/pessoas">Pessoas vetor criado por freepik - br.freepik.com</a> */}
        </aside>
        <main className="right-container">
          <section className="form-container">
            <Form />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
