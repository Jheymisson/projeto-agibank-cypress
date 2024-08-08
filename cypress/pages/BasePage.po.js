class BasePage {
    navegarPara(secao, subseccao) {
      cy.get('nav').contains(secao).trigger('mouseover', { force: true });
      cy.wait(500);
      cy.get('a span.menu-text').contains(subseccao).click({ force: true });
    }
  
    verificarUrlInclui(caminho) {
      cy.url().should('include', caminho);
    }
  
    extrairETerSalvarTitulos(seletor, nomeDoArquivo, rolagens = 1) {
      let titulos = [];
      function rolarEColetar(contagemDeRolagem) {
        if (contagemDeRolagem <= 0) {
          if (titulos.length === 0) {
            cy.log(`Nenhum título encontrado para o seletor: ${seletor}`);
            cy.writeFile(`cypress/fixtures/${nomeDoArquivo}.json`, { mensagem: "Nenhum título encontrado" });
          } else {
            cy.writeFile(`cypress/fixtures/${nomeDoArquivo}.json`, { titulos });
          }
          return;
        }
  
        cy.scrollTo('bottom');
        cy.wait(3000);
  
        cy.get('body').then(($body) => {
          if ($body.find(seletor).length > 0) {
            cy.get(seletor).each(($link) => {
              const titulo = $link.text().trim();
              if (!titulos.includes(titulo)) {
                titulos.push(titulo);
              }
            }).then(() => {
              rolarEColetar(contagemDeRolagem - 1);
            });
          } else {
            cy.log(`Nenhum elemento encontrado para o seletor: ${seletor}`);
            rolarEColetar(0);
          }
        });
      }
  
      rolarEColetar(rolagens);
    }
  }
  
  export default new BasePage();
  