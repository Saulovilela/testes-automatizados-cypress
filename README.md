# testes-automatizados-cypress
Para adicionar as dependencias do mesmo instale o node.js
em seguida no terminal: 
npm init --yes 
npm install -D cypress@7.7
npx cypress open

Para adicionar dependencias do xpath

No terminal executar comandos:
npm install cypress-xpath
npm run cypress open

dentro do arquivo support há outro arquivo json que deve-se colocar : cypress/support/index.js
require('cypress-xpath')
