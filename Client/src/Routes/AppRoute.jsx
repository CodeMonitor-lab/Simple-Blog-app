import React from 'react'
// Components
import {AdminLayoute, PageNotFound} from '../Components/index'
import AppLayout from '../Components/Layout/AppLayoute'
// page
import {Home,Login,SignUp,Fitness,Food,Tech, Admin,Dashboard} from '../pages/index'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/Login',
                    element:<Login/>
                },
                {
                    path:'/Register',
                    element:<SignUp/>
                },
                {
                    path:'/Food',
                    element:<Food/>
                },
                {
                    path:'/Fitness',
                    element:<Fitness/>
                },
                {
                    path:'/Tech',
                    element:<Tech/>
                },
                {
                    path:'*',
                    element:<PageNotFound/>
                }
            ]
        },
        {
                 path:'/Admin',
                 element:<AdminLayoute/>,
                 children:[
                     {
                         path:'/Admin/Dasboard',
                         element:<Dashboard/>
                     },
                     {
                        path:'*',
                        element:<><h1>Page not found</h1></>
                     }
                 ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoute
