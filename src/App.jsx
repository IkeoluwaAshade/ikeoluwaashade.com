import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { mainRoute } from './Router/Router';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div>
        <RouterProvider router={mainRoute} /> 
    </div>
  )
}

export default App