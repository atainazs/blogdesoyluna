// Seleção das páginas e cartões de clique
const pageHome = document.getElementById('page-home');
const pageKarol = document.getElementById('page-karol');
const pageRuggero = document.getElementById('page-ruggero');

const btnKarol = document.getElementById('btn-karol');
const btnRuggero = document.getElementById('btn-ruggero');

// Evento para abrir a página da Karol Sevilla com animação de transição
btnKarol.addEventListener('click', () => {
    pageHome.classList.remove('active');
    setTimeout(() => {
        pageHome.style.display = 'none';
        pageKarol.style.display = 'block';
        pageKarol.classList.add('active');
        window.scrollTo(0, 0);
    }, 200);
});

// Evento para abrir a página do Ruggero Pasquarelli com animação de transição
btnRuggero.addEventListener('click', () => {
    pageHome.classList.remove('active');
    setTimeout(() => {
        pageHome.style.display = 'none';
        pageRuggero.style.display = 'block';
        pageRuggero.classList.add('active');
        window.scrollTo(0, 0);
    }, 200);
});

// Função para voltar para a página inicial
function goHome() {
    pageKarol.classList.remove('active');
    pageRuggero.classList.remove('active');
    
    setTimeout(() => {
        pageKarol.style.display = 'none';
        pageRuggero.style.display = 'none';
        pageHome.style.display = 'block';
        pageHome.classList.add('active');
        window.scrollTo(0, 0);
    }, 200);
}

// Animação interativa ao clicar nos botões de curtida/joinha/deslike
function animateButton(button) {
    button.classList.add('pop');
    
    // Remove a classe após o término da animação para permitir múltiplos cliques
    setTimeout(() => {
        button.classList.remove('pop');
    }, 300);
}