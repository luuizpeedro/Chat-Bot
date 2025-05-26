// Exibir hora e data em tempo real
function atualizarHora() {
  const currentTime = new Date();
  const hora = currentTime.toLocaleTimeString();
  document.getElementById("current-time").textContent = hora;
}
setInterval(atualizarHora, 1000);

// Mensagens de boas-vindas
window.onload = () => {
  const chatBox = document.getElementById("chat-box");
  const boasVindas = `
  Bem-vindo ao sistema!
  -----------------------
  Sistema operacional: Terminal Hack
  Usuário: root
  Computador: hacker-pc
  Pressione ENTER para começar.
  `;
  chatBox.textContent = boasVindas;
  chatBox.scrollTop = chatBox.scrollHeight; // Rola até o final da tela
};

// Função para exibir as mensagens no chat (com efeito de terminal)
function exibirMensagem(mensagem, tipo) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.classList.add("message", tipo);
  div.textContent = mensagem;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para o final
}

// Função para enviar a mensagem do usuário
async function enviarMensagem() {
  const userInput = document.getElementById("user-input");
  const mensagem = userInput.value.trim();

  if (mensagem) {
    // Exibe a mensagem do usuário
    exibirMensagem(`user@hacker:~$ ${mensagem}`, "user");
    userInput.value = ""; // Limpa o campo de entrada

    // Simula a resposta do bot
    exibirMensagem("... Digite algo mais...", "bot");
    setTimeout(() => {
      exibirMensagem('Resposta simulada: "Comando reconhecido!"', "bot");
    }, 1500); // Tempo de "digitação" para o efeito
  }
}

// Captura o "Enter" ou o clique do botão para enviar a mensagem
document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      enviarMensagem();
    }
  });
