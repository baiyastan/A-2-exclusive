import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "*",
                element: <Notfound/>
            }
        ]
    }
])