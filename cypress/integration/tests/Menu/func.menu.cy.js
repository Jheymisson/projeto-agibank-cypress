describe('Teste de Navegação do Menu Principal', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.scrollTo('top'); 
  });

  it('Deve navegar para a seção Colunas', () => {
    cy.get('nav').contains('O Agibank').trigger('mouseover');
    cy.wait(500); 
    cy.get('a span.menu-text').contains('Colunas').click({ force: true });
    cy.url().should('include', '/colunas');
    cy.extrairETerSalvarTitulos('.entry-title a', 'colunas_titulos', 2);
  });

  it('Deve navegar para a seção Notícias', () => {
    cy.get('nav').contains('O Agibank').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Notícias').click({ force: true });
    cy.url().should('include', '/noticias');
    cy.extrairETerSalvarTitulos('.entry-title a', 'noticias_titulos', 2);
  });

  it('Deve navegar para a seção Carreira', () => {
    cy.get('nav').contains('O Agibank').trigger('mouseover');
    cy.wait(500); 
    cy.get('a span.menu-text').contains('Carreira').click({ force: true });
    cy.url().should('include', '/sua-carreira'); 
    cy.extrairETerSalvarTitulos('.entry-title a', 'carreira_titulos', 2);
  });

  it('Deve navegar para a seção Empréstimos', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Empréstimos').click({ force: true });
    cy.url().should('include', '/emprestimos');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimos', 3);
  });

  it('Deve navegar para as opções da sessão de Empréstimos', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover', { force: true });
    cy.wait(500); 
    cy.get('a span.menu-text').contains('Empréstimos').trigger('mouseover', { force: true });

    cy.get('a span.menu-text').contains('Empréstimo Consignado').click({ force: true });
    cy.url().should('include', '/emprestimo-consignado');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_consignado', 3);
    
    cy.visit('/');
    cy.scrollTo('top');
    cy.get('nav').contains('Produtos').trigger('mouseover', { force: true });
    cy.wait(500);
    cy.get('a span.menu-text').contains('Empréstimos').trigger('mouseover', { force: true });

    cy.get('a span.menu-text').contains('Empréstimo Pessoal').click({ force: true });
    cy.url().should('include', '/emprestimo-pessoal');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_pessoal', 3);
    
    cy.visit('/');
    cy.scrollTo('top');
    cy.get('nav').contains('Produtos').trigger('mouseover', { force: true });
    cy.wait(500);
    cy.get('a span.menu-text').contains('Empréstimos').trigger('mouseover', { force: true });

    cy.get('a span.menu-text').contains('Empréstimo na Conta de Luz').click({ force: true });
    cy.url().should('include', '/emprestimo-na-conta-de-luz');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_conta_luz', 3);
  });

  it('Deve navegar para a seção Conta Corrente ', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Conta Corrente').click({ force: true });
    cy.url().should('include', '/conta-corrente');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_conta_corrente', 3);
  });

  it('Deve navegar para a seção Cartões', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Cartões').click({ force: true });
    cy.url().should('include', '/cartoes');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_cartoes', 3);
  });

  it('Deve navegar para a seção Seguros', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Seguros').click({ force: true });
    cy.url().should('include', '/seguros');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_seguros', 3);
  });

  it('Deve navegar para a seção INSS', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('INSS').click({ force: true });
    cy.url().should('include', '/inss');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_inss', 3);
  });

  it('Deve navegar para a seção Consórcios', () => {
    cy.get('nav').contains('Produtos').trigger('mouseover');
    cy.wait(500);
    cy.get('a span.menu-text').contains('Consórcios').click({ force: true });
    cy.url().should('include', '/consorcios');
    cy.extrairETerSalvarTitulos('.entry-title a', 'titulos_consorcios', 3);
  });

});
