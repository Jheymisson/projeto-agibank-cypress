/// <reference types="cypress" />

describe('Teste de Pesquisa com Palavras-Chaves', () => {

  const palavrasChaves = ['Pix', 'idoso', 'cartão', 'pessoas'];

  beforeEach(() => {
    cy.visit('/');
    cy.scrollTo('top'); 
  });

  it('Deve pesquisar palavras-chaves e verificar os resultados', () => {
    cy.pesquisarPalavrasChaves(palavrasChaves);
  });

});

