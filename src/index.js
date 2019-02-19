import "./styletest.css";
import { Controller } from "./controller.js";

let testInput = document.getElementById("test");

testInput.textContent = Controller(3);
