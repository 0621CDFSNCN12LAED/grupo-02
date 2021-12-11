import React, { Component } from "react";

//const URL = "http://localhost:3000/api/users";
const URL = "/api/users";

class EmpleadoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  render() {
    if (!this.state.users) {
      return <p className="text-center">Cargando empleados...</p>;
    }

    return (
      <div className="container-fluid">
        {this.state.users.map((user) => {
          return <p>{user.first_name}</p>;
        })}
      </div>
    );
  }

  async componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    const result = await fetch(URL);
    const response = await result.json();
    const users = response.data;

    this.setState({ users: users });
    console.log(users);
  }
}

export default EmpleadoApp;
