const filmes = [
    {
      titulo: "O Poderoso Chefão",
      imagem: "imagens/chefão.jpg"
    },
    {
      titulo: "Clube da Luta",
      imagem: "imagens/clube.jpg"
    },
    {
      titulo: "A Origem",
      imagem: "imagens/origem.jpg"
    },
    {
      titulo: "Matrix",
      imagem: "imagens/matrix.jpg"
    },
    {
      titulo: "Os Vingadores",
      imagem: "imagens/avengers.jpg"
    },
    {
      titulo: "Batman: O Cavaleiro das Trevas",
      imagem: "imagens/batman.jpg"
    },
    {
      titulo: "Forrest Gump",
      imagem: "imagens/gump.jpg"
    },
    {
      titulo: "Gladiador",
      imagem: "imagens/gladiator.jpg"
    },
    {
      titulo: "Django Livre",
      imagem: "imagens/django.jpg"
    },
    {   
      titulo: "O Senhor dos Anéis: O Retorno do Rei",
      imagem: "imagens/senhordosaneis.jpg"
    }, 
  ];
  
  const grid = document.getElementById('grid-filmes');
  
  function renderFilmes(lista) {
    grid.innerHTML = '';
    lista.forEach(filme => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h3>${filme.titulo}</h3>
      `;
  
      grid.appendChild(card);
    });
  }
  
  renderFilmes(filmes);
  
  document.getElementById('search').addEventListener('input', function () {
    const termo = this.value.toLowerCase();
    const filtrados = filmes.filter(f => f.titulo.toLowerCase().includes(termo));
    renderFilmes(filtrados);
  });
  
  document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
  });
  