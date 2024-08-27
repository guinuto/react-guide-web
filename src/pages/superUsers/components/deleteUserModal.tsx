import { Trash } from 'lucide-react'
import { useContext } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { UserContext } from '@/contexts/user-context'
interface User {
  id: number
  name: string
  email: string
  phone: string
  password: string
}

interface DeleteUserModalProps {
  user: User
}
export function DeleteUserModal({ user }: DeleteUserModalProps) {
  const { deleteUser } = useContext(UserContext)
  function handleDeleteUser() {
    deleteUser(user.id)
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="text-red-500">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Confirmar exclusão do usuário {user.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa açaõ não pode ser desfeita. O usuário sairá de nosso banco de
            dados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteUser}>
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
