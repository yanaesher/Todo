function loadPage(state, pageFunc) {
  const appRoot = document.getElementById("app-root");
  appRoot.innerHTML = "";
  const page = pageFunc(state);
  appRoot.append(page);
}
