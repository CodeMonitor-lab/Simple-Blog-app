import React from 'react'
// Components
import {PageNotFound} from '../Components/index'
import AppLayout from '../Components/Layout/AppLayoute'
// page
import {Home,Login,SignUp} from '../pages/index'
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
                    path:'*',
                    element:<PageNotFound/>
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoute
