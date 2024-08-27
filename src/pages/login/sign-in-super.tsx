import { zodResolver } from '@hookform/resolvers/zod'
import { CornerDownLeft } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SuperUserContext } from '@/contexts/super-user-context'

const SignInSuperFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().nonempty('Digite sua senha').min(5, 'Senha inválida'),
})

type SignInSuperFormData = z.infer<typeof SignInSuperFormSchema>

export function SignInSuper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSuperFormData>({
    resolver: zodResolver(SignInSuperFormSchema),
  })

  const { superUserLogin } = useContext(SuperUserContext)

  const navigate = useNavigate()

  function signInSubmit(data: SignInSuperFormData) {
    superUserLogin(data)
      .then(() => {
        navigate('/dashboard')
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error)
      })
  }
  return (
    <div className="flex flex-col gap-24 p-8">
      <div className="m-auto flex w-1/3 flex-col justify-center gap-4 rounded-lg border p-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">Bem vindo parceiro!</h1>
            <span className="text-sm text-muted-foreground">
              Administre os alunos do curso
            </span>
          </div>
          <Link to="/sign-in">
            <CornerDownLeft className="h-6 w-6" />
          </Link>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signInSubmit)}
        >
          <div className="space-y-1">
            <Label htmlFor="email">e-mail</Label>
            <Input
              id="email"
              placeholder="seuemail@email.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Sua senha</Label>
            <Input type="password" id="password" {...register('password')} />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  )
}
