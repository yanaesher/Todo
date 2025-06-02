export function createShell() {
  const shell = document.createElement("div");
  shell.id = "shell";

  const content = document.createElement("main");
  content.id = "shell-content";
  content.className = "container";

  shell.append(content);

  return shell;
}
