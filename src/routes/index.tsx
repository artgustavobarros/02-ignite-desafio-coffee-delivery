import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layouts/App'
import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Success } from '../pages/Success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'cart/success',
        element: <Success />,
      },
    ],
  },
])
