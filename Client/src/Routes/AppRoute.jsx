import React from 'react'
// Components
import {Login,PageNotFound,SignUp} from '../Components/index'
import AppLayout from '../Components/Layout/AppLayoute'
// page
import {Home,Register} from '../pages/index'
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
                    path:'/',
                    element:<Login/>
                },
                {
                    path:'/Register',
                    element:<Register/>
                },
                {
                    path:'/SignUp',
                    element:<SignUp/>
                },
                {
                    path:'/Login',
                    element:<Login/>
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
