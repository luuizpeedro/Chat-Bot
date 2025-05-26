// Simulação de banco de dados de usuários
const users = [];

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const loginContainer = document.getElementById("login-container");
const terminalContainer = document.getElementById("terminal-container");
const welcomeMessage = document.createElement("div");
welcomeMessage.classList.add("welcome-message");

// Função para mostrar o terminal após login com animação
function showTerminal(username) {
  loginContainer.style.display = "none";
  terminalContainer.style.display = "flex";
  terminalContainer.classList.add("opening-animation");

  setTimeout(() => {
    // Adicionando a animação de boas-vindas
    welcomeMessage.innerText = `Bem-vindo, ${username}`;
    terminalContainer.appendChild(welcomeMessage);
  }, 1500); // Atraso de 1.5s para a animação abrir e depois aparecer a mensagem
}

// Função de login
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Login bem-sucedido!");
    showTerminal(username);
  } else {
    alert("Nome de usuário ou senha incorretos.");
  }
});

// Função de registro
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("new-username").value;
  const password = document.getElementById("new-password").value;

  // Simula o registro do usuário
  users.push({ username, password });

  alert("Registro bem-sucedido! Agora faça login.");
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// Alternar entre Login e Registro
registerLink.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

loginLink.addEventListener("click", function () {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
