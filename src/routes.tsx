import { createBrowserRouter } from 'react-router-dom'

import { Default } from './pages/_layouts/default'
import { Login } from './pages/_layouts/login'
import { SuperDefault } from './pages/_layouts/superDefault'
import { Concepts } from './pages/app/concepts'
import Home from './pages/app/home'
import { Hooks } from './pages/app/hooks'
import { Introduction } from './pages/app/introduction'
import { StylesPage } from './pages/app/stylesPage'
import { SignIn } from './pages/login/sign-in'
import { SignInSuper } from './pages/login/sign-in-super'
import { SignUp } from './pages/login/sign-up'
import { Dashboard } from './pages/superUsers/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        path: '/',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/super-login',
        element: <SignInSuper />,
      },
    ],
  },
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/introduction',
        element: <Introduction />,
      },
      {
        path: '/styles',
        element: <StylesPage />,
      },
      {
        path: '/hooks',
        element: <Hooks />,
      },
      {
        path: '/concepts',
        element: <Concepts />,
      },
    ],
  },
  {
    path: '/',
    element: <SuperDefault />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])
