const email = document.querySelector("#email");
const password = document.querySelector("#user_password");

console.log("andando");

email.focus();

const form = document.querySelector("form.formu");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const errores = [];
  //condicon para mail
  if (email.value == "") {
    errores.push("Complete el email");
  }
  //debe ser valido
  //debe existir en la base datos
  //condicion para password
  if (password.value == "") {
    errores.push("Complete la contraseña");
  }
  //muestro los errores
  const ulErrores = document.querySelector("div.errores ul");

  if (errores.length > 0) {
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  }
});
