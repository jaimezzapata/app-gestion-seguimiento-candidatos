import './App.css'
import {createBrouserRouter, RouterProvider} from 'React-router-dom'
import { RouterApp } from './routes/RouterApp'

function App() {
 
  return (
    <RouterProvider router={createBrouserRouter(RouterApp)} />
  )
}

export default App
