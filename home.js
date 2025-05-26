const modal = document.getElementById("authModal");
const overlay = document.getElementById("modalOverlay");
const iframe = document.getElementById("authIframe");
const closeBtn = document.getElementById("closeModal");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");

function openModal(mode) {
  let url = "auth-modal.html";
  if (mode === "register") url += "?mode=register";
  iframe.src = url;
  overlay.style.display = "block";
  modal.style.display = "flex";

  // Animação entrada
  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);
}

function closeModal() {
  modal.style.opacity = "0";
  modal.style.transform = "translate(-50%, -50%) scale(0.9)";
  overlay.style.display = "none";
  setTimeout(() => {
    modal.style.display = "none";
    iframe.src = "";
  }, 300);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  openModal("login");
});

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  openModal("register");
});
