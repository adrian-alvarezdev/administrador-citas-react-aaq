import React, {Fragment, useState, useEffect} from "react";
import Formulario from "./componentes/Formulario";
import Cita from "./componentes/Cita";

function App() {
  // CITAS EN LOCAL STORAGE

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }
  // ARREGLO DE Citas

  const [citas, guardarCitas] = useState(citasIniciales);

  // usseEffect para realizar ciertas operaciones  cuandoes state cambia

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // FUNCION QUE TOME LAS CITAS ACTUALES Y AGREGE LAS NUEVAS

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //FUNCION QUE ELIMINA UNA CITA POR SU ID

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //  MENSAJE CONDICIONAL

  const titulo =
    citas.length === 0
      ? "NO HAY CITAS, AGREGALAS AQUI "
      : "ADMINISTRA TUS CITAS";

  return (
    <Fragment>
      <h1>ADMINISTRADOR DE CITAS</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
