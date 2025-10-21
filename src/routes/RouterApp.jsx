import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";

export let RouterApp=[
    {
        path:"/Login",
        element: <Login />
    },
    {
        path:"/registro",
        element: <Registro />
    },
]