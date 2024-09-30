import React from 'react';

const Sobre = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sobre</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Informações do Projeto</h5>
          <pre className="bg-light p-3 border rounded">
            Estudante: Matheus Augusto Daminelli<br />
            Projeto:PokeDexAPI<br />
            Mais a fundo: O projeto foi feito utilizando React com Vite, Axios e Bootstrap, onde utilizo a api gratuita para fazer requisições de pokemons<br />
            e exibir na tela, com informações como nome, altura, peso, tipos e habilidades. Meus pokemons exibidos em tela sao em ordem aleatoria por um<br />
            get na api com 50 sendo pegos a cada vez que a pagina é recarregada, e ao clicar em um pokemon, ele exibe mais informações sobre o mesmo.<br />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
