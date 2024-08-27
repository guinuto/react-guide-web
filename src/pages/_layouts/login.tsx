import { Atom } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme/theme-toogle'
import { Button } from '@/components/ui/button'

export function Login() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Atom className="mr-4 h-8 w-8" />
          <h1 className="text-2xl font-semibold">React-guide</h1>
        </div>
        <div className="flex items-center gap-2">
          {pathname === '/sign-in' ? (
            <Link to="/sign-up">
              <Button>Cadastrar</Button>
            </Link>
          ) : pathname === '/sign-up' ? (
            <Link to="/sign-in">
              <Button>Login</Button>
            </Link>
          ) : (
            <h1 className="text-lg font-bold">Admin Use</h1>
          )}
          <ThemeToggle />
        </div>
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
