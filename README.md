# dados-atletas
# GINÁSTICA ARTÍSTICA - DADOS DOS ATLETAS
O projeto em questão, foi desenvolvido com base na solicitação da Equipe Organizadora do Evento, que precisa fazer uma distinção dos paricipantes pelas informações coletadas e exibir a categoria, IMC, média calculada e demais informações.

# ESTRUTURA DO PROJETO 
O projeto é comsposto por três arquivos principais:

index.html: Estrutura da página web com botões que mostram os resultados;

dados.css: Estilização da página, com cores e layout responsivo;

dados.js: Lógica que recebe o nome, idade, peso, altura e notas, e em seguida faz o cálculo da categoria, IMC e médias, interpolação das variáveis e renderização no html.

# LÓGICA DE CLASSIFICAÇÃO
Cada atleta recebe cinco notas, de 1 a 10; A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota:

Exemplo:

Todas as notas: 10, 9.34, 8.42, 10, 7.88 > Para a média: 9.34, 8.42, 10.

# COMO EXECUTAR
Clone ou baixe os arquivos do projeto; Após isso, abra o index.html em um navegador e clique nos botões para exibir os resultados.

# TECNOLOGIAS UTILIZADAS
HTML5; 
CSS3; 
JavaScript(ES6).