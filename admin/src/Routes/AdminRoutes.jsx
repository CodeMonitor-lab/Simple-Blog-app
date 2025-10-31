import React from 'react'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom' 
import {AdminLayout} from '@/layout'

import Login from '@/components/custom/Form/Login' 
import {
  Home,
  Dashboard,
  EditPost,
  Posts,
  AddPost,
  Settings,
  Draft,
  Profile,
  PostMedia,
  PostComment,
  PostCatagory,
  Messages,
  Notification
} from '@/pages/index'
import ProtectedRoutes from './ProtectedRoutes'

const AdminRoutes = () => {
    const router = createBrowserRouter([
      {
        path:'/',
        element:<Login/>
      },
      {
        element:<ProtectedRoutes/>,
        children:[
          {
            path:'/admin',
            element:<AdminLayout/>,
            children:[
              {index:true,element:<Navigate to='/dashboard' replace />},                                                  
              {path:'dashboard',element:<Dashboard/>},
              {path:'add-post',element:<AddPost/>},
              {path:'edit-post/:id',element:<EditPost/>},
              {path:'posts',element:<Posts/>},
              {path:'categories',element:<PostCatagory/>},
              {path:'comments',element:<PostComment/>},
              {path:'media',element:<PostMedia/>},
              {path:'draft',element:<Draft/>},
              {path:'Profile',element:<Profile/>},
              {path:'settings',element:<Settings/>},
              {path:'messages',element:<Messages/>},
              {path:'notification',element:<Notification/>},

            ]
          }
        ]
      }
    ])
  return (
      <RouterProvider router={router}  />
  )
}

export default AdminRoutes
