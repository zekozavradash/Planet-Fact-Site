
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import Mercury from "./pages/mercury"
import Venus from "./pages/venus"
import Earth from "./pages/earth"
import Mars from './pages/mars'
import Jupiter from './pages/jupiter'
import Saturn from './pages/saturn'
import Uranus from './pages/uranus'
import Neptune from './pages/neptune'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Mercury />
  },
  {
    path: '/venus',
    element: <Venus />
  },
  {
    path: '/earth',
    element: <Earth />
  },
  {
    path: '/mars',
    element: <Mars />
  },
  {
    path: '/jupiter',
    element: <Jupiter />
  },
  {
    path: '/saturn',
    element: <Saturn />
  },
  {
    path: '/uranus',
    element: <Uranus />
  },
  {
    path: '/neptune',
    element: <Neptune />
  },
]);

export { Router };


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <RouterProvider router={Router} />
    </React.StrictMode>
)
