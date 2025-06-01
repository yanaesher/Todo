export function loadPage(pageFunc, state) {
  const appRoot = document.getElementById("app-root");
  appRoot.innerHTML = "";
  const page = pageFunc(state);
  appRoot.append(page);
}
