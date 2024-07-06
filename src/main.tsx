
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
    path: 'https://planet-fact-site-mu.vercel.app/',
    element: <Mercury/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/venus',
    element: <Venus/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/earth',
    element: <Earth/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/mars',
    element: <Mars/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/jupiter',
    element: <Jupiter/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/saturn',
    element: <Saturn/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/uranus',
    element: <Uranus/>
  },
  {
    path: 'https://planet-fact-site-mu.vercel.app/neptune',
    element: <Neptune/>
  },
]);

export { Router };


ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router={Router}/>
  
)
