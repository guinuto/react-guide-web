import { zodResolver } from '@hookform/resolvers/zod'
import { CircleUser } from 'lucide-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UserContext } from '@/contexts/user-context'

import { ChangePasswordModal } from './changePasswordModal'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const PerfilModalFormSchema = z.object({
  name: z.string().nonempty('Digite um nome').min(5, 'Digite um nome válido'),
  email: z.string().email('Digite e-mail válido'),
  phone: z.string().nonempty('Digite um telefone válido'),
})

type PerfilModalFormData = z.infer<typeof PerfilModalFormSchema>

export function PefilModal() {
  const { activeUser, userUpdate } = useContext(UserContext)
  const [nameInput, setNameInput] = useState(activeUser?.name)
  const [emailInput, setEmailInput] = useState(activeUser?.email)
  const [phoneInput, setPhoneInput] = useState(activeUser?.phone)
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PerfilModalFormData>({
    resolver: zodResolver(PerfilModalFormSchema),
  })

  function formatName() {
    const firstNname = activeUser?.name.split(' ')[0]
    return firstNname
  }

  function changeNameValue(e: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value)
  }

  function changeEmailValue(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(e.target.value)
  }

  function changePhoneValue(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneInput(e.target.value)
  }

  async function handleChangeUserInfos(data: PerfilModalFormData) {
    await userUpdate(data, activeUser!.id).then(() => {
      setOpen(false)
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center text-start text-sm">
          <Button variant="ghost" onClick={() => setOpen(true)}>
            <CircleUser className="mr-2 h-4 w-4" />
            <span>Sua conta</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar suas informações {formatName()}</DialogTitle>
          <DialogDescription>
            Revise e atualize suas informações pessoais abaixo. Certifique-se de
            que todos os detalhes estão corretos antes de salvar as alterações.
          </DialogDescription>
        </DialogHeader>
        <form
          action=""
          className="space-y-4"
          onSubmit={handleSubmit(handleChangeUserInfos)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              value={nameInput}
              id="name"
              {...register('name')}
              onChange={changeNameValue}
              tabIndex={-1}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={emailInput}
              id="email"
              {...register('email')}
              onChange={changeEmailValue}
              tabIndex={-1}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              value={phoneInput}
              id="phone"
              {...register('phone')}
              onChange={changePhoneValue}
              tabIndex={-1}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </form>

        <ChangePasswordModal />
      </DialogContent>
    </Dialog>
  )
}
