import { Link } from 'react-router-dom'

import { CardInfo } from '@/components/cardInfo'
import { Separator } from '@/components/ui/separator'

import styledTs from '../../../../assets/styledcomponentsts.png'
import styledTsx from '../../../../assets/styledcomponentstsx.png'
import styledExt from '../../../../assets/styledextendedcomponent.png'

export function StylesSection() {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col gap-2">
        <ul className="list-inside list-disc">
          <li className="text-lg font-semibold">Iniciando Styled Components</li>
          <li className="text-lg font-semibold">Iniciando Shadcn/Ui</li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col items-center gap-3">
        <p>
          Nessa sessão você poderá escolher entre duas formas para estilizar sua
          aplicação
        </p>
        <h1 className="text-xl font-semibold">
          Styled Components ou Shadcn/ui
        </h1>
        <p>
          Para uma aplicação mais personalizada utilizaremos o Styled Components
        </p>
        <CardInfo>
          <span>npm i styled-componets</span>
        </CardInfo>
        <CardInfo>
          <span>npm i @types/styled-componets</span>
        </CardInfo>
        <p>Rode esses dois comandos no seu console. </p>
        <span className="text-sm text-muted-foreground">
          O primeiro comando instala o styled components e o segundo instala a
          tipagem do typescript
        </span>
        <h1 className="text-lg font-semibold">Tutorial Styled</h1>
        <p>
          Crie arquivos .ts e exporte constantes (components) para seu arquivo
          tsx
        </p>
        <div className="w-1/2">
          <img src={styledTs} alt="arquivo ts" className="rounded" />
        </div>
        <span className="text-sm text-muted-foreground">Arquivo .ts</span>
        <div className="w-1/2">
          <img src={styledTsx} alt="arquivo tsx" className="rounded" />
        </div>
        <span className="text-sm text-muted-foreground">Arquivo .tsx</span>
        <p>
          No styled components podemos usar a tipagem de outros styled
          components já feitos e estilizar novamente em outro componente
        </p>
        <div className="w-1/2">
          <img src={styledExt} alt="Componente extendido" className="rounded" />
        </div>
        <Separator orientation="horizontal" />
        <p>Para uma aplicação mais padronizada utilizaremos o shadcn/ui</p>
        <p>
          Aqui nessa sessão teremos só o básico para a instalação do shadcn , se
          quiser saber mais clique{' '}
          <Link to="/shadcnui" className="font-semibold">
            aqui
          </Link>
        </p>
        <h1 className="text-xl font-semibold">Shadcn/ui</h1>
        <CardInfo>
          <span>npm install -D tailwindcss postcss autoprefixer</span>
        </CardInfo>
        <CardInfo>
          <span>npx tailwindcss init -p</span>
        </CardInfo>
        <p>Rode esses dois comandos no console.</p>
        <p>
          A partir daqui continue a instalação pela documentação oficial do
          shadcn/ui{' '}
          <a
            href="https://ui.shadcn.com/docs/installation/vite"
            className="font-semibold"
          >
            - documentação
          </a>
        </p>
      </div>
    </div>
  )
}
