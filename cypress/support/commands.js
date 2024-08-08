Cypress.Commands.add('extrairETerSalvarTitulos', (seletor, nomeDoArquivo, rolagens = 1) => {
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
});

Cypress.Commands.add('pesquisarPalavrasChaves', (palavrasChaves) => {
  palavrasChaves.forEach(palavra => {
    cy.visit('/');
    cy.scrollTo('top'); 

    cy.get('.ast-search-icon').click(); 
    cy.get('input[type="search"]').type(`${palavra}{enter}`);

    cy.get('body').then($body => {
      if ($body.text().includes('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')) {
        cy.log(`Nenhum resultado encontrado para a palavra-chave: ${palavra}`);
      } else {
        cy.log(`Resultados encontrados para a palavra-chave: ${palavra}`);
      }
    });
  });
});
