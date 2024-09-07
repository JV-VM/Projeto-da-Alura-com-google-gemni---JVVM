function pesquisar(){
    let section = document.getElementById("resultado-da-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    let resultados = "";
    for(let pagina of paginas){
        if(pagina.titulo.includes(campoPesquisa)){
            resultados += `
                <div class="regiao-resultado">
                <h2 class="texto-comum"
                    <a>${pagina.titulo}</a>
                </h2>
                <p class="texto-comum">
                    ${pagina.descricao}
                </p>
                <a href="${pagina.link}">Mais informações</a>
                </div>
            `
        }
    }
    section.innerHTML = resultados;

}
