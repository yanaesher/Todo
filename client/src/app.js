import { render } from "./utils/render.js";
import { subscribe } from "./store/store.js";

function loadApp() {
  render();
  subscribe(render);
}

window.addEventListener("DOMContentLoaded", loadApp);
