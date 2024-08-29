export function ConceptsSection() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col gap-2">
        <ul className="list-inside list-disc">
          <li className="text-lg font-semibold">Componentes</li>
          <li className="text-lg font-semibold">JSX e TSX</li>
          <li className="text-lg font-semibold">Estado(state)</li>
          <li className="text-lg font-semibold">Propriedades(props)</li>
          <li className="text-lg font-semibold">Hooks</li>
          <li className="text-lg font-semibold">Side Effects</li>
          <li className="text-lg font-semibold">Virtual DOM</li>
          <li className="text-lg font-semibold">Keys</li>
          <li className="text-lg font-semibold">Context</li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col items-center gap-4">
        <h1 className="text-xl font-bold">Componentes</h1>
        <p>
          A base do React, componentes são blocos de construção reutilizáveis
          que podem ser funcionais ou de classe.
        </p>
        <p> Eles encapsulam a lógica e a UI de partes da aplicação.</p>
        <h1 className="text-xl font-bold">JSX e TSX</h1>
        <p>
          Uma extensão de sintaxe do JavaScript que permite escrever HTML dentro
          de arquivos JavaScript e TypeScript. JSX torna o código mais legível e
          expressivo, aproximando-se da estrutura de HTML.
        </p>
        <h1 className="text-xl font-bold">Estado(state)</h1>
        <p>
          Um objeto que armazena dados dinâmicos em um componente. O estado
          permite que o componente reaja a mudanças, como interações do usuário.
        </p>
        <h1 className="text-xl font-bold">Propriedades(props)</h1>
        <p>
          {' '}
          Dados passados de um componente pai para um filho, que permitem a
          customização e reutilização de componentes.
        </p>
        <h1 className="text-xl font-bold">Hooks</h1>
        <p>
          Funções que permitem usar estado e outras funcionalidades do React em
          componentes funcionais. Exemplos incluem useState, useEffect, e
          useContext.
        </p>
        <h1 className="text-xl font-bold">Side Effects</h1>
        <p>
          {' '}
          Ações como buscar dados, alterar o DOM, ou subscrever eventos que são
          realizadas fora do fluxo de renderização principal. O hook useEffect é
          usado para lidar com efeitos colaterais.
        </p>
        <h1 className="text-xl font-bold">Virtual DOM</h1>
        <p>
          Uma representação em memória do DOM real, que o React usa para
          otimizar atualizações, aplicando apenas as mudanças necessárias ao DOM
          real.
        </p>
        <h1 className="text-xl font-bold">Keys</h1>
        Identificadores únicos para elementos em uma lista, usados pelo React
        para otimizar a re-renderização de componentes.
        <h1 className="text-xl font-bold">Context</h1>
        <p>
          Um sistema que permite passar dados globais, como temas ou usuários
          autenticados, diretamente para componentes, sem precisar passar props
          manualmente em cada nível da árvore de componentes.
        </p>
      </div>
    </div>
  )
}
