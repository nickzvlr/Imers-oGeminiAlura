function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada dado da lista de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    // Converte o título, descrição e tags para minúsculas para facilitar a comparação
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento HTML para cada resultado que corresponder à pesquisa
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se nenhum resultado foi encontrado após todas as iterações
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
