const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const avatar = document.querySelector("#avatar");
const password = document.querySelector("#user_password");

//
firstName.focus();
//muestro los errores
const ulErrores = document.querySelector("div.errores ul");

//seleciono el formulario
const form = document.querySelector("form.reservation");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //array vacion para guardar los errores
  let errores = [];
  //condiciones nombre
  if (firstName.value == "") {
    errores.push("El campo del nombre tiene que estar completo");
  } else if (firstName.value.length < 2) {
    errores.push("El campo debe tener al menos 2 caracteres");
  }
  //condiciones de apellido
  if (lastName.value == "") {
    errores.push("El campo del apellido tiene que estar completo");
  } else if (lastName.value.length < 2) {
    errores.push("El campo debe tener al menos 2 caracteres");
  }
  //condicion de email
  if (email.value == "") {
    errores.push("El campo de mail tiene que estar completo");
  } else if (
    email.value !=
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  ) {
    errores.push("El mail tiene que ser valido");
  }
  //condiciones de contra
  if (password.value == "") {
    errores.push("El campo del contraseña tiene que estar completo");
  } else if (password.value.length < 8) {
    errores.push("El campo contraseña debe tener al menos 8 caracteres");
  }
  //falta que la contrase;a tenga letras minsuculas may etc
  //condicion img
  //if (avatar.value != "JPG, JPEG, PNG, GIF") {
  // errores.push("El archivo tine que ser JPG, JPEG, PNG, GIF");
  //}
  //muestre los errores por un listado
  if (errores.length > 0) {
    e.preventDefault();

    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
