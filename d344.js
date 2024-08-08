document.addEventListener('DOMContentLoaded', (event) => {
  const botaoNao = document.getElementById('botaoNao');

  botaoNao.addEventListener('mouseover', () => {
      const larguraJanela = window.innerWidth;
      const alturaJanela = window.innerHeight;
      const novaPosicaoX = Math.floor(Math.random()*500)+1;
      const novaPosicaoY = Math.floor(Math.random()*100)+1;

      botaoNao.style.left = `${novaPosicaoX}px`;
      botaoNao.style.top = `${novaPosicaoY}px`;
  });
});
