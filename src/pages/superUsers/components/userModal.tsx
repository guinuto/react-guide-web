import { zodResolver } from '@hookform/resolvers/zod'
import { CircleUserRound } from 'lucide-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { UserContext } from '@/contexts/user-context'

interface User {
  id: number
  name: string
  email: string
  phone: string
  password: string
}

interface UserModalProps {
  user: User
}

const ModalUserFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
})

type ModalUserFormData = z.infer<typeof ModalUserFormSchema>

export function UserModal({ user }: UserModalProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ModalUserFormData>({
    resolver: zodResolver(ModalUserFormSchema),
  })

  const { userUpdate } = useContext(UserContext)
  const [inputNameValue, setInputNameValue] = useState(user.name)
  const [inputEmailValue, setInputEmailValue] = useState(user.email)
  const [inputPhoneValue, setInputPhoneValue] = useState(user.phone)
  const [updateAuthorization, setUpdateAuthorization] = useState(false)

  async function handleUpdateUser(data: ModalUserFormData) {
    await userUpdate(data, user.id).then(() => {
      setOpen(false)
    })
  }

  const handleChangeSwitch = (isChecked: boolean) => {
    setUpdateAuthorization(isChecked)
  }

  const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(e.target.value)
  }
  const handleInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(e.target.value)
  }
  const handleInputPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhoneValue(e.target.value)
  }

  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <CircleUserRound className="text-blue-800" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-2">
        <DialogHeader>
          <DialogTitle>Informações do usário</DialogTitle>
          <DialogDescription>
            Você pode atualizar as informações do usuário ou apenas ve-las por
            completo.
          </DialogDescription>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleUpdateUser)}
          >
            <div>
              <Label>Nome</Label>
              <Input
                value={inputNameValue}
                {...register('name')}
                onChange={handleInputNameChange}
                disabled={!updateAuthorization}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={inputEmailValue}
                {...register('email')}
                onChange={handleInputEmailChange}
                disabled={!updateAuthorization}
              />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input
                value={inputPhoneValue}
                {...register('phone')}
                onChange={handleInputPhoneChange}
                disabled={!updateAuthorization}
              />
            </div>
            <div className="flex items-center justify-between">
              <Switch
                checked={updateAuthorization}
                onCheckedChange={handleChangeSwitch}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Atualizando informações' : 'Atualizar usuário'}
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
