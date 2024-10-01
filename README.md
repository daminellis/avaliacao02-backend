# PokeDex API
## Executando o projeto

1. Clone o repositório
2. Fique na raiz do projeto, esteja na mesma camada que o `docker-compose.yml`
3. Execute `docker-compose up` para iniciar a API.


### Descrição de rotas

1. Rota base: Nela possuem duas telas, a que aparece os pokemons sortidos e quando pesquisado ele mostrara os dados do pokemon pesquisado, caso clicado duas vezes em um pokemon, ele ira abrir os dados do pokemon (Vale a pena lembrar que fica um pouco lento com o docker)
2. /sobre: Mostra um sobre do meu projeto com algumas explicacoes 

### Alguns "problemas" que tive

1. Porque mantive as portas 4173 ao inves da 8080
Porque eu coloquei as portas 8080 no docker com o vite, mas quando eu tentava rodar o compose, mesmo tendo setado a 8080 no vite, ele abria na 4173, sendo assim, mantive por conta do vite, creio que ele e o maior causador disto. Porem o back ta rodando na 8080