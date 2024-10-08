// Javascript DOM e Evento

// Exercício 1
document.addEventListener("DOMContentLoaded", () => {
    const mouseClique = document.querySelector("#productA");
    var contador = 0;
    mouseClique.addEventListener("mousedown", () => {
        contador++;
        contadorHtml.textContent = `Você pressionou o item Brigadeiro Tradicional ${contador} vezes.`;
    });
});

// Exercício 2
document.addEventListener("DOMContentLoaded", () => {
    const alerta = document.querySelector("#productB");
    alerta.addEventListener("click", () => {
        alert("Você selecionou o item Beijinho !");
    });
});

// Exercício 3
document.addEventListener("DOMContentLoaded", () => {
    const meuInput = document.querySelector("#meuInput");
    const erroMeuInput = document.querySelector("#erroMeuInput");
    const acertoMeuInput = document.querySelector("#acertoMeuInput");

    meuInput.addEventListener("input", () => {
        erroMeuInput.innerHTML = "";
        acertoMeuInput.innerHTML = "";
    });

    meuInput.addEventListener("blur", () => {
        if (meuInput.value.trim() === "") {
            erroMeuInput.innerHTML = "Por Favor, preencha este campo !";
        } else {
            acertoMeuInput.innerHTML = "Obrigado por preencher o campo";
        }
    })
});

// Exercício 4
const link = document.getElementById("item");
const mostrarDescricao = document.getElementsByClassName("descricao")[0];
 
    link.addEventListener("click", (event) => {
        event.preventDefault();
        if (mostrarDescricao.style.display === "none") {
            mostrarDescricao.style.display = "block";
        } else {
            mostrarDescricao.style.display = "none";
        }
    });
