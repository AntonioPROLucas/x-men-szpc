// Verficar quando o cursor do mouse aponta para o boneco
const personagensId = document.querySelectorAll('.personagem');
personagensId.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');


        personagem.classList.add('selecionado');

        const imagemPersonaGrande = document.querySelector('.personagem-grande');


        const idPersonagem = personagem.attributes.id.value;
        imagemPersonaGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
