let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let active = 0; 
let firstPosition = 0;
let lastPosition = items.length - 1;
let list = container.querySelector(".list");

prevButton.onclick = () => {
    // Atualiza o índice ativo: se for menor que o primeiro, volta ao último item
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    // Atualiza o slider (carro e indicador)
    setSlider();
    // Adiciona a classe 'active' ao item de carro que está agora visível
    items[active].classList.add("active");
  
    // Define o valor da propriedade CSS personalizada para animar o movimento do slider
    list.style.setProperty("--calculation", -1);
  };
  
  // Ação a ser executada quando o botão "next" (próximo) for clicado
  nextButton.onclick = () => {
    // Atualiza o índice ativo: se for maior que o último, volta ao primeiro item
    active = active + 1 > lastPosition ? firstPosition : active + 1;
    // Atualiza o slider (carro e indicador)
    setSlider();
    // Adiciona a classe 'active' ao item de carro que está agora visível
    items[active].classList.add("active");
  
    // Define o valor da propriedade CSS personalizada para animar o movimento do slider
    list.style.setProperty("--calculation", 1);
  };

function setSlider() {
  // Remove a classe 'active' do item de carro atualmente visível
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  // Remove a classe 'active' do indicador de progresso atual
  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");

  // Adiciona a classe 'active' no indicador correspondente ao novo carro ativo
  dots[active].classList.add("active");

  // Atualiza o texto do indicador numérico para refletir o carro atual
  let dot = document.getElementById("dot");
  dot.innerText = `0${active + 1}`;
}