import { createBrowserRouter } from 'react-router-dom';
import WebLayout from './WebLayout';
import Home from '../pages/landingPage/Home'
import Project from '../pages/project/Projects';
import Blog from '../pages/Blog/Blog';
import Photography from '../pages/photography/Photography';

export const mainRoute = createBrowserRouter([
  {
    element: <WebLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/project', element: <Project /> },
      { path: '/blog', element: <Blog /> },
      { path: '/photography', element: <Photography /> },
    ],
  },
]);
