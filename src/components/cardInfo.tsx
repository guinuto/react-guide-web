import { Copy } from 'lucide-react'
import { ReactNode } from 'react'

type CardInfoProps = {
  children: ReactNode
}

export function CardInfo({ children }: CardInfoProps) {
  return (
    <div className="flex items-center justify-center rounded bg-slate-200 p-2 dark:bg-white dark:text-black">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>

      <Copy className="ml-2 h-4 w-4" />
    </div>
  )
}
