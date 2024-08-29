import { Atom } from 'lucide-react'

import { NavLink } from './nav-link'
import { SuperUserMenu } from './superUser-menu'
import { ThemeToggle } from './theme/theme-toogle'

export function SuperHeader() {
  return (
    <header className="flex items-center gap-6 border-b p-6">
      <div className="flex items-center gap-2 text-center">
        <Atom className="h-6 w-6" />
        <h1 className="font-semibold">React-guide</h1>
      </div>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/">Dashboard</NavLink>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <SuperUserMenu />
        <ThemeToggle />
      </div>
    </header>
  )
}
