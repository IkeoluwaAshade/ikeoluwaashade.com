import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout/WebLayout";
import Home from "../pages/Home/Home";
import Project from "../pages/Projects/Project";
import Blog from "../pages/Blog/Blog";
import Photography from '../pages/Photography/Photography'

export const mainRoute = createBrowserRouter ([
    {
        element: <WebLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />,
            },

            {
                path: '/project',
                element: <Project />,
            },

            {
                path: '/blog',
                element: <Blog />,
            },

            {
                path: '/photography',
                element: <Photography />,
            }
        ]
    }
])