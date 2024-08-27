import { BadgeHelp, LogOut, User } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <span className="font-bold">User: React User</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>User infos</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BadgeHelp className="mr-2 h-4 w-4" />
          <span>Ajuda</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/sign-in" className="flex w-full items-center">
            <LogOut className="mr-2 h-4 w-4 text-red-500" />
            <span>Logout</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
