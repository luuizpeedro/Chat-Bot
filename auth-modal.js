const params = new URLSearchParams(window.location.search);
let mode = params.get("mode") || "login";

const modalTitle = document.getElementById("modalTitle");
const submitBtn = document.getElementById("submitBtn");
const toggleText = document.getElementById("toggleText");
const authForm = document.getElementById("authForm");

function updateUI() {
  if (mode === "register") {
    modalTitle.textContent = "Registrar";
    authForm.innerHTML = `
    <input type="text" placeholder="Nome completo" required autocomplete="name" />
    <input type="email" placeholder="Email" required autocomplete="email" />
    <input type="password" placeholder="Senha" required autocomplete="new-password" />
    <button type="submit" id="submitBtn">Registrar</button>
  `;
    toggleText.innerHTML =
      'Já tem uma conta? <a href="#" id="toggleLink">Entrar</a>';
  } else {
    modalTitle.textContent = "Login";
    authForm.innerHTML = `
    <input type="email" placeholder="Email" required autocomplete="email" />
    <input type="password" placeholder="Senha" required autocomplete="current-password" />
    <button type="submit" id="submitBtn">Entrar</button>
  `;
    toggleText.innerHTML =
      'Não tem uma conta? <a href="#" id="toggleLink">Registre-se</a>';
  }

  // Re-bind do toggle
  document.getElementById("toggleLink").addEventListener("click", (e) => {
    e.preventDefault();
    mode = mode === "login" ? "register" : "login";
    updateUI();
  });
}

updateUI();

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(mode === "login" ? "Tentando logar..." : "Tentando registrar...");
});
