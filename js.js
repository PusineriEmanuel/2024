function iniciar() {
  a = document.getElementById("nombre");
  b = document.getElementById("apellido");
  c = document.getElementById("email");
  d = document.getElementById("fecha_de_nacimiento");

  a.addEventListener("input", validacion, false);
  b.addEventListener("input", validacion, false);
  c.addEventListener("input", validacion, false);
  d.addEventListener("input", validacion, false);
  /* ver codigo de arriba, porque poner el listener a cada variable 
video en min 49 aprox*/
  validacion();
}

function validacion() {
  if (a.value == "") {
    a.setCustomValidity("ingrese su nombre porfavor");
    a.style.background = "#f7b69e";
  } else {
    a.setCustomValidity("");
    a.style.background = "white";
  }

  if (b.value == "") {
    b.setCustomValidity("ingrese su apellido porfavor");
    b.style.background = "#f7b69e";
  } else {
    b.setCustomValidity("");
    b.style.background = "white";
  }

  if (c.value == "") {
    c.setCustomValidity("ingrese su email porfavor");
    c.style.background = "#f7b69e";
  } else {
    c.setCustomValidity("");
    c.style.background = "white";
  }

  if (d.value == "") {
    d.setCustomValidity("ingrese su fecha de nacimiento porfavor");
    d.style.background = "#f7b69e";
  } else {
    d.setCustomValidity("");
    d.style.background = "white";
  }
}

window.addEventListener("load", iniciar, false);

let elemento1 = document.getElementById("caja");

/* elemento1.innerHTML=`<h1>Bienvenido ${elemento1} </h1>` */
