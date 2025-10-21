import Login from '../pages/auth/Login'
import Registro from '../pages/auth/Registro'
export let RouterApp =[
    {
        pat: "/login",
        element: <Login/>,
    },
    {
        pat: "/registro",
        element: <Registro/>,
    }
]