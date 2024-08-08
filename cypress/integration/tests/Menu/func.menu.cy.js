import BasePage from '../../../pages/BasePage.po';

describe('Teste de Navegação do Menu Principal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.scrollTo('top');
  });

  it('Deve navegar para a seção Colunas', () => {
    BasePage.navegarPara('O Agibank', 'Colunas');
    BasePage.verificarUrlInclui('/colunas');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'colunas_titulos', 2);
  });

  it('Deve navegar para a seção Notícias', () => {
    BasePage.navegarPara('O Agibank', 'Notícias');
    BasePage.verificarUrlInclui('/noticias');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'noticias_titulos', 2);
  });

  it('Deve navegar para a seção Carreira', () => {
    BasePage.navegarPara('O Agibank', 'Carreira');
    BasePage.verificarUrlInclui('/sua-carreira');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'carreira_titulos', 2);
  });

  it('Deve navegar para a seção Empréstimos', () => {
    BasePage.navegarPara('Produtos', 'Empréstimos');
    BasePage.verificarUrlInclui('/emprestimos');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimos', 3);
  });

  it('Deve navegar para as opções da sessão de Empréstimos', () => {
    BasePage.navegarPara('Produtos', 'Empréstimos');
    BasePage.navegarPara('Empréstimos', 'Empréstimo Consignado');
    BasePage.verificarUrlInclui('/emprestimo-consignado');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_consignado', 3);
    
    cy.visit('/');
    cy.scrollTo('top');
    BasePage.navegarPara('Produtos', 'Empréstimos');
    BasePage.navegarPara('Empréstimos', 'Empréstimo Pessoal');
    BasePage.verificarUrlInclui('/emprestimo-pessoal');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_pessoal', 3);
    
    cy.visit('/');
    cy.scrollTo('top');
    BasePage.navegarPara('Produtos', 'Empréstimos');
    BasePage.navegarPara('Empréstimos', 'Empréstimo na Conta de Luz');
    BasePage.verificarUrlInclui('/emprestimo-na-conta-de-luz');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_emprestimo_conta_luz', 3);
  });

  it('Deve navegar para a seção Conta Corrente', () => {
    BasePage.navegarPara('Produtos', 'Conta Corrente');
    BasePage.verificarUrlInclui('/conta-corrente');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_conta_corrente', 3);
  });

  it('Deve navegar para a seção Cartões', () => {
    BasePage.navegarPara('Produtos', 'Cartões');
    BasePage.verificarUrlInclui('/cartoes');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_cartoes', 3);
  });

  it('Deve navegar para a seção Seguros', () => {
    BasePage.navegarPara('Produtos', 'Seguros');
    BasePage.verificarUrlInclui('/seguros');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_seguros', 3);
  });

  it('Deve navegar para a seção INSS', () => {
    BasePage.navegarPara('Produtos', 'INSS');
    BasePage.verificarUrlInclui('/inss');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_inss', 3);
  });

  it('Deve navegar para a seção Consórcios', () => {
    BasePage.navegarPara('Produtos', 'Consórcios');
    BasePage.verificarUrlInclui('/consorcios');
    BasePage.extrairETerSalvarTitulos('.entry-title a', 'titulos_consorcios', 3);
  });

});
