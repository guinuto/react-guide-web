import { Outlet } from 'react-router-dom'

import { SuperHeader } from '@/components/headerSuper'
import { ScrollToTop } from '@/components/scroll-to-top'

export function SuperDefault() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SuperHeader />
      <Outlet />
    </div>
  )
}
