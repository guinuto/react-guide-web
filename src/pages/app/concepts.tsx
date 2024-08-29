import { Book } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { ConceptsSection } from './components/conceptsComponents/conceptsSection'

export function Concepts() {
  return (
    <>
      <Helmet title="Concepts" />
      <div className="min-h-full p-8">
        <div className="flex items-center">
          <Book className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-bold">Conceitos do React</h1>
        </div>

        <div className="m-auto flex flex-col gap-4 p-4">
          <ConceptsSection />
        </div>
      </div>
    </>
  )
}
