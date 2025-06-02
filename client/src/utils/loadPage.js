export function loadPage(pageFunc, state) {
  const content = document.getElementById("shell-content");
  content.innerHTML = "";
  const page = pageFunc(state);
  content.append(page);
}
