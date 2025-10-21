import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {RouterApp} from './routes/RouterApp'

function App() {
 
  return (
    <section>
       <RouterProvider router={createBrowserRouter(RouterApp)}/>
    </section>
  )
}

export default App
