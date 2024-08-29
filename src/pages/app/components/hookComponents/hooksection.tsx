import { CardInfo } from '@/components/cardInfo'
import { Separator } from '@/components/ui/separator'

export function HookSection() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col gap-2">
        <ul className="list-inside list-disc">
          <li className="text-lg font-semibold">Introdução</li>
          <li className="text-lg font-semibold">UseState</li>
          <li className="text-lg font-semibold">UseEffect</li>
          <li className="text-lg font-semibold">UseContext</li>
          <li className="text-lg font-semibold">React Router DOM</li>
          <li className="text-lg font-semibold">React Hook Form</li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col items-center gap-3">
        <h1 className="text-xl font-bold">Introdução</h1>
        <p>
          Hooks são funções que permitem usar estado e outras funcionalidades do
          React em componentes funcionais.
        </p>
        <p>
          {' '}
          Eles simplificam a reutilização de lógica de estado e eliminam a
          necessidade de usar classes, tornando os componentes mais simples e
          organizados.
        </p>
        <h1 className="text-xl font-bold">UseState</h1>
        <p>
          O useState é um hook do React que permite adicionar e gerenciar estado
          em componentes funcionais.
        </p>
        <p>
          Ele retorna um par: o valor do estado atual e uma função para
          atualizá-lo. Isso permite que você armazene valores dinâmicos e reaja
          a mudanças dentro de componentes funcionais,
        </p>
        <CardInfo>
          <span>const [user , setUser] = useState(null)</span>
        </CardInfo>
        <Separator />
        <h1 className="text-xl font-bold">UseEffect</h1>
        <p>
          O useEffect é um hook do React que permite executar efeitos colaterais
          em componentes funcionais, como chamadas de API, assinaturas de
          eventos, ou manipulação direta do DOM.
        </p>
        <p>
          Ele roda após a renderização e pode ser configurado para disparar
          apenas quando certas dependências mudam, ajudando a sincronizar seu
          componente com fontes externas de dados ou outros efeitos.
        </p>
        <CardInfo>
          <span>
            UseEffect(( ) {'=>'} {'{ }'}, [ ])
          </span>
        </CardInfo>
        <p>
          Entre as chaves é oque irá ocorrer logo quando o componente se
          renderizar pela primeira vez ou quando uma das variáveis do array
          mudarem.
        </p>
        <Separator />
        <h1 className="text-xl font-bold">UseContext</h1>
        <p>
          O useContext é um hook do React que permite acessar o valor de um
          contexto em componentes funcionais.
        </p>
        <p>
          Ele simplifica o compartilhamento de dados entre componentes,
          eliminando a necessidade de passar props manualmente em vários níveis
          da árvore de componentes.
        </p>
        <p>
          Usando useContext, você pode consumir facilmente dados globais, como
          temas ou informações de autenticação, em qualquer componente que
          precise deles.
        </p>

        <p>Use o createContext para criar seu contexto.</p>
        <p>
          Crie uma interface para o contexto com as variáveis e funções que
          queira passar.
        </p>
        <p>
          Crie também uma interface para o para o provider passando apenas
          children : ReactNode
        </p>
        <p>Use o useContext para usar o contexto</p>
        <CardInfo>
          <span>const UserContext = createContext({'{ }'} as ContextData)</span>
        </CardInfo>
        <CardInfo>
          <span>const {'{ }'} = useContext(UserContext)</span>
        </CardInfo>
        <Separator />
        <h1 className="text-xl font-bold">React Router DOM</h1>
        <p>
          O React Router DOM não é um hook; é uma biblioteca para gerenciar
          rotas em aplicações React. Ele permite a navegação entre diferentes
          páginas ou componentes dentro de uma aplicação de forma dinâmica. No
          entanto, dentro do React Router DOM, existem vários hooks.
        </p>
        <div>
          <ul className="list-inside list-disc">
            <li className="text-lg font-semibold">CreateBrowserRouter</li>
            <li className="text-lg font-semibold">useLocation</li>
            <li className="text-lg font-semibold">useNavigate</li>
            <li className="text-lg font-semibold">RouterProvider</li>
          </ul>
        </div>
        <p>Essas são algumas das importantes funções do react router dom</p>
        <Separator />
        <h1 className="text-xl font-bold">React Hook Form</h1>
        <p>
          O React Hook Form é uma biblioteca para gerenciar formulários em
          React, mas dentro dela, existem vários hooks que facilitam o trabalho
          com formulários. Embora o nome inclua hook, o React Hook Form em si
          não é um hook único; é uma coleção de funcionalidades, incluindo
          vários hooks como useForm, useController, e outros, que ajudam na
          criação e validação de formulários de maneira eficiente.
        </p>
        <p>Utilizamos o zod para validação</p>
        <p>Crie uma constante com o z.object do zod</p>
        <p>Uso o z.infer para criar um tipo de data com essa constante</p>
        <p>
          Use o useForm passando o tipo como o tipo do formulário e passe a
          constante schema dentro do zod resolver
        </p>
        <Separator />
        <h1 className="text-xl font-bold">useReducer</h1>
        <p>
          O useReducer é um hook do React que oferece uma alternativa ao
          useState para gerenciar estados mais complexos. Ele é útil quando o
          estado envolve múltiplos valores ou quando a lógica de atualização é
          mais elaborada. O useReducer funciona como um padrão de reducer em
          Redux: você define uma função reducer que recebe o estado atual e uma
          ação, e retorna o novo estado. Isso ajuda a organizar e manter a
          lógica de estado de forma clara e previsível em componentes
          funcionais.
        </p>
      </div>
    </div>
  )
}
