import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { api } from '@/lib/axios'

interface User {
  id: number
  name: string
  email: string
  phone: string
  password: string
}
interface UserLoginData {
  email: string
  password: string
}

interface UserSignUpData {
  name: string
  email: string
  password: string
  phone: string
}

interface UserUpdateData {
  name: string
  email: string
  phone: string
}

interface UserContextType {
  users: User[]
  activeUser: User | null
  fetchUsers: (query?: string) => Promise<void>
  userLogin: (data: UserLoginData) => Promise<void>
  userSignUp: (data: UserSignUpData) => Promise<void>
  userUpdate: (data: UserUpdateData, id: number) => Promise<void>
  userUpdatePassword: (password: string, id: number) => Promise<void>
  deleteUser: (id: number) => Promise<void>
  setActiveUser: React.Dispatch<React.SetStateAction<User | null>>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [activeUser, setActiveUser] = useState<User | null>(null)

  async function fetchUsers(query?: string) {
    const response = await api.get('/users', {
      params: {
        q: query,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function userLogin(data: UserLoginData) {
    const { email, password } = data
    try {
      const response = await api.get('/users', {
        params: { email, password },
      })
      if (response.data.length > 0) {
        setActiveUser(response.data[0])
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

  async function userSignUp(data: UserSignUpData) {
    const { name, email, password, phone } = data
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        phone,
      })
      toast.success('Cadastro realizado com sucesso!')
      setUsers((state) => [...state, response.data])
    } catch (error) {
      toast.error('Erro em criar usuário')
    }
  }

  async function userUpdate(data: UserUpdateData, id: number) {
    const { name, email, phone } = data

    const password = activeUser
      ? activeUser.password
      : users.find((user) => user.id === id)!.password
    try {
      const response = await api.put(`/users/${id}`, {
        name,
        email,
        phone,
        password,
      })
      toast.success('Usuário atualizado com sucesso!')
      setUsers((state) =>
        state.map((user) =>
          user.id === id ? { ...user, ...response.data } : user,
        ),
      )
      if (activeUser != null) {
        setActiveUser((state) => ({ ...state, ...response.data }))
      }
    } catch (error) {
      toast.error('Erro em atualizar usuário')
    }
  }

  async function userUpdatePassword(password: string, id: number) {
    const name = activeUser?.name
    const email = activeUser?.email
    const phone = activeUser?.phone
    try {
      const response = await api.put(`/users/${id}`, {
        name,
        email,
        phone,
        password,
      })
      toast.success('Senha do usuário atualizado com sucesso!')
      setUsers((state) =>
        state.map((user) =>
          user.id === id ? { ...user, ...response.data } : user,
        ),
      )

      setActiveUser((state) => ({ ...state, ...response.data }))
    } catch (error) {
      toast.error('Erro em atualizar senha')
    }
  }

  async function deleteUser(id: number) {
    try {
      await api.delete(`/users/${id}`)
      toast.success('Usuário excluido com sucesso!')
      setUsers((state) => state.filter((user) => user.id !== id))
    } catch (error) {
      toast.error('Erro em atualizar usuário')
    }
  }

  return (
    <UserContext.Provider
      value={{
        users,
        activeUser,
        fetchUsers,
        userLogin,
        userSignUp,
        userUpdate,
        userUpdatePassword,
        deleteUser,
        setActiveUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
