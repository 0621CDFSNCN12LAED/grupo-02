import React from "react";
import ListUsers from "./ListUsers";

class EmpleadoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: "" };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data.data.avatar });
      });
  }

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

export default EmpleadoApp;
