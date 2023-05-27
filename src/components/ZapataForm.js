import React, { useState } from "react";
import swal from "sweetalert";


const ZapataForm = () => {
  const turnoPista = 4054;
  const promediodeturnosPorDia = 233;

  const calcularTurnosFaltantes = (turnoPersona, turnoPista) => {
    const result = turnoPersona - turnoPista;
    return result;
  };

  const sumarDias = (fecha, dias) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  };

  const [value, setvalue] = useState("");

  const handleInputChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const turnosFaltantes = calcularTurnosFaltantes(value, turnoPista);
    const diasParaHechar = turnosFaltantes / promediodeturnosPorDia;
    const redondeado = Math.round(diasParaHechar);

    var d = new Date();
    const diasFecha = sumarDias(d, redondeado);
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formatedDiasFecha = diasFecha.toLocaleDateString("es-es", opciones);
    if (value) {
      swal({
        title: `info`,
        text: `Te faltan ${turnosFaltantes} turnos por delante, te toca serviciar gasolina en ${redondeado} dias APROXIMADAMENTE, sobre la fecha ${formatedDiasFecha} `,
        icon: `success`,
        buttons: "Aceptar",
        timer: "10000",
      });
    }
  };

  return (
    <div id="1">
      <form onSubmit={handleSubmit}>
        <input
          className="inputzapata"
          type="number"
          name="tangana"
          value={value}
          onChange={handleInputChange}
          placeholder="escriba el # de su turno"
          autoComplete="off"
          
        />

        <button type="submit" className="btn btn-warning ml-4">
          Obtener datos
        </button>
      </form>
    </div>
  );
};

export default ZapataForm;
