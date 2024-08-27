import { useContext } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { UserContext } from '@/contexts/user-context'

import { DeleteUserModal } from './deleteUserModal'
import { UserModal } from './userModal'

export function UsersTable() {
  const { users } = useContext(UserContext)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="border text-center">ID</TableHead>
          <TableHead className="border text-center">Nome</TableHead>
          <TableHead className="border text-center">Email</TableHead>
          <TableHead className="border text-center">Telefone</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => {
          return (
            <TableRow key={user.id}>
              <TableCell className="border text-center font-semibold">
                {user.id}
              </TableCell>
              <TableCell className="w-1/3 border text-center">
                {user.name}
              </TableCell>
              <TableCell className="border text-center">{user.email}</TableCell>
              <TableCell className="border text-center">{user.phone}</TableCell>
              <TableCell className="flex items-center justify-between">
                <UserModal user={user} />
                <DeleteUserModal user={user} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
