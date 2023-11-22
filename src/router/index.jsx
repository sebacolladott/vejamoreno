import { createBrowserRouter } from 'react-router-dom'
import { Error } from '../layout/Error'
import { Layout } from '../layout/Layout'
import { Diffusion } from '../pages/Diffusion'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/diffusion',
        element: <Diffusion />
      }
    ]
  }
])
