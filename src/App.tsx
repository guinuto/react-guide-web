import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { SuperUserProvider } from './contexts/super-user-context'
import { UserContextProvider } from './contexts/user-context'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SuperUserProvider>
          <UserContextProvider>
            <Toaster richColors />
            <Helmet titleTemplate="%s | react-guide" />
            <RouterProvider router={router} />
          </UserContextProvider>
        </SuperUserProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
