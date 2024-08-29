import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { UserContext } from '@/contexts/user-context'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const ChangePasswordModalFormSchema = z.object({
  newPassword: z.string().min(5, 'Digite uma senha válida'),
  atualPassword: z.string(),
})

type ChangePasswordModalData = z.infer<typeof ChangePasswordModalFormSchema>

export function ChangePasswordModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordModalData>({
    resolver: zodResolver(ChangePasswordModalFormSchema),
  })

  const { activeUser, userUpdatePassword } = useContext(UserContext)
  const [open, setOpen] = useState(false)

  async function changePassword(data: ChangePasswordModalData) {
    const { atualPassword, newPassword } = data
    if (atualPassword === activeUser?.password) {
      await userUpdatePassword(newPassword, activeUser.id)
      reset()
      setOpen(false)
    } else {
      toast.error('A senha digitada não correspode a senha do usuário atual')
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(open)} variant="outline">
          Alterar senha
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Altere sua senha.</DialogTitle>
          <DialogDescription>
            Atualize sua senha para garantir a segurança da sua conta. Digite
            sua senha atual e escolha uma nova senha forte. Certifique-se de que
            a nova senha seja diferente da anterior.
          </DialogDescription>
        </DialogHeader>
        <form
          action=""
          className="space-y-4"
          onSubmit={handleSubmit(changePassword)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="newPassword">Nova senha</Label>
            <Input
              id="newPassword"
              type="password"
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <p className="text-sm text-red-500">Digte uma senha válida</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="atualPassword">Senha atual</Label>
            <Input
              id="atualPassword"
              type="password"
              {...register('atualPassword')}
            />
          </div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
