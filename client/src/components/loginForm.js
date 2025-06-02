export const loginForm = () => {
  const form = document.createElement("form");
  form.class = "form";
  form.action = "users/sign_in";
  form.method = "post";

  form.innerHTML = String.raw`
<input class="input" type="text" placeholder="Username">
<input class="input" type="password" placeholder="Password">
`;

  return form;
};
