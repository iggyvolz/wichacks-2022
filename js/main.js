import animals from "../Data/animals.js";
import Canvas from "./Canvas.js";
customElements.define("our-canvas", Canvas, {extends: "canvas"});
console.log({animals});