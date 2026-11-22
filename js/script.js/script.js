
// 1. CONFIGURAÇÕES INICIAIS
let tamanhoFonte = Number(localStorage.getItem("tamanhoFonte")) || 16;

const tamanhoMinimo = 12;
const tamanhoMaximo = 24;

// 2. SELECIONANDO OS CONTROLES
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const altoContraste = document.getElementById("alto-contraste");
const reduzirAnimacoes = document.getElementById("reduzir-animacoes");
const restaurar = document.getElementById("restaurar");


// 3. RECUPERANDO AS PREFERÊNCIAS SALVAS
const contrasteSalvo = localStorage.getItem("altoContraste") === "true";

document.documentElement.style.fontSize = tamanhoFonte + "px";

if (contrasteSalvo) {
    document.body.classList.add("alto-contraste");
    altoContraste.setAttribute("aria-pressed", "true");
}

const animacoesSalvas = localStorage.getItem("reduzirAnimacoes") === "true";

if (animacoesSalvas) {
    document.body.classList.add("reduzir-animacoes");
    reduzirAnimacoes.setAttribute("aria-pressed", "true");
}

// 4. AUMENTAR A FONTE
aumentarFonte.addEventListener("click", function() {
    if (tamanhoFonte < tamanhoMaximo) {
        tamanhoFonte += 2;

        document.documentElement.style.fontSize = tamanhoFonte + "px";

        localStorage.setItem("tamanhoFonte", tamanhoFonte);
    }
});

// 5. DIMINUIR A FONTE
diminuirFonte.addEventListener("click", function() {
    if (tamanhoFonte > tamanhoMinimo) {
        tamanhoFonte -= 2;

        document.documentElement.style.fontSize = tamanhoFonte + "px";

        localStorage.setItem("tamanhoFonte", tamanhoFonte);
    }
});

// 6. ALTO CONTRASTE
altoContraste.addEventListener("click", function() {
    document.body.classList.toggle("alto-contraste");

    const ativado = document.body.classList.contains("alto-contraste");

    altoContraste.setAttribute("aria-pressed", ativado);

    localStorage.setItem("altoContraste", ativado);
});

// 7. REDUZIR ANIMAÇÕES
reduzirAnimacoes.addEventListener("click", function() {
    document.body.classList.toggle("reduzir-animacoes");

    const ativado = document.body.classList.contains("reduzir-animacoes");

    reduzirAnimacoes.setAttribute("aria-pressed", ativado);

    localStorage.setItem("reduzirAnimacoes", ativado);
});

// 8. RESTAURAR CONFIGURAÇÕES
restaurar.addEventListener("click", function() {
    tamanhoFonte = 16;

    document.documentElement.style.fontSize = "16px";

    document.body.classList.remove("alto-contraste");

    altoContraste.setAttribute("aria-pressed", "false");

    localStorage.removeItem("tamanhoFonte");
    localStorage.removeItem("altoContraste");

    document.body.classList.remove("reduzir-animacoes");

    reduzirAnimacoes.setAttribute("aria-pressed", "false");

    localStorage.removeItem("reduzirAnimacoes");
});
