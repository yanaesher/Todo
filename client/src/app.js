import { render } from "./utils/render.js";
import { subscribe } from "./store/store.js";
import { mountShell } from "./components/dom.js";

function loadApp() {
  mountShell();
  render();
  subscribe(render);
}

window.addEventListener("DOMContentLoaded", loadApp);
