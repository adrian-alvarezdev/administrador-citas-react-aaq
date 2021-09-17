import React from "react";

const Cita = ({cita, eliminarCita}) => (
  <div className="cita">
    <p>
      MASCOTA: <span>{cita.mascota}</span>
    </p>
    <p>
      PROPIETARIO: <span>{cita.propietario}</span>
    </p>
    <p>
      FECHA: <span>{cita.fecha}</span>
    </p>
    <p>
      HORA: <span>{cita.hora}</span>
    </p>
    <p>
      SINTOMAS: <span>{cita.sintomas}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      ELIMINAR CITA &times;
    </button>
  </div>
);

export default Cita;
