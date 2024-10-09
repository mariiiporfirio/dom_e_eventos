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
document.addEventListener("DOMContentLoaded", () => {
    const descricao = document.getElementsByClassName("descricao")[0];
    
    descricao.style.display = "none";
    
    productC.addEventListener("click", (event) => {
        event.preventDefault();
        descricao.style.display = descricao.style.display === "none" ? "block" : "none";
    });
});
