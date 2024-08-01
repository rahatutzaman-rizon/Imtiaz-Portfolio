import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import App from './App';
import SingleBlog from './Page/Blog/SingleBlog';
import BlogCard from './Page/Blog/BlogCard';
import ContactForm from './component/ContactForm';
import Portfolio from './component/Project';
import About from './component/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[

      {
        path:"/",
        element:<App></App>
      },
    
  
  
  {
    path: "/blog",
    element:<BlogCard></BlogCard>,
  },

  {
    path: "/blog/:id",
    element:<SingleBlog></SingleBlog>,
  },

  {
    path: "/contact",
    element:<ContactForm></ContactForm>
  },
  {
    path:"/achivement",
    element:<Portfolio></Portfolio>
  },
  // {
  //   path: "/project",
  //   element:<AllProjects></AllProjects>,
  // },
  // {
  //   path: "/project/:id",
  //   element:<SingleProject></SingleProject>,
  // },

  {
    path: "/about",
    element:<About></About>,
  },

  // {
  //   path: "/gallery",
  //   element:<Gallery></Gallery>,
  // },

  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
