import Login from "../pages/auth/login/Login";
import Registro from "../pages/auth/registro/Registro";

export let RouterApp = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/registro",
        element: <Registro />,
    },
];