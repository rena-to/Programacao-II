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
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add("active");

    list.style.setProperty("--calculation", -1);
};

nextButton.onclick = () => {
    active = active - 1 < firstPosition ? 0 : active - 1;
    setSlider();
    items[active].classList.add("active");

    list.style.setProperty("--calculation", 1);
};

function setSlider() {
    // Remover a classe 'active' do item anterior
    let itemOld = container.querySelector(".list .item.active");
    if (itemOld) {
        itemOld.classList.remove("active");
    }

    // Remover a classe 'active' do ponto anterior
    let dotsOld = indicator.querySelector("ul li.active");
    if (dotsOld) {
        dotsOld.classList.remove("active");
    }

    // Adicionar a classe 'active' ao item atual e ao ponto atual
    dots[active].classList.add("active");

    // Atualizar o número da imagem atual no indicador
    indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}
