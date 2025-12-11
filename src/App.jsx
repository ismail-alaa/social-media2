

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MainLayout from './Layouts/MainLayout';
import FeedPage from './Pages/FeedPage';
import PostDetailsPage from './Pages/PostDetailsPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import  { useEffect, useState } from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute';
import ProdectAuth from './ProtectedRoutes/ProdectAuth';
import LoadingPage from './Pages/LoadingPage';
import UserProfilePages from './Pages/UserProfilePages';
import ChangePasswordPage from './Pages/ChangePasswordPage';






const router = createBrowserRouter([
  {
    path: "", element: <AuthLayout />, children: [
      { path: "login", element: <ProdectAuth><LoginPage /></ProdectAuth> },
      { path: 'register', element: <ProdectAuth><RegisterPage /></ProdectAuth> },
    ]
  },
  {
    path: "", element: <MainLayout />, children: [
      { index: true, element: <ProtectedRoute><FeedPage /></ProtectedRoute> },
      { path: "post-detailes/:id", element: <ProtectedRoute><PostDetailsPage /></ProtectedRoute> },
      { path: "profile/:id/posts", element:<ProtectedRoute><ProfilePage /></ProtectedRoute>  },
      { path: "userprofile/:id/posts", element:<ProtectedRoute><UserProfilePages /></ProtectedRoute>  },
      { path: "profile/changepassword", element:<ProtectedRoute><ChangePasswordPage /></ProtectedRoute>  },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
])

export default function App() {
  const [isloading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1700);
  },[])


  return (
    <>

      {
        isloading? <LoadingPage />:<RouterProvider router={router} />
      }
      
      
    </>
  )
}


