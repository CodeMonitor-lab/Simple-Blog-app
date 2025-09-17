import React from 'react'
// Components
import {AdminLayoute , PageNotFound} from '../Components/index'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AppLayout from '../Components/Layout/AppLayoute'
// Public
import {Home,Login,SignUp,Fitness,Food,Tech} from '../pages/index'
// Admin
import {Catagory,Admin,Dashboard} from '../pages/Admin/index'
// Private Routes
import PrivateRoute from './PrivateRoute'

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
                 element:<Admin/>,
                 children:[
                    {
                        path:'/Admin/Dashboard',
                        element:<PrivateRoute element={<AdminLayoute/>} />,
                        children:[
                            {
                                path:'/Admin/Dashboard',
                                // element:<PrivateRoute index element={<Dashboard/>}/>
                                element:<Dashboard/>
                            },
                          {
                            path:'/Admin/Dashboard/Catagory',
                            element:<Catagory/>
                          },
                          {
                            path:'*',
                            element:<>Page Not Found</>
                          }
                        ]

                    },
                 ]

        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoute
