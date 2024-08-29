import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserContext } from '@/contexts/user-context'

const SignInFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().nonempty('Digite sua senha').min(5, 'Senha inválida'),
})

type SignInFormData = z.infer<typeof SignInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  })

  const { userLogin, activeUser } = useContext(UserContext)

  const navigate = useNavigate()

  async function signInSubmit(data: SignInFormData) {
    await userLogin(data)
      .then(() => {
        navigate('/home')
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error)
      })
  }

  useEffect(() => {
    console.log(activeUser)
  }, [activeUser])

  return (
    <div className="flex flex-col gap-24 p-8">
      <div className="m-auto flex w-1/3 flex-col justify-center gap-4 rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Bem vindo programador!</h1>
          <span className="text-sm text-muted-foreground">Faça seu login</span>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signInSubmit)}
        >
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
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
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
          <span className="text-sm text-muted-foreground">
            Não tem cadastro ? Faça{' '}
            <Link to="/sign-up" className="font-semibold">
              aqui.
            </Link>
          </span>
        </form>
      </div>
      <div>
        <span className="text-sm text-muted-foreground">
          É um parceiro? Clique{' '}
          <Link to="/super-login" className="font-semibold">
            aqui
          </Link>
        </span>
      </div>
    </div>
  )
}
