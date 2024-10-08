import { Atom } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toogle'

export function Header() {
  return (
    <header className="flex items-center gap-6 border-b p-6">
      <div className="flex items-center gap-2 text-center">
        <Atom className="h-6 w-6" />
        <h1 className="font-semibold">React-guide</h1>
      </div>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/introduction">Getting Started</NavLink>
        <NavLink to="/styles">Styles</NavLink>
        <NavLink to="/hooks">React Hooks</NavLink>
        <NavLink to="/concepts">Concepts</NavLink>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <AccountMenu />
        <ThemeToggle />
      </div>
    </header>
  )
}
