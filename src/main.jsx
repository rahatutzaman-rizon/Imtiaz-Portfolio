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

import About from './component/About';
import Projects from './component/Projects';
import SingleProject from './component/ProjectDetails';
import Portfolio from './component/Portfolio';
import AwardsAndAchievements from './component/Awards';


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
    path:"/achievement",
    element:<AwardsAndAchievements></AwardsAndAchievements>
  },
  {
    path: "/project",
    element:<Projects></Projects>
  },
  {
    path: "/project/:id",
    element:<SingleProject></SingleProject>
  },

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
