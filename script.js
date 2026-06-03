// Banco de dados com as práticas do projeto "Agro Forte e Futuro Sustentável"
const praticasSustentaveis = [
    {
        titulo: "Rotação de Culturas",
        descricao: "Alternar diferentes espécies de plantas na mesma área agrícola. Melhora a saúde do solo, quebra o ciclo de pragas e reduz a necessidade de fertilizantes químicos."
    },
    {
        titulo: "Energia Solar no Campo",
        descricao: "Utilização de painéis fotovoltaicos para alimentar sistemas de irrigação e cercas elétricas, reduzindo custos e a pegada de carbono da propriedade rural."
    },
    {
        titulo: "Agricultura de Precisão",
        descricao: "Uso de drones, sensores e GPS para aplicar água, sementes e insumos no local exato e na quantidade estrita que a planta precisa, evitando desperdícios."
    },
    {
        titulo: "Plantio Direto",
        descricao: "Cultivar a terra sem aração prévia, mantendo os restos da colheita anterior sobre o solo. Protege a terra contra erosão e retém muito mais água."
    },
    {
        titulo: "Reuso de Água e Cisternas",
        descricao: "Captação da água da chuva e tratamento de efluentes da produção para reutilização na limpeza de instalações e irrigação de lavouras."
    }
];

let indiceAtual = 0;
let apoios = 0;

// Seleção de elementos do DOM
const elementoTitulo = document.getElementById('nome-pratica');
const elementoDescricao = document.getElementById('desc-pratica');
const botaoProximo = document.getElementById('btn-proxima-pratica');
const botaoApoio = document.getElementById('btn-apoio');
const elementoContador = document.getElementById('contador-apoio');

// Evento para rotacionar as práticas do projeto
botaoProximo.addEventListener('click', () => {
    // Avança para o próximo item do array de forma circular
    indiceAtual = (indiceAtual + 1) % praticasSustentaveis.length;

    // Efeito suave de transição (Fade Out)
    elementoTitulo.style.opacity = '0';
    elementoDescricao.style.opacity = '0';

    // Atualiza o texto e traz o conteúdo de volta (Fade In)
    setTimeout(() => {
        elementoTitulo.textContent = praticasSustentaveis[indiceAtual].titulo;
        elementoDescricao.textContent = praticasSustentaveis[indiceAtual].descricao;
        
        elementoTitulo.style.opacity = '1';
        elementoDescricao.style.opacity = '1';
    }, 200);
});

// Evento do botão de engajamento/apoio
botaoApoio.addEventListener('click', () => {
    apoios++;
    elementoContador.textContent = apoios;
});
