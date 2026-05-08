function iniciarMissao() {
    alert("🚀 Preparar motores... 3, 2, 1... Lançamento autorizado!");
}
const titulo = document.querySelector('h1');

titulo.addEventListener('click', function() {
    titulo.style.color = '#ff00ff'; 
    titulo.innerText = "EXPLORAÇÃO INICIADA";
});
const botao = document.getElementById('btn-alerta');

botao.addEventListener('click', () => {
    const resposta = confirm("Você tem certeza que quer se aproximar de um buraco negro?");
    if (resposta) {
        alert("Cuidado com a espaguetificação! 🍝");
    } else {
        alert("Decisão sábia, capitão.");
}});
/*const listaDePlanetas = [
    { nome: "Kepler-452b", temperatura: 22 },
    { nome: "Mustafar", temperatura: 800 },
    { nome: "Proxima Centauri b", temperatura: 15 },
    { nome: "Hoth", temperatura: -60 },
    { nome: "Gliese 667 Cc", temperatura: 28 }
];

const planetasHabitaveis = document.getElementById('planetas-habitaveis');


//TENHO QUE TREINAR MAIS ISSO AQUI MAIS TAMO INDO
for (let i = 0; i < listaDePlanetas.length; i++) {
    let tempAtual = listaDePlanetas[i].temperatura;
        if (tempAtual >= 0  && tempAtual <= 30) {
            planetasHabitaveis.innerHTML += `<li class="planeta-habitavel">O planeta ${listaDePlanetas[i].nome} foi aprovado para colonização!</li>`;
        }
            if (tempAtual < 0) {
            planetasHabitaveis.innerHTML += `<li class="planeta-hostil">O planeta ${listaDePlanetas[i].nome} é hostil. Ignorando...</li>`;
        }
};*/
const candidatos = [
    { nome: "Ana", especialidade: "Piloto", experiencia: 6 },
    { nome: "Beto", especialidade: "Médico", experiencia: 2 },
    { nome: "Carlos", especialidade: "Engenheiro", experiencia: 4 },
    { nome: "Diana", especialidade: "Piloto", experiencia: 3 },
    { nome: "Elena", especialidade: "Médico", experiencia: 10 }
];

const btnRecrutas = document.getElementById('btn-recrutas');
const listaDeRecrutamento = document.getElementById('Lista-de-recrutamento');

let memoriadaNave = localStorage.getItem('memoriaNave')

    if (memoriadaNave) {
        listaDeRecrutamento.innerHTML = memoriadaNave;
    }
function recrutarTripulacao() {
    recrutarDeRecrutamento.innerHTML = "";
        for (let i = 0; i < candidatos.length; i++) {
            let tempExp = candidatos[i].experiencia;
                if (tempExp >= 5 || (candidatos[i].especialidade === "Médico")) {
                    listaDeRecrutamento.innerHTML += `<li class="canditado-qualificado">O candidato ${candidatos[i].nome} é qualificado para a missão!</li>`;
                }    else  {
                            listaDeRecrutamento.innerHTML += `<li class="candidato-desclassificado">O candidato ${candidatos[i].nome} é inexperiente. Ignorando...</li>`;
                        }
                    }               
                }
btnRecrutas.addEventListener('click', recrutarTripulacao);

const telaNasa = document.getElementById('conteudo-nasa');

async function conectarComNASA() {
    telaNasa.innerHTML = "<p>⏳ Hackeando satélites da NASA...</p>";
    
    try {
        let respostaNasa = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        let dados = await respostaNasa.json();
        
        // A MÁGICA NOVA ESTÁ AQUI: O JavaScript decide se é vídeo ou foto!
        let midiaHTML = "";
        
        if (dados.media_type === "video") {
            // Se for vídeo, criamos um iframe (player de vídeo)
            midiaHTML = `<iframe src="${dados.url}" width="100%" height="300" style="border-radius: 10px; margin-bottom: 15px; border: none;" allowfullscreen></iframe>`;
        } else {
            // Se for imagem, criamos a tag img normal
            midiaHTML = `<img src="${dados.url}" alt="Foto da NASA" style="max-width: 100%; border-radius: 10px; margin-bottom: 15px;">`;
        }
        
        // Injetando tudo na tela
        telaNasa.innerHTML = `
            <h4 style="color: #00d4ff;">${dados.title}</h4>
            ${midiaHTML}
            <p style="font-size: 0.9rem; color: #ccc;">${dados.explanation}</p>
        `;
        
    } catch (erro) {
        telaNasa.innerHTML = `<p style="color: red;">❌ Erro de comunicação com a base: O sinal foi perdido ou o limite da DEMO_KEY foi atingido. Tente de novo em 1 hora.</p>`;
        console.log("O erro foi:", erro);
    }
}

conectarComNASA();
