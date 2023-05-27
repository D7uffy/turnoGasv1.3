import React, { useState } from "react";
import TanganaForm from "./TanganaForm";
import ZapataForm from "./ZapataForm";
import "./Style.css";
import logo from "../images/cupetTurnosLogo.png";

const FormCupet = () => {
  const [visible, setvisible] = useState(false);
  const [visible2, setvisible2] = useState(false);

  const muestraForm = () => {
    setvisible(!visible);
  };

  const muestraForm2 = () => {
    setvisible2(!visible2);
  };

  return (
    <div id="contenedorPadre">
      <div>
        {" "}
        <h1 id="texto">Elija un </h1>
        <img src={logo}  alt="TurnoCupet" width={60} height={60} />
      </div>

      <hr />

      <button className="btn btn-outline-danger ml-4" onClick={muestraForm}>
        Tangana
      </button>
      <hr />

      <div className="FormularioTangana" id="contenedorHijo">
        {" "}
        {visible ? <TanganaForm /> : null}
      </div>
      <hr />
      <button className="btn btn-outline-success ml-4" onClick={muestraForm2}>
        Zapata y 4
      </button>
      <hr />

      <div className="FormularioZapata" id="contenedorHijo">
        {visible2 ? <ZapataForm /> : null}
      </div>
      <hr />

      <footer class="seccion-final">
        <p class="seccion-final__p">2023 = By Pedrito</p>
      </footer>
    </div>
  );
};

export default FormCupet;
