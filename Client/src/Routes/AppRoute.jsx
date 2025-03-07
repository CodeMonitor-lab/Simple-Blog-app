import React from 'react'
import {Login,PageNotFound,SignUp} from '../Components/index'
import AppLayout from '../Components/Layout/AppLayoute'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<AppLayout/>,
            children:[
                {
                    path:'/',
                    element:<Login/>
                },
                {
                    path:'/SignUp',
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
