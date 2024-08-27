import { Link } from 'react-router-dom'

import { CardInfo } from '@/components/cardInfo'
import { Button } from '@/components/ui/button'

export function IntroSection() {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col gap-2">
        <ul className="list-inside list-disc">
          <li className="text-lg font-semibold">Iniciando projeto</li>
          <li className="text-lg font-semibold">Instalando Eslint</li>
          <li className="text-lg font-semibold">Instalando Prettier</li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col items-center gap-3">
        <CardInfo>
          <span>npm create vite@latest</span>
        </CardInfo>
        <p>
          Use esse comando para criar um novo projeto usando o{' '}
          <Link to="/help/vite" className="font-semibold">
            Vite
          </Link>
        </p>
        <span className="text-sm text-muted-foreground">
          O Node.js deve estar instalado em sua máquina.
        </span>

        <CardInfo>
          <span id="npmInstall">npm install</span>
        </CardInfo>
        <p>
          Use o npm install para instalar as dependências. Remova todos os
          arquivos .css e retire suas importações do App.tsx e main.tsx
        </p>
        <p>Após isso remova o arquivo eslint.config.js</p>
        <p>
          Vá ate o arquivo package.json e retire todos os pacotes do eslint.
        </p>
        <p>
          Dê o{' '}
          <label htmlFor="npmInstall" className="font-semibold">
            npm install
          </label>{' '}
          novamente
        </p>
        <CardInfo>npm install eslint@8.57.0 --save-dev</CardInfo>
        <span className="text-sm text-muted-foreground">
          Essa versão ainda usa o arquivo JSON e os antigos comandos de console.
        </span>
        <CardInfo>npm i @rocketseat/eslint-config -D</CardInfo>
        <span className="text-sm text-muted-foreground">
          Utilizo do padrão de correção de código utilizado pela Rocketseat.
        </span>
        <p>Crie um arquivo &quot;.eslintrc.config.json&quot;</p>
        <CardInfo>
          <pre>
            <code>{'{ "extends":"@rocketseat/eslint-config/react"}'}</code>
          </pre>
        </CardInfo>
        <p>Insira isso dentro do seu arquivo recem criado Eslint.</p>
        <span className="text-sm text-muted-foreground">
          Nas configs de seu VsCode mude nas preferências para dar fix quando
          salvar o arquivo.
        </span>
        <CardInfo>
          <span>npm install --save-dev eslint-plugin-simple-import-sort</span>
        </CardInfo>
        <span className="text-sm text-muted-foreground">
          Instala um plugin para o Eslint para arrumar importações
        </span>
        <CardInfo>
          <pre>
            <code> {'"plugins": ["simple-import-sort"],'}</code>
          </pre>
          <pre>
            <code>{' "rules": {"simple-import-sort/imports": "error"}'}</code>
          </pre>
        </CardInfo>
        <p>Adicione esse fragmento de código dentro do seu arquivo Eslint</p>
        <p>
          Crie um arquivo{' '}
          <span className="font-semibold">prettier.config.cjs</span> e rode esse
          comando no console:
        </p>
        <CardInfo>
          <span>npm i -D prettier-plugin-tailwindcss</span>
        </CardInfo>
        <span className="text-sm text-muted-foreground">
          Só utilizamos o prettier caso escolhemos o shadcn como no framework de
          estilização
        </span>
        <CardInfo>
          <pre>
            <code>
              module.exports = &#123;plugins:
              [&quote;prettier-plugin-tailwindcss&quote;]&#125;
            </code>
          </pre>
        </CardInfo>
        <p>
          Adicione esse fragmento de código dentro do seu arquivo pré criado
        </p>
        <p>As configs inicias estão prontas !!</p>
        <Link to="/styles">
          <Button>Vamos estilizar nossa aplicação? </Button>
        </Link>
      </div>
    </div>
  )
}
