import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/main";
import Home from "../../pages/Home/Home/Home";
import Details from "../../pages/Home/Projects/Details";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/projects/:id",
                element: <Details />,
                loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
            }
        ]
    }
])