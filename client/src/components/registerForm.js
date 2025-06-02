export const registerForm = () => {
  const form = document.createElement("form");

  form.className = "form";
  form.method = "post";
  form.action = "/users";
  form.innerHTML = String.raw`
  <input class="input" type="text" placeholder="Your name">
  <input class="input" type="password" placeholder="Your password">
  <input class="input" type="password" placeholder="Repeat your password again">
  <button class="btn" type="submit">Register</button>
  `;
  return form;
};
