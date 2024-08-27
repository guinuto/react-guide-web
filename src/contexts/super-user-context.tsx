import { createContext, ReactNode, useState } from 'react'
import { toast } from 'sonner'

import { api } from '@/lib/axios'

interface SuperUser {
  email: string
  password: string
}

interface SuperUserProviderProps {
  children: ReactNode
}

interface SuperUserLoginData {
  email: string
  password: string
}

interface SuperUserContextType {
  superUsers: SuperUser[]
  superUserLogin: (data: SuperUserLoginData) => Promise<void>
}

export const SuperUserContext = createContext({} as SuperUserContextType)

export function SuperUserProvider({ children }: SuperUserProviderProps) {
  async function superUserLogin(data: SuperUserLoginData) {
    const { email, password } = data
    try {
      const response = await api.get('/superusers', {
        params: { email, password },
      })
      if (response.data.length > 0) {
        toast.success('Login realizado com sucesso!')
      } else {
        toast.error('Credenciais inválidas')
        throw new Error()
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }
  const [superUsers, setSuperUsers] = useState<SuperUser[]>([])

  return (
    <SuperUserContext.Provider value={{ superUsers, superUserLogin }}>
      {children}
    </SuperUserContext.Provider>
  )
}
