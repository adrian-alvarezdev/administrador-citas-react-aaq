import React, {Fragment, useState} from "react";
import {v4 as uuidv4} from "uuid";

const Formulario = ({crearCita}) => {
  // CREAR EL STATE PARA Citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // CREAMOS UN STATE PARA MOSTRAR EL MENSAJE DE ERROR

  const [error, actualizarError] = useState(false);

  // FUNCION QUE SE EJECUCA CADA QUE EL USUARUI ESCRIBE EN EL CAMPO

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
 
  //EXTRAEMOS LOS VALORES DE Citas

  const {mascota, propietario, fecha, hora, sintomas} = cita;

  // CUANDO ES USUARIO PRECIONA EL BOTON AGREGAR CITAS

  const submitCita = (e) => {
    e.preventDefault();

    // VALIDAR FORMULARIO
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    // ELIMINAR EL MENSAJE PREVIO
    actualizarError(false);

    // AGREGAR UN ID A LA CITA

    cita.id = uuidv4();

    // CREAR LA CITAS

    crearCita(cita);

    // REINICIAR EL Formulario
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (

    <Fragment>
      <h2>Crear Citas</h2>

      {error ? (
        <p className="alerta-error"> TODOS LOS CAMPOS SON OBLIGATORIOS </p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>NOMBRE DE LA MASCOTA</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="NOMBRE DE LA MASCOTA"
          onChange={actualizarState}
          value={mascota}
        />

        <label>NOMBRE DEL DUEñO</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="NOMBRE DEL PROPIETARIO "
          onChange={actualizarState}
          value={propietario}
        />

        <label>FECHA</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>HORA DE ALTA</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>SINTOMAS</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          AGREGAR CITA
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
