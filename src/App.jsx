import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { RouterApp } from './routes/RouterApp'
function App() {
 
  return (
    <RouterProvider router={createBrowserRouter(RouterApp)}/>
  )
}

export default App;
