import { CirclePlay } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { IntroSection } from './components/introComponents/introSection'

export function Introduction() {
  return (
    <>
      <Helmet title="getting-started" />
      <div className="min-h-full p-8">
        <div className="flex items-center">
          <CirclePlay className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-bold">Introdução</h1>
        </div>
        <div className="m-auto flex flex-col gap-4 p-4 pb-1">
          <IntroSection />
        </div>
      </div>
    </>
  )
}
