import { Wand } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { HookSection } from './components/hookComponents/hooksection'

export function Hooks() {
  return (
    <>
      <Helmet title="Hooks" />
      <div className="min-h-full p-8">
        <div className="flex items-center">
          <Wand className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-bold">Instalando Styles</h1>
        </div>

        <div className="m-auto flex flex-col gap-4 p-4">
          <HookSection />
        </div>
      </div>
    </>
  )
}
