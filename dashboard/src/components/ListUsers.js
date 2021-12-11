import React, { Component } from "react";

const URL = "/api/users";
//http://localhost:3000/api/events

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  render() {
    if (!this.state.users) {
      return <p className="text-center">Cargando empleados...</p>;
    }

    return (
      <div className="lista_usuarios">
        {this.state.users.map((users) => {
          return (
            <p className="info_user">
              <p className="p_user">Usuario numero : {users.id}</p>
              <p className="p_user">nombre : {users.first_name}</p>
              <p className="p_user">apellido : {users.last_name}</p>
              <p className="p_user">email : {users.email}</p>
            </p>
          );
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
  }
}

export default ListUsers;
