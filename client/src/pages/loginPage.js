import { loginForm } from "../components/loginForm.js";

export const renderLoginPage = () => {
  const container = document.createElement("div");
  container.className = "sign-in-wrapper";
  const form = loginForm();
  container.append(form);

  return container;
};
