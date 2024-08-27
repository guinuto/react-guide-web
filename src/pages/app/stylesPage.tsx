import { Paintbrush } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { StylesSection } from './components/stylesComponents/stylesSection'

export function StylesPage() {
  return (
    <>
      <Helmet title="styles" />
      <div className="min-h-full p-8">
        <div className="flex items-center">
          <Paintbrush className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-bold">Instalando Styles</h1>
        </div>

        <div className="m-auto flex flex-col gap-4 p-4">
          <StylesSection />
        </div>
      </div>
    </>
  )
}
