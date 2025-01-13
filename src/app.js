/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.addEventListener("load", myfunction);
document.getElementById("boton").addEventListener("click", myfunction);
function myfunction() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"]; //aquí uso 'let'para agregar el sujeto de la excusa
  let action = ["ate", "peed", "crushed", "broke"]; // aquí esta la acción
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ]; // de aqui para atrás es solo establecer la variable

  //aquí abajo uso las propiedades para que me de un indice aleatorio con las variables anteriormente mencionadas
  let whoN = Math.floor(Math.random() * who.length);
  let actionN = Math.floor(Math.random() * action.length);
  let whatN = Math.floor(Math.random() * what.length);
  let whenN = Math.floor(Math.random() * when.length);

  document.getElementById("Excuse").innerHTML =
    who[whoN] + " " + action[actionN] + " " + what[whatN] + " " + when[whenN];
}
