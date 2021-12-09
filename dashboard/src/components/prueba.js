import React from "react";
import ListUsers from "./ListUsers";

class EmpleadoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    //ERROR CON EL FETCH
    fetch("http://localhost:3000/api/users")
      .then((response) => {
        response.json();
        console.log(response);
      })

      .then((data) => {
        this.setState({ users: data.data.email });
      });
    //.catch((e) => {
    //  console.log(e);
    // });
  }
  //prueba
  //render() {
  // let contenido;

  // if (this.state.users == "") {
  //   return (contenido = <p className="text-center">Cargando empleados...</p>);
  // } else {
  //   return (contenido = <p className="text-center">{this.state.users}</p>);
  // }
  //}

  render() {
    if (this.state.users.length > 0) {
      return (
        <div className="container-fluid">
          <ListUsers listado={this.state.users} />
        </div>
      );
    } else {
      return <p className="text-center">Cargando empleados...</p>;
    }
  }
}
//ERROR DE CONSOLA
//localhost /: 1

//El acceso para buscar en 'http: // localhost: 3000 / api / users' desde el origen 'http: // localhost: 3001' ha sido bloqueado por la política de CORS: No hay un encabezado 'Access-Control-Allow-Origin' presente en el recurso solicitado. Si una respuesta opaca satisface sus necesidades, configure el modo de la solicitud en 'no-cors' para obtener el recurso con CORS deshabilitado.

export default EmpleadoApp;
