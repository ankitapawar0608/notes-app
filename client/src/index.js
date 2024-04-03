import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import NewNote from './views/NewNote/NewNote';
import Home from './views/Home/Home';
import {Toaster} from "react-hot-toast"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/new",
    element:<NewNote/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Toaster/>
 <RouterProvider router={router}/>
 </>
);

