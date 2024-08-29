import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserContext } from '@/contexts/user-context'

const SignUpFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(3, 'Insira um nome válido'),
  email: z.string().email(),
  phone: z.string().nonempty('Insira um telefone válido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(5, 'Insira uma senha válida'),
})

type SignUpFormData = z.infer<typeof SignUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()
  const { userSignUp } = useContext(UserContext)

  async function signUpSubmit(data: SignUpFormData) {
    await userSignUp(data)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.error('Erro ao fazer cadastro:', error)
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  })
  return (
    <div className="p-4">
      <div className="m-auto flex w-1/3 flex-col justify-center gap-4 rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Cadastre-se na nossa plataforma!</h1>
          <span className="text-sm text-muted-foreground">
            Faça seu cadastro
          </span>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signUpSubmit)}
        >
          <div className="space-y-1">
            <Label htmlFor="name">Seu nome</Label>
            <Input type="text" id="name" {...register('name')} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              placeholder="seuemail@email.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">Email inválido</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input id="phone" placeholder="(55)61" {...register('phone')} />
            {errors.email && (
              <p className="text-sm text-red-500">Email inválido</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Sua senha</Label>
            <Input type="password" id="password" {...register('password')} />
            {errors.password && (
              <p className="text-sm text-red-500">A senha é obrigatória</p>
            )}
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Finalizar cadastro
          </Button>

          <span className="text-sm text-muted-foreground">
            Já tem cadastro ? Faça{' '}
            <Link to="/sign-in" className="font-semibold">
              login.
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}
