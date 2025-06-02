import { createShell } from "./shell.js";

export function mountShell() {
  const appRoot = document.getElementById("app-root");
  const shell = createShell();
  appRoot.append(shell);
}
