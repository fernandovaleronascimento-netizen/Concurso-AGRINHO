// Selecionando os elementos do DOM
const botaoClique = document.getElementById('btn-clique');
const botaoCor = document.getElementById('btn-cor');
const elementoContador = document.getElementById('contador');

let cliques = 0;

// Função para o botão de clique (Contador)
botaoClique.addEventListener('click', () => {
    cliques++;
    elementoContador.textContent = cliques;
});

// Função para mudar a cor de fundo aleatoriamente
botaoCor.addEventListener('click', () => {
    // Gera três números aleatórios entre 0 e 255 para compor uma cor RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Aplica a nova cor ao estilo do body
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
