import { BadgeHelp, LogOut, User } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '@/contexts/user-context'

import { PefilModal } from './perfilModal'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  const { activeUser, setActiveUser } = useContext(UserContext)
  function formatName() {
    const firstNname = activeUser?.name.split(' ')[0]
    return firstNname
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <span className="font-bold">User: {formatName()}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <PefilModal />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center">
          <BadgeHelp className="mr-2 h-4 w-4" />
          <span>Ajuda</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="/"
            className="flex w-full items-center"
            onClick={() => setActiveUser(null)}
          >
            <LogOut className="mr-2 h-4 w-4 text-red-500" />
            <span>Logout</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
