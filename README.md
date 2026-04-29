Automação de Testes — SauceDemo (DESAFIO MUTANT)

Este projeto contém a automação de testes do site https://www.saucedemo.com/, utilizando Cypress.

O objetivo foi validar alguns fluxos principais da aplicação.

-------------------

· Os seguintes cenários foram cobertos:

Login com sucesso
Login com credenciais inválidas
Adição de produto ao carrinho
Logout do sistema

-------------------

· Tecnologias utilizadas:
JavaScript
Cypress
Node.js

-------------------

· Estrutura do Projeto:

<br>desafio_mutant
<br>cypress/
<br>├── e2e/
<br>│   ├── login.cy.js
<br>│   ├── login-invalid.cy.js
<br>│   ├── cart.cy.js
<br>│   └── logout.cy.js
<br>│
<br>├── fixtures/
<br>│   ├──example.json
<br>├── support/
<br>│   ├── commands.js
<br>│   └── e2e.js
<br>│
<br>cypress.config.js
<br>README.md
<br>.gitignore

-------------------


· Legenda da Estrutura do Projeto:

cypress/e2e/ → onde ficam os testes
fixtures/ → dados mockados (se necessário)
support/ → comandos customizados e configurações globais
cypress.config.js → configuração do Cypress


-------------------

· Como instalar o projeto >

<br>git clone <LINK_DO_REPOSITORIO> 
<br>cd <NOME_DO_PROJETO>


-------------------


· Instale as dependências:

npm install


-------------------


· Como executar os testes

<br>Modo interativo (interface do Cypress)
<br>npx cypress open

<br>Modo headless (terminal)
<br>npx cypress run


-------------------


· Evidências de execução:

O Cypress gera automaticamente evidências durante a execução:

Screenshots (em caso de falha)
Vídeos da execução

Esses arquivos ficam na pasta:

<br>cypress/screenshots/
<br>cypress/videos/


-------------------


· Observações:
Os testes foram escritos de forma simples e direta, priorizando legibilidade
Os cenários simulam o fluxo real do usuário dentro da aplicação
A estrutura segue o padrão recomendado pelo Cypress
