import { ScrollArea } from '@/components/ui/scroll-area'

import { SearchUsers } from './components/searchUsers'
import { UsersTable } from './components/usersTable'

export function Dashboard() {
  return (
    <div className="flex h-[535px] flex-col gap-4 overflow-auto p-8">
      <SearchUsers />
      <ScrollArea className="rounded border">
        <UsersTable />
      </ScrollArea>
    </div>
  )
}
