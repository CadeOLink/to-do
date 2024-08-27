import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Routers/Home.jsx'
import CreateNewToDo from './Routers/CreateNewToDo.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/CreateNewToDo",
    element:<CreateNewToDo/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
