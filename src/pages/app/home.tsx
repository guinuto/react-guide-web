import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import reactImg from '../../assets/react.png'

export default function Home() {
  return (
    <>
      <Helmet title="home" />
      <div className="min-h-full">
        <div className="grid w-full grid-cols-[1fr_400px] gap-36 p-8">
          <div className='className="max-w-40 flex flex-col gap-4'>
            <img src={reactImg} alt="react img" className="w-full rounded" />
            <Link to="/introduction">
              <Button className="w-full">Começar a codar !!</Button>
            </Link>
          </div>
          <div className="flex gap-4 font-semibold">
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center gap-4">
              <h3>
                Bem-vindo ao nosso Guia Completo de React, sua fonte definitiva
                para aprender e dominar uma das bibliotecas mais populares e
                amplamente utilizadas no desenvolvimento web moderno. React é a
                escolha preferida de desenvolvedores ao redor do mundo para
                criar interfaces de usuário dinâmicas e interativas. Este guia
                foi projetado para acompanhá-lo em cada etapa da sua jornada com
                React, desde os fundamentos básicos até técnicas avançadas.
              </h3>
              <h3>
                React é uma biblioteca JavaScript desenvolvida pelo Facebook
                para construir interfaces de usuário, especialmente para
                aplicações de página única (SPAs). Com o React, você pode criar
                componentes reutilizáveis que permitem um desenvolvimento mais
                rápido e eficiente.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
