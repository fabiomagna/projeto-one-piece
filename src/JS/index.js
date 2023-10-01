/* Ao clicar no botão da lista de personagens marcar ele como selecionado e mostrar o personagem correspondente 
Primeiro deverão ser selecionados todos os botões, através do querySelectorAll
Em seguida devemos remover a classe selecionado do botão previamente selecionado
Assim o próximo a ser selecionado receberá a classe selecionado*/
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    desslecionarBotao();
    desselecionarPersoangem();

    botao.classList.add("selecionado");
    personagens[index].classList.add("selecionado");
  });
});

function desselecionarPersoangem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desslecionarBotao() {
  const botaoSelecioando = document.querySelector(".botao.selecionado");
  botaoSelecioando.classList.remove("selecionado");
}
