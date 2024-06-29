/* added by me 6.2.24 / used to practice js into html*/

/* with this one im able to change the content of a title by clickin it */
function modifyTextContent() {
  let h1 = document.getElementById("title");

  if (h1.innerHTML === "TITLE 2") {
    h1.innerHTML = "TITLE";
    h1.style.background = "rgba(255, 0, 0, 0)";
    h1.style.color = "white";
  } else {
    h1.innerHTML = "TITLE 2";
    h1.style.background = "rgb(228, 235, 172)";
    h1.style.color = "black";
  }
  h1.style.borderRadius = "15px";
}
let titleAndPContainer = document.getElementById("title");
titleAndPContainer.addEventListener("click", modifyTextContent, false);

/* with this function i change the background using prompt and buttons */
function backgroundColor(arg) {
  let sectionBackground = document.getElementById("sectionBackground");
  if (arg === 0) {
    let selector = prompt("choose the color you like");
    sectionBackground.style.background = selector;
  } else if (arg === 1) {
    sectionBackground.style.background = "cyan";
  } else {
    sectionBackground.style.background = "rgb(51, 51, 51)";
  }
}

/* function to increase and decrease the size of a h1 */
let num = 35;
const title = document.getElementById("title");
function fontSize(arg) {
  ifT = arg === 0 ? num++ : num--;
  title.style.fontSize = `${num}px`;
}

/* used to hide and show content */
function HiddenOrVisible(arg) {
  const display = document.getElementById(arg);
  if (display.style.display === "none") {
    display.style.display = "inline-block";
  } else {
    display.style.display = "none";
  }
}

/* gallery that rotates images within an interval of time */
let indice = 0;

const galeriaImg = [];
galeriaImg.push(["https://www.facebook.com", "img/img1.jpg"]);
galeriaImg.push(["https://www.reddit.com", "img/img2.jpg"]);
galeriaImg.push(["https://www.youtube.com", "img/imgPNG.png"]);
const imgLink = document.getElementById("imgLink");
const img = document.getElementById("img");
imgLink.href = galeriaImg[indice][0];
img.src = galeriaImg[indice][1];

const galeriaImg1 = [];
galeriaImg1.push(["https://www.facebook.com", "img/img2.jpg"]);
galeriaImg1.push(["https://www.reddit.com", "img/imgPNG.png"]);
galeriaImg1.push(["https://www.youtube.com", "img/img1.jpg"]);
const imgLink1 = document.getElementById("imgLink1");
const img1 = document.getElementById("img1");
imgLink1.href = galeriaImg1[indice][0];
img1.src = galeriaImg1[indice][1];

const galeriaImg2 = [];
galeriaImg2.push(["https://www.facebook.com", "img/imgPNG.png"]);
galeriaImg2.push(["https://www.reddit.com", "img/img1.jpg"]);
galeriaImg2.push(["https://www.youtube.com", "img/img2.jpg"]);
const imgLink2 = document.getElementById("imgLink2");
const img2 = document.getElementById("img2");
imgLink2.href = galeriaImg2[indice][0];
img2.src = galeriaImg2[indice][1];

function gallery() {
  indice++;
  ifT = indice > 2 ? (indice = 0) : "";
  imgLink.href = galeriaImg[indice][0];
  img.src = galeriaImg[indice][1];

  imgLink1.href = galeriaImg1[indice][0];
  img1.src = galeriaImg1[indice][1];

  imgLink2.href = galeriaImg2[indice][0];
  img2.src = galeriaImg2[indice][1];
}
setInterval(gallery, 10000);

/* form validation */

let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
function validarDatos() {
  usuario.addEventListener("input", validarUsuario);
  clave.addEventListener("input", validarClave);
}
function validarUsuario() {
  if (usuario.value.length < 14) {
    usuario.setCustomValidity("ingresa tu email");
    usuario.style.background = "red";
  } else {
    usuario.setCustomValidity("");
    usuario.style.background = "green";
  }
}
function validarClave() {
  if (clave.value.length < 6) {
    clave.setCustomValidity("ingrese su clave");
    clave.style.background = "red";
  } else {
    clave.setCustomValidity("");
    clave.style.background = "green";
  }
}
window.addEventListener("load", validarDatos);

/* dark mode */
let numMode = 0;
let backgroundToggle = document.getElementById("sectionBackground");
let buttonAppearance = document.getElementById("toggleModeButton");
let buttonColor = document.getElementsByClassName("input");
function darkModeToggle() {
  if (numMode === 0) {
    backgroundToggle.style.background = "white";
    buttonAppearance.style.backgroundImage = "url(../img/night-mode.png)";
    document.querySelectorAll("*").forEach((element) => {
      element.style.color = "black";
    });
    numMode++;
  } else {
    backgroundToggle.style.background = "rgb(51, 51, 51)";
    buttonAppearance.style.backgroundImage = "url(../img/white-mode.png)";
    document.querySelectorAll("*").forEach((element) => {
      element.style.color = "";
    });
    numMode--;
  }
}
/* whenever i click on equals i want a variable to catch that last number and the use it on the next
ecuation */
const calculatorDisplay = document.getElementById("display");
function appendToDisplay(arg) {
  calculatorDisplay.value += arg;
}
function clearDisplay() {
  calculatorDisplay.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert(error);
    display.value = "Error";
  }
}
