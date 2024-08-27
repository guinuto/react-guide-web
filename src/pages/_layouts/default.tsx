import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'

export function Default() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  )
}
