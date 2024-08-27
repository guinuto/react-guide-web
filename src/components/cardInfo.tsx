import { Copy } from 'lucide-react'
import { ReactNode } from 'react'

import { Button } from './ui/button'

type CardInfoProps = {
  children: ReactNode
}

export function CardInfo({ children }: CardInfoProps) {
  return (
    <div className="flex justify-center rounded bg-slate-200 pl-4 dark:bg-white dark:text-black">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Button variant="link" className="ml-4 mr-2 p-0">
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  )
}
