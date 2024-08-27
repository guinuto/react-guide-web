import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserContext } from '@/contexts/user-context'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof SearchFormSchema>

export function SearchUsers() {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  })

  const { fetchUsers } = useContext(UserContext)

  function handleSearchUser(data: SearchFormData) {
    const { query } = data
    fetchUsers(query)
  }
  return (
    <form className="flex gap-4" onSubmit={handleSubmit(handleSearchUser)}>
      <Input
        className="w-1/3"
        placeholder="Digite oque procura"
        {...register('query')}
      />
      <Button type="submit">
        <Search />
      </Button>
    </form>
  )
}
