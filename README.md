# Projeto de Automação de Testes com Cypress

Este projeto foi criado para automatizar os testes do site Blog do Agi utilizando Cypress. Ele inclui testes de navegação do menu principal, extração e salvamento de títulos de seções e pesquisas com palavras-chave.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
projeto-agibank-cypress/
│
├── cypress/
│ ├── fixtures/
│ ├── integration/
│ │ ├── tests/
│ │ │ ├── Menu/
│ │ │ │ └── func.menu.cy.js
│ │ │ ├── Pesquisa/
│ │ │ │ └── func.pesquisa.cy.js
│ ├── pages/
│ │ └── BasePage.po.js
│ ├── support/
│ │ └── commands.js
│ │ └── e2e.js
│ └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Dependências

Certifique-se de ter o Cypress instalado no seu projeto. Se não tiver, instale usando o comando:

```
npm install cypress --save-dev
```

## Configuração do Cypress

O arquivo cypress.config.js foi configurado com o baseUrl do site e o padrão de especificação dos testes.
```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/api/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/tests/**/*.cy.{js,jsx,ts,tsx}'
    ],
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {},
  },
});
```

## Comandos Customizados
No arquivo commands.js, definimos comandos customizados para realizar ações específicas como extração e salvamento de títulos e pesquisa com palavras-chave.

## Executando os Testes
Para executar os testes, use o seguinte comando:

```
npx cypress open
```

Isso abrirá a interface do Cypress onde você poderá selecionar e executar os testes criados.

## Conclusão
Este projeto de automação de testes com Cypress foi configurado para testar a navegação do menu principal do site Blog do Agi, extrair e salvar títulos de seções e realizar pesquisas com palavras-chave. O uso de comandos personalizados e a estrutura de Page Object garantem um código reutilizável e de fácil manutenção.
